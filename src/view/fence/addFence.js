/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-06-12 15:27:06
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-06-17 17:59:14
 */ 
import React, {Component} from 'react';
import {Jimi} from 'react-native-jimi';
import { connect } from 'react-redux';

class AddFence extends Component { 
    constructor(props) {
        super(props);
    }
    

    render() {
        let {params} = this.props.navigation.state;
        return <Jimi.AddFence
            fenceId={params?params.fenceId:''}
            onSave={()=>{
                this.props.navigation.goBack();
            }}
            deviceMarkerOptions={{image:this.props.deviceIcon}}
        ></Jimi.AddFence>;
    }
}

export default connect(
    (state) => ({
        deviceIcon: state.storageData.deviceIcon
    })
)(AddFence);