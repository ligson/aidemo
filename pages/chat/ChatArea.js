import React, {Component} from 'react';
import moment from 'moment';
import {DeviceEventEmitter, Text} from "react-native";


export class ChatArea extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    append = (txt) => {
        let date = moment().format('YYYY-MM-DD HH:mm:ss');
        let r = (this.state.text !== "") ? (this.state.text + "\n" + date + "\n" + txt) : date + "\n" + txt;
        this.setState({text: r})
    };

    componentDidMount() {
        // 定义属性,但是对这个属性的修改不会触发render
        this.lister = DeviceEventEmitter.addListener('receiveMsg', (txt) => {
            this.append(txt);
        })
    }

    componentWillUnmount() {
        this.lister.remove();
    }


    render() {
        return (
            <Text>{this.state.text}</Text>
        );
    }
}