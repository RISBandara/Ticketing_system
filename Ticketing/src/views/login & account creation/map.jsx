import React ,{Component} from 'react'
import GoogleMapReact from 'google-map-react';

export default class MapContainer extends Component {

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div style={{ height: '40vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyBwYpmkJXqjGo5kTwjmpAgBhea--ZxPGMM" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
}

