import * as React from 'react';
import { any } from 'prop-types';


export default class CallingServer extends React.Component {
    state= {
        externalData : any
    }
    _asyncRequest =null;
    componentDidMount(){
        // this._asyncRequest = _loadMyAsyncDate().then((externalData: any) =>{
        //     this._asyncRequest = null;
        //     this.setState({externalData});
        // });
    }
    componentWillUnmount(){
        if(this._asyncRequest){
            //this._asyncRequest.cancel();
        }
    }
    render(){
        return(<div></div>)
    }
    _loadMyAsyncDate(){

    }
}

