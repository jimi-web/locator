/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-06-12 15:27:06
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-06-17 17:57:58
 */ 
import React,{Component} from 'react';
import {View,Platform} from 'react-native';
import { connect } from 'react-redux';
import {Jimi,Applet} from 'react-native-jimi';

class Track extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Jimi.Track
                    dimDd={this.props.trackQueryTime}
                    deviceMarkerOptions={{image:this.props.deviceIcon}}
                ></Jimi.Track>
            </View>
        );
    }

    componentWillMount() {
        if(Platform.OS != 'ios'){
            // 关闭安卓手势滑动退出
            this.slidingScreen(false);
        }
    }

    componentWillUnmount() {
        if(Platform.OS != 'ios'){
            // 关闭安卓手势滑动退出
            this.slidingScreen(true);
        }
    }

    slidingScreen = (isOpen) => {
        Applet.httpApp('jm_api.noSlidingScreen', {
            isOpenSlidingScreen: isOpen,
            onOpenSlidingScreen:isOpen,
            onSuccess: () => {
                //
            },
            // 请求失败
            onFail: () => {
                //
            },
            // 请求失败或成功
            onComplete: () => {
                //
            }
        });
    }

}


export default connect(
    (state) => ({
        deviceIcon: state.storageData.deviceIcon,
        trackQueryTime: state.storageData.trackQueryTime
    })
)(Track);