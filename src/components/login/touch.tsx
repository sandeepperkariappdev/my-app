import * as React from 'react';

interface Props{
    name:string 
}
const Label : React.FunctionComponent<Props> = (props) =>{
    return <h1>{props.name}</h1>
}

export default Label;