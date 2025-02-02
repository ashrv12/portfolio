import "server-only";

import {
  files_table as FilesSchema,
  folders_table as FoldersSchema,
  DB_FileType,
  DB_FolderType,
} from "~/server/db/schema";
import { db } from "~/server/db";
import { eq } from "drizzle-orm";

export const QUERIES = {
  getFolders: function (folderId: number) {
    return db
      .select()
      .from(FoldersSchema)
      .where(eq(FoldersSchema.parent, folderId));
  },

  getFiles: function (folderId: number) {
    return db
      .select()
      .from(FilesSchema)
      .where(eq(FilesSchema.parent, folderId));
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
      .values({ ...input.file, parent: input.file.parent });
  },
};
