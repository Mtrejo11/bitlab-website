import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



export default class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 13.708556,
            lng: -89.247083
        },
        zoom: 18,
        

    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '500px', width: '700px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBNBO9HlW4tl256zkl5jR2jyfwj24Lg2IA' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
            
                </GoogleMapReact>
            </div>
        );
    }
}