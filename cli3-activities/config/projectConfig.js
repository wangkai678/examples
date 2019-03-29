/**
 * Created by guoguanrong on 2019/3/19.
 */

const projectName = require('./project')

const config = {
    //活动1
    projectA: {
      pages: {
        index: {
          entry: 'src/projects/projectA/main.js',
          template: 'public/index.html',
          filename: 'index.html',
        }
      }
    },
    //活动2
    projectB: {
    }
}

const configObj = config[projectName.name]
module.exports = configObj
