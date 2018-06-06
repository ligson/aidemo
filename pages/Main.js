import React, {Component} from 'react';
import {Button, View} from 'react-native';


export default class Main extends Component {
    // 配置页面导航选项
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            // 尝试把`alignItems`改为`flex-start`看看
            // 尝试把`justifyContent`改为`flex-end`看看
            // 尝试把`flexDirection`改为`row`看看
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{width: 300, height: 50, backgroundColor: 'powderblue'}}>
                    <Button
                        onPress={() => navigate("Chat")}
                        title="智能聊天"
                        color="#841584"
                    />
                </View>
                <View style={{width: 300, height: 50, backgroundColor: 'skyblue'}}>
                    <Button
                        onPress={() => navigate("GdMap")}
                        title="高德地图"
                        color="#841584"
                    />
                </View>
                <View style={{width: 300, height: 50, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
};