/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-06-12 15:27:06
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-07-11 20:25:02
 */ 

import React, { Component } from 'react';
import { View,StyleSheet} from 'react-native';
import { SegmentedBar } from 'teaset';
import Alarm from './alarm/Alarm';
import Instruct from './instruct/Instruct';

export default class SetUp extends Component { 

    constructor(props){
        super(props);
        this.state = {
            activeIndex:0,
        }
    }

    render(){
        return <View style={Styles.container}>
            <View style={Styles.tab}>
                <View style={Styles.tabList}>
                    <SegmentedBar indicatorType={'customWidth'} indicatorWidth={26} indicatorLineColor={'#3479F6'} onChange={this._onChange} >
                        <SegmentedBar.Item title={I18n.t('指令设置')} titleStyle={Styles.titleStyle} activeTitleStyle={Styles.activeTitleStyle} />
                        <SegmentedBar.Item style={{width:120}} title={I18n.t('报警通知')} titleStyle={Styles.titleStyle} activeTitleStyle={Styles.activeTitleStyle}/>
                    </SegmentedBar>
                </View>
            </View>
            <View style={Styles.main}>
                   <Alarm  style={{display:this.state.activeIndex?'flex':'none'}} />
                   <Instruct style={{display:this.state.activeIndex?'none':'flex'}}
                    onArrowButton={(params)=>{
                            this.props.navigation.navigate('Instructions',params);
                    }}
                   />
            </View>
        </View> 
    }

    _onChange = (index)=>{
        this.setState({
            activeIndex:index
        })
    }
}




const Styles = StyleSheet.create({
    container:{
        flex:1,   
        backgroundColor:'#F7F7F7'
    },
    main:{
        flex:1,
    },
    tab:{
        backgroundColor:'#fff', 
        alignItems:'center'
    },
    tabList:{
        width:180,
    },
    titleStyle:{
        fontSize:14,
        color:'#4D4D4D',
    },
    activeTitleStyle:{
        color:'#3479F6',
        fontSize:14,
    },
});


