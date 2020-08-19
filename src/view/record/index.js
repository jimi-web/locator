/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-06-12 15:27:06
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-07-11 21:26:09
 */ 

import React,{Component} from 'react';
import {View} from 'react-native';
import { connect } from 'react-redux';
import {Jimi} from 'react-native-jimi';

class Record extends Component {

    constructor(props){
        super(props);
        this.state = {
            insTimeArr:null
        }
    }


    render() {
        return (
            <View style={{ flex: 1}}>
                <Jimi.Record
                    insTimeArr={this.state.insTimeArr}
                    recordIns={this.props.recordConfig.recordIns}
                    unit={'s'}
                ></Jimi.Record>
            </View>
        );
    }

    componentWillMount() {
        // console.log(this.props.recordConfig,'进入录音指令');
        let insTimeArr = JSON.parse(JSON.stringify(this.props.recordConfig.insTimeArr));
        insTimeArr.forEach(element => {
            element.title = I18n.t(element.title);
        });

        this.setState({
            insTimeArr
        });

        
    }
}



export default connect(
    (state) => ({
        recordConfig: state.storageData.recordConfig,
    })
)(Record);

