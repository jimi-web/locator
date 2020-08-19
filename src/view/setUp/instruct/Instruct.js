/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-06-05 10:43:06
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-07-11 16:37:18
 */ 

import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import { connect } from 'react-redux';
import {Applet,Jimi,Circle} from 'react-native-jimi';
import {Api} from '../../../api';
import instructData from '../instruct/data';

class Instruct extends Component { 

    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    render(){
        return <ScrollView style={[this.props.style,{flex:1,marginTop:15}]}>
             {
                 this.state.data.length>0?            
             <Jimi.Instruction 
                instructionArr={this.state.data} 
                onArrowButton={(data,index) => this.onArrowButton(data,index)}
             ></Jimi.Instruction>:<Jimi.Empty 
                imgStyle={{marginTop:163}}/>
                }
        </ScrollView> 
    }

    componentWillMount() {
        // this.init();
        this.getInstructionsContent();
    }

    /**
     * 本地数据初始化获取数据（测试本地数据使用）
     */
    init = () =>{
        instructData.forEach(item => {
            console.log(this.props.deviceInfo.typeNum,'typeNum');
            console.log(item.type);
            if(item.type == this.props.deviceInfo.typeNum){
                this.setState({
                    data:JSON.parse(JSON.stringify(item.data))
                },()=>{
                    console.log(JSON.stringify(item.data),'this.state.data');  
                });
            }
        });
    }

    onArrowButton = (data,index) => {
        data.index = index;
        const params = JSON.parse(JSON.stringify(data));
        this.props.onArrowButton(params);
    }



    /**
     * 获取指令内容
     */
    getInstructionsContent = () =>{
        let loading = Circle.Toast.loading(I18n.t('加载中'));
        Applet.jmAjax({
            url:Api.getInstructionsContent,
            method:'GET',
            encoding:true,
            encodingType:true,
            data:{
                deviceType:'LOC',
                typeNum:this.props.deviceInfo.typeNum
            },
            header:0
        }).then((res)=>{
            Circle.Toast.remove(loading);
            if(res.data){
                this.setState({
                    data:[...JSON.parse(res.data.content)]
                },()=>{
                    console.log(this.state.data,'asdasdasd');
                });
            }  
        }).catch(()=>{
            Circle.Toast.remove(loading);
        });
    }
}

export default connect(
    (state) => ({
        deviceInfo: state.storageData.deviceInfo,
    })
)(Instruct);




