import * as React from 'react';
import User from './user';


interface Props{}


export default class Login extends React.Component{

    render(){
        return (<>
            <User name={"sandeep"} />
            </>);
    }    
}

