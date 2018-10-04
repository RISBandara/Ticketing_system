import React ,{Component} from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '100%',
    height: '100%'
}
export class MapContainer extends Component {
    render() {
        return (
            <Map style={style} google={this.props.google} zoom={14}>

                <Marker onClick={this.onMarkerClick}
                        name={'Pannipitiya'} />

                <InfoWindow onClose={this.onInfoWindowClose}>
                    {/*<div>*/}
                        {/*<h1>{this.state.selectedPlace.name}</h1>*/}
                    {/*</div>*/}
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBwYpmkJXqjGo5kTwjmpAgBhea--ZxPGMM")
})(MapContainer)