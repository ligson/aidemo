import React, {Component} from 'react';
import {ChatArea} from './chat/ChatArea'
import {ChatBottomView} from './chat/ChatBottomView'
import {View} from "react-native";


export default class Chat extends Component {
    // 配置页面导航选项
    static navigationOptions = ({navigation}) => ({
        title: '智能聊天'
    });

    render() {
        return (
            // 尝试把`justifyContent`改为`center`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                    <ChatArea/>
                </View>
                <ChatBottomView/>
            </View>
        );
    }
};