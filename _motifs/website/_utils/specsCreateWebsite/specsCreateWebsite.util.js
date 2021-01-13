import fileMotif from "motifs-js/_motifs/file/file.motif.js"
import folderMotif from "motifs-js/_motifs/folder/folder.motif.js"

/** Creates an `<id>/<id>.website.js` tree
 * at given scope. */
export default async (scope, id) => {
  const folderPath = scope + '/' + id
  await folderMotif.create(folderPath)
  await fileMotif.create(
    folderPath,
    id + '.website.js',
    () => `export default {
  id: '${ id }',
  provision: async () => {},
  mapping: () => []
}`
  )
  return
}