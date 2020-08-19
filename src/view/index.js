import React,{Component} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import {Jimi,Applet,Api,Circle} from 'react-native-jimi';
import TabNav from '../components/tabNav';
import dynamicMenu from '../components/dynamicMenu';
import { shareUrl } from '../api/index';
import RollPanel from '../components/RollPanel';


class Position extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.state.params.title,
        }
    };


    constructor(props){
        super(props);
        this.state ={
            latitude:null,
            longitude:null,
            isPopoverPickerShow:false,//更多的弹出框是否显示
            menuArray:[],//菜单
            moreArray:[],//更多菜单
            error:false,
            isReady:false,//判断是否已经加载过的
            powerShow:false,
            isVoltage:false,
            message:'11111'
        };
    }

    render() {
        return (
            <View style={{flex:1,position:'relative'}}>
                {
                    this.state.message ?
                    <View style={{position:'absolute',width:'90%',top:8,height:37,zIndex:999,left:'5%',flexDirection:'row',backgroundColor:'#FFCD8D',borderWidth:1,borderRadius:21,borderColor:'#FE742D'}}>
                        <View style={{width:40,height:'100%',justifyContent:'center'}}>
                            <Circle.Icon name={'video_mute_on'} size={37} ></Circle.Icon>
                        </View>
                        <RollPanel isAnimated={true} onPress={() => this.onPress()} text={this.state.message}
                        style={{flex:1,borderRadius:0,backgroundColor:'#FFCD8D'}}
                        titleStyle={{color:'#333',lineHeight:37}}
                        />
                        <TouchableOpacity  activeOpacity={1}   style={{width:80,height:37,flexDirection:'row',alignItems:'center'}} onPress={()=>{
                             this.goFlowCard();
                        }}>
                            <Text>{I18n.t('点击续费')}</Text>
                            <Circle.Icon name={'trajectory_play_arrow1'} size={10}></Circle.Icon>
                        </TouchableOpacity>
                    </View> :null
                }                      
                <Jimi.Position onDeviceChange={this._onDeviceChange} 
                    ref={(ref)=>this.map=ref}
                    onMapClick={()=>{
                        this.setState({
                            isPopoverPickerShow:false
                        });
                    
                    }}
                    deviceMarkerOptions={{image:this.props.deviceIcon}}
                    error={this.state.error}
                    onUserMapType={this.onUserMapType}
                    powerShow={this.state.powerShow}
                    isVoltage={this.state.isVoltage}
                    roadBtnStyle={{
                        top:this.state.message?55:20
                    }}
                    mapTypeBtnStyle={{
                        top:this.state.message?98:63
                    }}
                 >    
                </Jimi.Position>
                {
                    this.state.menuArray.length>0?
                    <TabNav onPress={this._onPress} 
                    menuArray={this.state.menuArray}
                    moreArray={this.state.moreArray}
                    isPopoverPickerShow={this.state.isPopoverPickerShow}
                />:null
                }
                <Jimi.Share 
                    checkedTitle={I18n.t('《使用协议和隐私政策》')}
                    ref={ref=>this.share=ref}
                    shareUrl={shareUrl}
                    onFile={()=>{
                        this.props.navigation.push('PrivacyAgreement');
                    }}
                />
            </View> 
        );
    }

    componentWillMount(){
        this.getInitLocatorInfo();
    }


    onUserMapType=(status)=> {
        //更新地图
        this.viewDidAppear = this.props.navigation.addListener(
            'willFocus',
            (obj)=>{
                if(!status){
                    this.map.Position.mapViewFunc.reloadView();
                }
                if(this.state.isReady){
                    this.map.Position.startRefresh();
                }
                this.setState({
                    error:false,
                });
            }
        );
        
        //离开当前界面
        this.viewWillBlur = this.props.navigation.addListener(
            'willBlur',
            (obj)=>{
                this.map.Position.stopRefresh();
                this.setState({
                    isReady:true
                });
            }
        );
    }

    componentWillUnmount(){
        this.viewDidAppear.remove();
        this.viewWillBlur.remove();
    }

    /**
     * 获取菜单
     */
    getMenu = (deviceType)=>{
        if(!dynamicMenu.allType.includes(deviceType)){
            Circle.Toast.message(I18n.t('小程序不支持该设备型号，当前功能无法正常使用!'));
            return;
        }

        //获取菜单列表
        dynamicMenu.menu.forEach((item)=>{
            if(item.type.includes(deviceType)){
                //设置录音时间
                if(item.hasOwnProperty('insTimeArr')){
                    this.props.setInsTimeArr(item.insTimeArr);
                }
                //设置轨迹查询区间
                if(item.hasOwnProperty('trackQueryTime')){
                    this.props.setTrackQueryTime(item.trackQueryTime);
                }

                if(item.hasOwnProperty('recordConfig')){
                    console.log(item.recordConfig,'录音指令');
                    this.props.setRecordConfig(item.recordConfig);
                }                
               
                this.setState({
                    menuArray:[...item.menu],
                    powerShow:item.powerShow,
                    isVoltage:item.isVoltage
                },()=>{
                    let menuArray = this.state.menuArray;
                    let children = menuArray.filter(elem=>elem.action==='more')[0].children
                    this.setState({
                        moreArray:[...children]
                    });
                });
            }
        });
    }

    
    _onPress =(item)=>{
        //路由跳转包括更多里的子菜单
        if(item.routeName){
            this.closePopoverPicker();
            this.props.navigation.push(item.routeName,{I18n:I18n});
        }else {
            //导航
            if(item.action === 'navigation'){
                this.navigation();
                this.closePopoverPicker();
            }else if(item.action === 'share'){
                //分享
                this.share.show();
                this.closePopoverPicker();
            }else if(item.action === 'flowCard'){
                this.goFlowCard();
                this.closePopoverPicker();
            } else{
                //更多
                this.setState({
                    isPopoverPickerShow:!this.state.isPopoverPickerShow
                });
            }
        }
    }

    /**
     * 关闭更多弹框
     */
    closePopoverPicker = ()=>{
        this.setState({
            isPopoverPickerShow:false,
            error:true,
        });
    }

    /**
     *导航
     */
    navigation = ()=>{
        //导航
        Applet.httpApp('jm_location.navigation', {
            latitude:this.state.latitude,
            longitude:this.state.longitude,
            onFail:()=>{
                 
            }
        });
    }

    goFlowCard = ()=>{
        //流量卡
        Applet.goFlowCard({
            onSuccess:()=>{
                
            },
            onFail:(err)=>{
                if (err && err.code == 1) {
                    Circle.Toast.message(I18n.t('支付失败!'));
                }
            }
        });
    }


    /**
     * 监听定位信息变化
     */
    _onDeviceChange = (info)=>{
        console.log(info,'info');
        this.setState({
            latitude:info.gpsLatitude,
            longitude:info.gpsLongitude,
        });
        this.props.navigation.setParams({
            title:info.deviceName
        });
    }

    /**
     * 获取初始化信息
     */
    getInitLocatorInfo = ()=>{
        Applet.jmAjax({
            url:Api.initLocatorInfo,
            method:'POST',
            encoding:true,
            encodingType:true
        }).then((res)=>{
            let data = res.data;
            console.log(data,'获取初始化信息');
            
            if(data.typeNum){
                this.getMenu(data.typeNum);
            }else{
                Circle.Toast.message(I18n.t('未检测到设备型号！'));
            }
            //设置设备信息
            this.props.setDeviceInfo(res.data);
            if(data.deviceIcon){
                //设置图标
                this.props.setDeviceIcon({deviceIcon:data.deviceIcon,deviceStatus:data.deviceStatus});
            }
        });
    }

    getWarning =()=> {
        // Applet.jmAjax({
        //     url:Api.getWarning,
        //     method:'GET',
        //     encoding:true,
        //     encodingType:true
        // }).then((res)=>{

        // });   
        let msg = this.getWarningTip(res.data.warningCode);     
        this.setState({
            message:I18n.t(msg)
        });
    }

    getWarningTip = (code)=> {
        let msg = null;
        switch (code) {
            case 1:
                msg = '为了不影响您的正常使用，请及时进行流量充值';
                break;
            case 2:
                msg  = '您的流量卡套餐即将到期，点击前往续费'
                break; 
            case 3:
                msg  = '您的流量卡套餐已到期，点击前往续费'
                break;                        
            default:
                break;
        }
        return msg;
    }
}

export default connect(
    (state) => ({
        deviceIcon: state.storageData.deviceIcon,
        deviceInfo:state.storageData.deviceInfo,
    }),
    (dispatch) => ({
        setDeviceInfo:(params) => {
            dispatch({
                type:'DEVICE_INFO',
                value:params
            });
        },
        setDeviceIcon:(params) => {
            dispatch({
                type:'DEVICE_ICON',
                value:params
            });   
        },
        setTrackQueryTime:(value) => {
            dispatch({
                type:'TRACK_QUERY_TIME',
                value:value
            });   
        },
        setInsTimeArr:(value) => {
            dispatch({
                type:'INS_TIME_ARR',
                value:value
            });   
        },  
        setRecordConfig:(value) => {
            dispatch({
                type:'RECORD_CONFIG',
                value:value
            });   
        },          
    })
)(Position);

const Styles = StyleSheet.create({
    takePhoto:{
        position:'absolute',
        top:107,
        right:20,
        width:37,
        height:37,
        backgroundColor:'#fff',
        borderRadius:37
    }
});