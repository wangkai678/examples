/**
 * Created by wangkai on 2018/5/16.
 */

export default {
  isWeChat(){
    //平台、设备和操作系统
    var system ={
      win : false,
      mac : false,
      xll : false
    };
    //检测平台
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
    if(system.win||system.mac||system.xll){
      //PC
      console.log('PC');
    }else{
      //移动
      console.log('MOBILE');
      var ua = navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i)=="micromessenger") {
        //微信
        return true
      }
    }
    return false
  },
  //动态注册组件
  // registerComponent(templateName){
  //   return import(`./../dashComponent/${templateName}.vue`).then((component) => {
  //     return Vue.component(templateName, component)
  //   })
  // }
}
