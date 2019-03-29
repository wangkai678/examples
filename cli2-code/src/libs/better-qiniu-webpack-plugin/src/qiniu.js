const qiniu = require('qiniu');

class Qiniu {
  constructor({ bucket, accessKey, secretKey, domain }) {
    this._domain = domain;
    this._bucket = bucket;
    this._config = new qiniu.conf.Config();
    this._mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    this._bucketManager = new qiniu.rs.BucketManager(this._mac, this._config);
  }

  getToken(options) {
    options = Object.assign({
      scope: this._bucket
    }, options);

    let putPolicy = new qiniu.rs.PutPolicy(options);
    return putPolicy.uploadToken(this._mac);
  }

  getExtra(options = { }) {
    const extra = new qiniu.form_up.PutExtra();
    
    Object.keys(options || { }).forEach(key => {
      extra[key] = options[key];
    });

    return extra;
  }

  putFile(remotePath, localFilePath, options = { }) {
    let extra = this.getExtra(options);
    let token = this.getToken({
      scope: this._bucket + ':' + remotePath
    });
    
    let formUploader = new qiniu.form_up.FormUploader(this._config);

    return new Promise((resolve, reject) => {
      formUploader.putFile(token, remotePath, localFilePath, extra, (err, resBody, resInfo) => {
        if (err) {
          return reject(err);
        }

        if (resInfo.statusCode == 200) {
          resolve(resBody);
        } else {
          reject({
            code: resInfo.statusCode,
            data: resBody
          })
        }
      })
    })
  }


  put(remotePath, text, options = { }) {
    let extra = this.getExtra(options);
    let token = this.getToken({
      scope: this._bucket + ':' + remotePath
    });
    
    let formUploader = new qiniu.form_up.FormUploader(this._config);

    return new Promise((resolve, reject) => {
      formUploader.put(token, remotePath, text, extra, (err, resBody, resInfo) => {
        if (err) {
          return reject(err);
        }

        if (resInfo.statusCode == 200) {
          resolve(resBody);
        } else {
          reject({
            code: resInfo.statusCode,
            data: resBody
          })
        }
      })
    })
  }

  batchDelete(keys = []) {
    keys = keys.map((key, index) => qiniu.rs.deleteOp(this._bucket, key));
    
    return new Promise((resolve, reject) => {
      this._bucketManager.batch(keys, (err, resBody, resInfo) => {
        if (err) {
          return reject(err);
        }
        if (resInfo.statusCode === 200 || resInfo.statusCode === 298) {
          resolve({
            code: resInfo.statusCode,
            data: resBody
          })
        } else {
          reject({
            code: resInfo.statusCode,
            data: resBody
          })
        }
      })
    })
  }

  getPublicDownloadUrl(remotePath) {
    let publicDownloadUrl = this._bucketManager.publicDownloadUrl(this._domain, remotePath);
    return publicDownloadUrl;
  }
  
}

module.exports = Qiniu;