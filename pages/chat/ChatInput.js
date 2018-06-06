import React, {Component} from 'react';
import {DeviceEventEmitter, TextInput} from "react-native";

export class ChatInput extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '输入消息'};
    }

    onSubmit = () => {
        //alert(this.state.text);
        DeviceEventEmitter.emit('receiveMsg', this.state.text)
    };

    render() {
        return (
            <TextInput
                style={{backgroundColor: "#FFF", height: 40}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
                onSubmitEditing={this.onSubmit}
                returnKeyType={"send"}
            />
        );
    }
}