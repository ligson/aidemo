import React, {Component} from 'react';
import {MapView} from 'react-native-amap3d'

export default class GdMap extends Component {
    render() {
        return (
            <MapView
                coordinate={{
                    latitude: 39.91095,
                    longitude: 116.37296,
                }}
            />
        );
    }
}