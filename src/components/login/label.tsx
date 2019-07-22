import * as React from 'react';


interface Props{
    clickHandler:(event:React.MouseEvent<HTMLButtonElement>) => void, 
    text:string
}
const DumbButton = (props:Props) => {
    return <button onClick={props.clickHandler}>{props.text}</button>
}