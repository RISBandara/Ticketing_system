import React ,{Component} from 'react'

export default class UpperImage extends Component{
    render(){
        return(
            <div>
                <img src={require('../images/bus1.jpg')} alt="" width="100%"/>
            </div>
        );
    }
}