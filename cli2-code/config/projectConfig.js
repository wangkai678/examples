/**
 * Created by wangkai on 2018/8/31.
 */

const projectName = require('./project')

const config = {
  wyd:{
    localPath:'./src/controller/weiYeDai/',
    uploadPath:'/h5/wyd/',
    uploadPathTest:'/h5/wyd/test'
  },
  // 代理商
  // dls:{
  //   localPath:'./src/controller/daiLiShang/',
  //   uploadPath:'/h5/dls/',
  //   uploadPathTest:'/h5/dls/test',
  // }
}

const configObj = config[projectName.name]
module.exports = configObj
