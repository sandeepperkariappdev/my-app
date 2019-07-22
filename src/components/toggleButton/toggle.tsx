import * as React from 'react';

interface ToggleProps {
    ClickHandler:(event:React.MouseEvent) =>void
}


export function Toggle(Props:ToggleProps){
 return <button onClick={Props.ClickHandler}>Toggle</button>
}

