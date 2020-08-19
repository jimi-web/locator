/*
 * @Description: 
 * @Version: 
 * @Autor: xieruizhi
 * @Date: 2020-07-06 11:29:16
 * @LastEditors: xieruizhi
 * @LastEditTime: 2020-07-09 16:52:55
 */ 
export default[
    {
        type:'arrowButton',
        content:{
            text:'SOS设置',
            viceText:'',
            value:'',
            img:'http://apps.jimimax.com/setting/instuct/SOS_number@3x.png'
        },
        border:true,
        data:{
            isButton:true,
            instruction:'SOS,ins1,ins2ins3ins4ins5#',
            hint:'SOS号码用于接收报警短信以及SOS报警，支持3-20位数字SOS号码设置',
            instructionArr:[
                {
                    type:'tab',
                    content:[
                        {
                            text:'SOS设置',
                            value:'A',
                            
                        },
                        {
                            text:'删除SOS号码',
                            value:'D',
                        },
                    ],
                    value:'A',
                    insID:'ins1',
                    insValue:'A',
                    border:'true'
                },
                {
                    type:'title',
                    content:'',
                    style:{
                        paddingTop:0,
                        paddingBottom:0
                    }
                },
                {
                    contral:0,
                    contralValue:'A',
                    type:'input',
                    content:{
                        placeholder:'请输入SOS号码',
                        type:'',
                        text:'号码1',
                        rule:'^([0-9]{3,20}|\\s)$',
                        keyboardType:'number-pad',
                        symbol:','
                    },
                    hint:'仅支持3-20位数字SOS号码设置',
                    value:'',
                    border:true,
                    insID:'ins2',
                    insValue:'',
                    stop:true,
                },
                {
                    contral:0,
                    contralValue:'A',
                    type:'input',
                    content:{
                        placeholder:'请输入SOS号码',
                        type:'',
                        text:'号码2',
                        rule:'^([0-9]{3,20}|\\s)$',
                        keyboardType:'number-pad',
                        symbol:','
                    },
                    hint:'仅支持3-20位数字SOS号码设置',
                    value:'',
                    border:true,
                    insID:'ins3',
                    insValue:'',
                    stop:true,
                },
                {
                    contral:0,
                    contralValue:'A',
                    type:'input',
                    content:{
                        placeholder:'请输入SOS号码',
                        type:'',
                        text:'号码3',
                        rule:'^([0-9]{3,20}|\\s)$',
                        keyboardType:'number-pad',
                       
                    },
                    hint:'仅支持3-20位数字SOS号码设置',
                    value:'',
                    border:true,
                    insID:'ins4',
                    insValue:'',
                    stop:true,
                },
                {
                    contral:0,
                    contralValue:'D',
                    type:'multiSelect',
                    content:{
                        isMust:true,
                        multiArr:[
                            {
                                text:'号码1',
                                value:'1,',
                                
                            },
                            {
                                text:'号码2',
                                value:'2,',
                            },
                            {
                                text:'号码3',
                                value:'3',
                            },
                        ],
                    },
                    value:['1,'],
                    border:true,
                    insID:'ins5',
                    insValue:'1',
                },               
            ]
        }
    },
    {
        type:'arrowButton',
        content:{
            text:'拔出报警',
            value:'',
            img:'http://apps.jimimax.com/setting/instuct/Unplug@3x.png'
        },
        border:true,
        data:{
            isButton:true,
            instruction:'PULLALM,ins1ins2#',
            instructionArr:[
                {
                    type:'switch',
                    content:{
                        text:'允许报警'
                    },
                    value:true,
                    insID:'ins1',
                    insSymmetry:{true:'ON,',false:'OFF'},
                    insValue:'ON,',
                },
                { 
                    type:'title',
                    content:'上报方式',
                    contral:0,
                },
                {
                    contral:0,
                    type:'select',
                    value:'1,20,30',
                    border:true,
                    insID:'ins2',
                    insValue:'1,20,30',
                    content:[
                        {
                            text:'平台',
                            value:'0,20,30',
                            
                        },
                        {
                            text:'平台+短信',
                            value:'1,20,30',
                        },
                        {
                            text:'平台+电话',
                            value:'3,20,30',
                        },
                        {
                            text:'平台+短信+电话',
                            value:'2,20,30',
                        },
                    ],  
                },
            ]
        }
    },
    {
        type:'arrowButton',
        content:{
            text:'指示灯开关',
            viceText:'',
            value:'',
            img:'http://apps.jimimax.com/setting/instuct/Indicator_light@3x.png'
        },
        border:true,
        data:{
            isButton:true,
            instruction:'LEDSW,ins1#',
            instructionArr:[
                {
                    type:'switch',
                    content:{
                        text:'开关'
                    },
                    value:true,
                    insID:'ins1',
                    insSymmetry:{true:'ON',false:'OFF'},
                    insValue:'ON',
                },
            ]
        }
    },
    {
        type:'arrowButton',
        content:{
            text:'断电报警',
            value:'',
            img:'http://apps.jimimax.com/blackout@3x.png'
        },
        border:true,
        data:{
            isButton:true,
            instruction:'POWERALM,ins1ins2#',
            instructionArr:[
                {
                    type:'switch',
                    content:{
                        text:'允许报警'
                    },
                    value:true,
                    insID:'ins1',
                    insSymmetry:{true:'ON,',false:'OFF'},
                    insValue:'ON,',
                },
                { 
                    type:'title',
                    content:'上报方式',
                    contral:0,
                },
                {
                    contral:0,
                    type:'select',
                    value:'1',
                    border:true,
                    insID:'ins2',
                    insValue:'1',
                    content:[
                        {
                            text:'平台',
                            value:'0',
                            
                        },
                        {
                            text:'平台+短信',
                            value:'1',
                        },
                        {
                            text:'平台+电话',
                            value:'3',
                        },
                        {
                            text:'平台+短信+电话',
                            value:'2',
                        },
                    ],  
                },
            ]
        }
    },
    // {
    //     type:'arrowButton',
    //     content:{
    //         text:'获取号码',
    //         viceText:'',
    //         value:'',
    //         img:'http://apps.jimimax.com/setting/instuct/Number_acquisition@3x.png'
    //     },
    //     border:true,
    //     data:{
    //         isButton:true,
    //         instruction:'FW,ins1,SIM#',
    //         hint:'填入接收短信的手机号码，并确定设备内的电话卡支持短信功能，运营商将扣取设备里电话卡短信费用',
    //         instructionArr:[
    //             {
    //                 type:'input',
    //                 content:{
    //                     placeholder:'请输入电话号码',
    //                     type:'',
    //                     text:'接收短信号码',
    //                 },
    //                 value:'',
    //                 insID:'ins1',
    //                 insValue:'',
    //             },
    //         ]
    //     }
    // },
    {
        type:'arrowButton',
        content:{
            text:'超速报警',
            viceText:'',
            value:'',
            img:'http://apps.jimimax.com/setting/instuct/Speeding@3x.png'
        },
        border:true,
        data:{
            isButton:true,
            instruction:'SPEED,ins1ins2ins3ins4#',
            hint:'当车辆在【持续时间】内的行驶速度大于【超速速度】时，设备发出超速报警',
            instructionArr:[
                {
                    type:'switch',
                    content:{
                        text:'允许报警'
                    },
                    value:true,
                    insID:'ins1',
                    insSymmetry:{true:'ON,',false:'OFF'},
                    insValue:'ON,',
                },
                {
                    type:'title',
                    content:'',
                    style:{
                        paddingTop:0,
                        paddingBottom:0
                    }
                },
                {
                    contral:0,
                    type:'input',
                    content:{
                        placeholder:'5-600秒',
                        type:'',
                        text:'持续时间',
                        rule:'^([5-9]|[1-9][0-9]|[1-5][0-9][0-9]|600)$',
                        keyboardType:'number-pad',
                        symbol:',',
                        unit:'秒',
                    },
                    value:'20',
                    border:true,
                    insID:'ins2',
                    insValue:'20',
                    stop:true,
                    hint:'时间范围在5~600秒',
                },
                {
                    contral:0,
                    type:'input',
                    content:{
                        placeholder:'1-255km/h',
                        type:'',
                        text:'超速范围',
                        keyboardType:'number-pad',
                        rule:'^([1-9]|[0-9][0-9]|[1-2][0-5][0-5]|255)$',
                        unit:'km/h',
                        symbol:',',
                    },
                    value:'100',
                    border:true,
                    insID:'ins3',
                    insValue:'100',
                    stop:true,
                    hint:'超速范围在1~255km/h',
                },
                {
                    contral:0,
                    type:'title',
                    content:"上报方式"
                },                
                {
                    contral:0,
                    type:"select",
                    content:[
                        {
                            text:"平台",
                            value:'0'
                        },
                        {
                            text:"平台+短信",
                            value:'1'
                        }                 
                    ],
                    value:'0',
                    insID:"ins4",
                    insValue:'0',
                    border:true,
                }
            ]
        }
    }
    
]