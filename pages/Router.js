import {StackNavigator,} from 'react-navigation';
import Main from "./Main"
import Chat from "./Chat"
import GdMap from "./GdMap"

export const Router = StackNavigator({
    Main: {screen: Main},
    Chat: {screen: Chat},
    GdMap: {screen: GdMap},
}, {
    initialRouteName: "Main"
});