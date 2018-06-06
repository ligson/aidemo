import React, {Component} from 'react';
import {ChatInput} from './ChatInput'
import {Button, DeviceEventEmitter, View} from "react-native";

export class ChatBottomView extends Component {
    constructor(props) {
        super(props);
        this.state = {height: 50, show: false};
    }

    componentDidMount() {
        let that = this;
        // 定义属性,但是对这个属性的修改不会触发render
        this.lister = DeviceEventEmitter.addListener('pressMore', (show) => {
            //alert(show);
            if (show) {
                that.setState({height: 100, show: true});
            } else {
                that.setState({height: 50, show: false});
            }

        })
    }

    componentWillUnmount() {
        this.lister.remove();
    }

    onPressMore = () => {
        DeviceEventEmitter.emit("pressMore", !this.state.show);
    };

    render() {
        return (
            <View style={{
                height: this.state.height,
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: 'skyblue',
                alignItems: "center"
            }}>
                <View style={{flex: 1, backgroundColor: "#FF1122", paddingLeft: 5, paddingRight: 5}}>
                    <ChatInput/>
                </View>
                <View style={{width: 50, backgroundColor: "#001122"}}>
                    <Button
                        onPress={this.onPressMore}
                        title="更多"
                        color="#841584"
                    />
                </View>
            </View>)
    }
}