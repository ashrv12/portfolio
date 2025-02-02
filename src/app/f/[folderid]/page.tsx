import {
  files as FilesSchema,
  folders as FoldersSchema,
} from "~/server/db/schema";
import { db } from "~/server/db";
import DriveContents from "../../drive-contents";
import { eq } from "drizzle-orm";

export default async function GoogleDriveClone(props: {
  params: Promise<{ folderid: string }>;
}) {
  const params = await props.params;

  const parsedFolderId = parseInt(params.folderid);

  if (isNaN(parsedFolderId)) {
    return <div>Invalid Folder ID</div>;
  }

  const folders = await db
    .select()
    .from(FoldersSchema)
    .where(eq(FoldersSchema.parent, parsedFolderId));

  const files = await db
    .select()
    .from(FilesSchema)
    .where(eq(FilesSchema.parent, parsedFolderId));
  return <DriveContents files={files} folders={folders} />;
}
