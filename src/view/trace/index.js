/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-06-12 15:27:06
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-06-28 10:26:21
 */ 
import React,{Component} from 'react';
import {View} from 'react-native';
import {Jimi} from 'react-native-jimi';
import { connect } from 'react-redux';
import { shareUrl } from '../../api/index';

class Trace extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Jimi.Trace
                    checkedTitle={I18n.t('《使用协议和隐私政策》')}
                    shareUrl={shareUrl}
                    onFile={()=>{
                        this.props.navigation.push('PrivacyAgreement');
                    }}
                    deviceMarkerOptions={{image:this.props.deviceIcon}}
                    isShareBtn={ I18n.isForeign?false:true}
                ></Jimi.Trace>
            </View>
        );
    }
}

export default connect(
    (state) => ({
        deviceIcon: state.storageData.deviceIcon
    })
)(Trace);