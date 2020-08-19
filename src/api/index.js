/*
 * @Author: liujinyuan
 * @Date: 2020-04-24 12:44:06
 * @LastEditTime: 2020-08-19 15:53:14
 * @LastEditors: xieruizhi
 * @Description: 
 * @FilePath: \jmax_rn_r3\src\api\index.js
 */

import {Api} from 'react-native-jimi';

Api.setApi({
    getInstructionsContent:'/instructionsConfig/getInstructionsContent', //根据机型和设备类型查询指令内容
    instructionRecord:'/proxy/module/instruction/record',//获取指令最新信息
    saveLocatorConfigData:'/locator/saveLocatorConfigData',//定位器配置内容保存
    getLocatorConfigData:'/locator/getLocatorConfigData',//定位器配置信息查询
    getWarning:'/sim/core/warning',//流量预警
});


//测试环境
const appKey = '22498ac391ab449f';
const appSecret = 'bb7ff8b26b8b0742db71f3a2512e6b0e';
const shareUrl = 'http://appsat.jimimax.com/static/locationShare/index.html#/';//测试环境分享地址
Api.setServer('http://test.api.jimimax.com');


//正式环境
// const appKey = '2c75fb38f46e2e99'; 
// const appSecret = '7524f685552ffaa9d6ba45189d2618de';
// const shareUrl = 'http://apps.jimimax.com/static/locationShare/index.html#/';//正式环境
// Api.setServer('http://apis.jimimax.com');


// //国际试运行环境
// const appKey = 'a18fd94b7d72b252'; 
// const appSecret = 'a91ef22f5d4ca04cdf581ed842e3f09f';
// const shareUrl = 'http://apps.jimimax.com/static/locationShare/index.html#/';//正式环境
// Api.setServer('http://pre.api-inti-center.jimimax.com');


//国际测试环境
// const appKey = 'c260eca4f6e79ca9'; 
// const appSecret = 'a50633fb3657cdca5117145009772df3';
// const shareUrl = 'http://apps.jimimax.com/static/locationShare/index.html#/';//正式环境
// Api.setServer('http://intitestcenter.jimimax.com');


//德国正式环境
// const appKey = '6d1fe91e2c033e1d'; 
// const appSecret = 'f7847b5f51041271bc173174bb5569b5';
// const shareUrl = 'http://apps.jimimax.com/static/locationShare/index.html#/';//正式环境
// Api.setServer('http://apis.eu-central-1.jimimax.com');


// const appKey = '2caa35f72b38783f'; 
// const appSecret = '61aed5fc317c5f2d8ca1bba0f7bfcc5d';
// const shareUrl = 'http://apps.jimimax.com/static/locationShare/index.html#/';//正式环境
// Api.setServer('http://apis.eu-central-1.jimimax.com');


//本地国际测试环境
// const appKey = 'c260eca4f6e79ca9'; 
// const appSecret = 'a50633fb3657cdca5117145009772df3';
// const shareUrl = 'http://apps.jimimax.com/static/locationShare/index.html#/';//正式环境
// Api.setServer('http://172.16.0.106:2888');


//504502509
// const appKey = '1cbfd66aed0a9013'; 
// const appSecret = 'd31d4311b968cc632330de375b39c73d';
// const shareUrl = 'http://apps.jimimax.com/static/locationShare/index.html#/';//正式环境
// Api.setServer('http://apis.eu-central-1.jimimax.com');

export {Api,shareUrl,appKey,appSecret}