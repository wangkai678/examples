const difference = require('lodash.difference');
const mapLimit = require('map-limit');

module.exports = {
  /**
   * 合并文件列表
   * @param {Array<string>} prevFiles 上一版本文件列表
   * @param {Array<string>} currentFiles 当前线上的文件列表
   * @param {Array<string>} releaseFiles 等待发布的文件列表
   * 
   * let prevFiles = [1, 2, 3, 4]
   * let currentFiles = [1, 2, 5, 6]
   * let releaseFiles = [1, 2, 7, 8]
   * 
   * deleteFiles:
   * _.difference(prevFiles, currentFiles)  // [3, 4]
   * 
   * uploadFiles:
   * _.difference(releaseFiles, currentFiles)  // [7, 8]
   * 
   * 
   */
  combineFiles(prevFiles, currentFiles, releaseFiles) {
    let deleteFiles = difference(prevFiles, currentFiles);
    let uploadFiles = difference(releaseFiles, currentFiles);
    
    deleteFiles = difference(deleteFiles, uploadFiles);
    
    // 返回最终要上传的文件列表
    return {
      uploadFiles,
      deleteFiles
    };
  },
  
  mapLimit(list, limit, iterator) {
    return new Promise((resolve, reject) => {
      mapLimit(
        list,
        limit,
        iterator,
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      )
    })
  }
}