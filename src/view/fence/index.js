/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-06-12 15:27:06
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-06-28 16:54:21
 */ 
import React,{Component} from 'react';
import {View} from 'react-native';
import {Jimi} from 'react-native-jimi';

export default  class FenceList extends Component {
    render() {
        return (
            <View style={{ flex: 1}}>
                <Jimi.FenceList  onAddEditFence={(data)=>{
                    let obj = data ? {fenceId:data.fenceId,I18n:I18n} : {I18n:I18n};
                    this.props.navigation.push('AddFence',obj);
                }}/>
            </View>
        );
    }
}