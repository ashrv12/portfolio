import "server-only";

import {
  files_table as FilesSchema,
  folders_table as FoldersSchema,
} from "~/server/db/schema";
import { db } from "~/server/db";
import { eq, isNull, and } from "drizzle-orm";

export const QUERIES = {
  getFolders: function (folderId: number) {
    return db
      .select()
      .from(FoldersSchema)
      .where(eq(FoldersSchema.parent, folderId))
      .orderBy(FoldersSchema.id);
  },

  getFiles: function (folderId: number) {
    return db
      .select()
      .from(FilesSchema)
      .where(eq(FilesSchema.parent, folderId))
      .orderBy(FilesSchema.id);
  },

  getAllParentsForFolder: async function (folderId: number) {
    const parents = [];

    let currentId: number | null = folderId;
    while (currentId !== null) {
      const folder = await db
        .selectDistinct()
        .from(FoldersSchema)
        .where(eq(FoldersSchema.id, currentId));

      if (!folder[0]) {
        throw new Error("Folder not found");
      }
      parents.unshift(folder[0]);
      currentId = folder[0]?.parent;
    }

    return parents;
  },
  getFolderById: async function (folderId: number) {
    const folder = await db
      .select()
      .from(FoldersSchema)
      .where(eq(FoldersSchema.id, folderId));
    return folder[0];
  },

  getRootFolderForUser: async function (userId: string) {
    const folder = await db
      .select()
      .from(FoldersSchema)
      .where(
        and(eq(FoldersSchema.ownerId, userId), isNull(FoldersSchema.parent)),
      );
    return folder[0];
  },
};

export const MUTATIONS = {
  createFile: async function (input: {
    file: {
      name: string;
      size: number;
      url: string;
      parent: number;
    };
    userId: string;
  }) {
    return await db
      .insert(FilesSchema)
      .values({ ...input.file, ownerId: input.userId });
  },

  onboardUser: async function (userId: string) {
    const rootFolder = await db
      .insert(FoldersSchema)
      .values({
        name: "root",
        parent: null,
        ownerId: userId,
      })
      .$returningId();

    const rootFolderId = rootFolder[0]!.id;

    await db.insert(FoldersSchema).values([
      {
        name: "Videos",
        parent: rootFolderId,
        ownerId: userId,
      },
      {
        name: "Thumbnails",
        parent: rootFolderId,
        ownerId: userId,
      },
      {
        name: "Assets",
        parent: rootFolderId,
        ownerId: userId,
      },
    ]);

    return rootFolderId;
  },
};
