import {
  files as FilesSchema,
  folders as FoldersSchema,
} from "~/server/db/schema";
import { db } from "~/server/db";
import DriveContents from "./drive-contents";

export default async function GoogleDriveClone() {
  const files = await db.select().from(FilesSchema);
  const folders = await db.select().from(FoldersSchema);

  return <DriveContents files={files} folders={folders} />;
}
