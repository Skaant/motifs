import fs from 'fs'

/** FILE CREATE WAY
 * 
 * Given a `scope` and a `name`,
 *  creates a new file.
 * 
 * `callback` returns data
 *  for file to be filled with.
 * 
 * @param {string} scope
 * @param {string} name
 * @param {(folderScope: string) => string} callback
 *  Returned `string` is file content.
 */
export default (
  scope,
  name,
  callback,
  {
    log,
    force
  } = {}
) =>

  new Promise((resolve, reject) => {

    const filePath = global.PROJECT_PATH
      + ( scope[0] === '/' ? '' : '/' )
      + scope 
      + '/' + name

    fs.exists(
      filePath,
      exists => {

        if (exists && !force) {

          reject(new Error(filePath + ' already exists !'
            + '\nOperation aborted.'))
        }

        fs.writeFile(
          filePath,
          callback(scope),
          err => err ? reject(err) : resolve())
      }
    )
  })