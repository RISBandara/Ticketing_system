import React ,{Component} from 'react'

export default class UpperImage extends Component{
    render(){
        return(
            <div>
                <img src={require('../images/upper.png')} alt="" width="100%"/>
            </div>
        );
    }
}