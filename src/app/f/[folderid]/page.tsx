import {
  files as FilesSchema,
  folders as FoldersSchema,
} from "~/server/db/schema";
import { db } from "~/server/db";
import DriveContents from "../../drive-contents";
import { eq } from "drizzle-orm";

async function getAllParents(folderId: number) {
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
}

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderid: string }>;
}) {
  const params = await props.params;

  const parsedFolderId = parseInt(params.folderid);

  if (isNaN(parsedFolderId)) {
    return <div>Invalid Folder ID</div>;
  }

  const foldersPromise = db
    .select()
    .from(FoldersSchema)
    .where(eq(FoldersSchema.parent, parsedFolderId));

  const filesPromise = db
    .select()
    .from(FilesSchema)
    .where(eq(FilesSchema.parent, parsedFolderId));

  const parentsPromise = getAllParents(parsedFolderId);

  const [folders, files, parents] = await Promise.all([
    foldersPromise,
    filesPromise,
    parentsPromise,
  ]);

  return <DriveContents files={files} folders={folders} parents={parents} />;
}
