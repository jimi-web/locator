import React from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import index from '../view/index';
import Trace from '../view/trace';
import Track from '../view/track';
import Fence from '../view/fence';
import Record from '../view/record';
import AddFence from '../view/fence/addFence';
import PrivacyAgreement from '../view/privacyAgreement';
import SetUp from '../view/setUp';
import Instructions from '../view/setUp/instruct/Instructions';
import Details from '../view/details';
import IconLibrary from '../view/details/IconLibrary';

const getOptions = (title,navigation) => {
    let headerTitle = {};
    if(title){
        headerTitle = {
            title:navigation?navigation.state.params.I18n?navigation.state.params.I18n.t(title):title:title
        };
    }
    return {
        ...headerTitle,
        headerBackTitle:null,
        headerStyle:{
            backgroundColor:'#fff',
            // height:44
        },
        headerTintColor:'#232323',
        headerTitleStyle:{
            fontSize:16,
            fontWeight: 'bold',
        },
        gesturesEnabled:false
    };
};

const AppNavigator = createStackNavigator({
    index:{
        screen:index,
        params: {
            title: ''
        },
        navigationOptions:getOptions()
    },
    Trace:{
        screen:Trace,
        navigationOptions:({navigation})=>getOptions('追踪',navigation)
    },
    Track:{
        screen:Track,
        navigationOptions:({navigation})=>getOptions('轨迹',navigation)
    },   
    Fence:{
        screen:Fence,
        navigationOptions:({navigation})=>getOptions('围栏',navigation)
    },
    Record:{
        screen:Record,
        navigationOptions:({navigation})=>getOptions('录音',navigation)
    },
    Instructions:{
        screen:Instructions,
        navigationOptions:getOptions()
    },   
    PrivacyAgreement:{
        screen:PrivacyAgreement,
        navigationOptions:({navigation})=>getOptions('隐私协议',navigation)
    },
    Details:{
        screen:Details,
        navigationOptions:({navigation})=>getOptions('详情',navigation)
    }, 
    IconLibrary:{
        screen:IconLibrary,
        navigationOptions:({navigation})=>getOptions('图标库',navigation)
    }, 
    SetUp:{
        screen:SetUp,
        navigationOptions: ({ navigation }) => (
            {
                ...getOptions('设置',navigation),
                headerStyle:{
                    backgroundColor:'#fff',
                    borderBottomColor:'#fff',
                    elevation:0
                },
            }),
    },  
    AddFence:{
        screen:AddFence,
        navigationOptions: ({ navigation }) => (
            {
                ...getOptions('添加围栏',navigation),
                headerStyle:{
                    backgroundColor:'#fff',
                    borderBottomColor:'#fff',
                    elevation:0
                },
            }),
    }
});

export const Root = createAppContainer(AppNavigator);