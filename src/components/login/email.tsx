import * as React from 'react';
import { func } from 'prop-types';


interface Props{
    email:string,
    defaultEmail: string,
    onChange:(event:React.ChangeEvent<HTMLInputElement>) =>void 
}


// const EmailInput : React.FunctionComponent<Props> = (props) =>{
//     return <input onchange={props.onChange} value={props.email}/>
// }
interface State{
    email:string
}
export default class EmailInput extends React.Component<Props, State>{
    
    state= {email: this.props.defaultEmail};
    
    handleChange = (event:any) => {
        this.setState({email:event.target.value});
    }

    render(){
        return(<div>
            <h1>Hii</h1>
            <button onClick={this.handleChange}></button>
        </div>);
    }
}