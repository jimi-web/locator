/*
 * @Descripttion: 
 * @version: 
 * @Author: liujinyuan
 * @Date: 2020-03-17 16:22:00
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-07-11 20:37:28
 */
import React, { Component } from 'react';
import {Jimi,Applet,Circle} from 'react-native-jimi';
import {Api} from '../../../api/index';

export default class Instruction extends Component {

    static navigationOptions = ({navigation}) => ({
        title: I18n.t(navigation.getParam('content').text),
    });

    constructor(props){
        super(props);
        this.state = {
            instructionId:this.props.navigation.state.params.index,
            instructionData:this.props.navigation.state.params.data
        }
    }

    render(){
        const data = this.state.instructionData;
        return (
            <Jimi.Instruction 
                id={this.state.instructionId}   
                hint={data.hint} 
                instructionArr={data.instructionArr} 
                isButton={data.isButton} 
                instruction={data.instruction}
                setInstruction={()=>{
                    Circle.Toast.message(I18n.t('发送成功'))
                }}
            ></Jimi.Instruction>
        );
    }

    componentWillMount() {
        this.getInstructionRecord();
    }

    /**
     * 获取指令信息
     */
    getInstructionRecord = ()=>{
        Applet.jmAjax({
            url:Api.instructionRecord,
            method:'GET',
            encoding:true,
            encodingType:true,
            data:{
                instructionId:this.state.instructionId
            },
            header:0
        }).then((res)=>{
            let data = this.state.instructionData;
            if(res.data){
                data.instructionArr =JSON.parse(res.data).data;
                this.setState({
                    instructionData:data
                },()=>{
                });
            }
        });
    }
}