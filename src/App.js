/*
 * @Author: liujinyuan
 * @Date: 2020-04-24 12:44:06
 * @LastEditTime: 2020-07-01 18:06:38
 * @LastEditors: xieruizhi
 * @Description: 
 * @FilePath: \jmax_rn_r3\src\App.js
 */

import React, {Component} from 'react';
import {Root} from './router/index';
import store from './store/index';
import { Provider } from 'react-redux';
import {I18n}  from 'react-native-jimi';
import {Chinese,English} from './language/index';

export default class App extends Component{
    componentWillMount() {
        global.I18n = I18n;
        I18n.isForeign = this.props.isForeign;
        I18n.setLanguage(I18n.isForeign?this.props.language:'',{
            cn:Chinese,
            en:English
        });
    }

    render() {
        return <Provider store={store}>
            <Root/>
        </Provider>;
    }

    
    
}

