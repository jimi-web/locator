/*
 * @Author: liujinyuan
 * @Date: 2020-07-16 10:03:24
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-08-18 15:05:13
 * @FilePath: \jmax_rn_standard\src\components\panel\RollPanel.js
 */ 
import React,{Component}from 'react';
import {Text,Animated,TouchableOpacity,Easing,Dimensions} from 'react-native';
import PropTypes from 'prop-types';
const { width } = Dimensions.get('window');

export default class RollPanel extends Component {
    static propTypes = {
        text:PropTypes.string,//拖动开始位置
        isAnimated:PropTypes.bool,//是否滚动
        duration:PropTypes.number,//滚动速度
        activeOpacity:PropTypes.number,
        style:Text.propTypes.style,//面板样式
        titleStyle:Text.propTypes.style,//文字样式
    };

    static defaultProps = {
        text:'',
        isAnimated:false,
        activeOpacity:0.6
    };
    constructor(props){
        super(props);
        this.width = width;
        this.state = {
            moveX:new Animated.Value(8)
        }
    }
    render(){
        const { activeOpacity } = this.props;
        return  <TouchableOpacity onLayout={(e) => this.onLayout(e)}  onPress={this.onPress} activeOpacity={activeOpacity} style={this.renderStyle()}>
                    <Animated.View ref={'rollText'} style={{position:'absolute',left:this.state.moveX,paddingLeft:8,paddingRight:8,width:'100%'}}>
                        <Text style={this.renderTitleStyle()}>{this.props.text}</Text>
                    </Animated.View>
                </TouchableOpacity>
               
    }
    // 获取盒子样式
    onLayout = (e) => {
        const {width} = e.nativeEvent.layout;
        this.width = width || this.width
        if(this.props.isAnimated){
            this.rollFn();
        }

    }
    // 渲染面板样式
    renderStyle  = () => {
        const { style } = this.props;
        const styles = [{
            backgroundColor:'#FF6363',
            borderRadius:4,
            position:'relative',
            height:'100%',
            width:'100%',
            zIndex:1001,
            overflow:'hidden'
        }].concat(style);
        return styles;
    }
    // 渲染文字样式
    renderTitleStyle(){
        const { titleStyle } = this.props;
        const styles = [{
            width:'1000%',
            height:'100%',
            color:'#fff',
            fontSize:14,
            lineHeight:32,
        }].concat(titleStyle);
        return styles;
    }
    // 面板事件触发
    onPress = ()=>{
        this.props.onPress && this.props.onPress();
    }
    // 面板滚动函数
    rollFn = () => {
        let textLength = - 8 + -(this.props.text.length) * 14;//计算文字长度
        let duration = this.props.duration || Math.abs(textLength) * 30;//计算滚动速度，或使用传输过来的速度
        Animated.sequence([
            Animated.timing(
                this.state.moveX,
                {
                    toValue: textLength,
                    easing: Easing.linear,
                    duration: duration
                }),
            Animated.timing(
                this.state.moveX,
                {
                    toValue: this.width,
                    easing: Easing.linear,
                    duration:0
                })
        ]).start(() => this.rollFn())
    }
}