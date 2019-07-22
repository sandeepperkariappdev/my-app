import * as React from 'react';
import {Toggle} from './toggle';


type StatusTypes = "Good" | "Slow Down" | "Stuck";


interface Snapshot {
    scrollheight:number
}
interface StatusCardProps{
    DefaultStatus:StatusTypes
}
interface StatusCardState {
    Status: StatusTypes,
    quantities? : { [key:string] : number}
}
interface MyCompProps{
    DefaultStatus:StatusTypes
}

export default class StatusCard  extends React.Component<StatusCardProps, StatusCardState, Snapshot>{
    
    static defaultprops:StatusCardProps = {
        DefaultStatus : "Good"
    }
    
    state = {
        Status : this.props.DefaultStatus
    }

    // Returns new state object so we can avoid setState
    static getDerivedStateFromProps: React.GetDerivedStateFromProps<StatusCardProps, StatusCardState> = (nextProps, prevState) => {
        console.log(nextProps);
        console.log(nextProps);
        //getDerivedStateFromProps simply returns an object containing the updated state. Notice that the function has no side-effects; this is intentional.
        //getDerivedStateFromProps may be called multiple times for a single update, so it’s important to avoid any side-effects
        // if state has not changed
        return null;
    }
    
    componentDidUpdate(){
        //componentDidUpdate, which executes only once after the component updates.
    }
    togglehandler =() =>{
        this.setState((prevState, prevProps)=>{
            if(prevState.Status === "Good"){
                return { Status : "Stuck"}
            }
            if(prevState.Status === "Slow Down"){
                return { Status : "Good"}
            }
            return { Status : "Slow Down"}            
        })
    }

    getColor(){
        if(this.state.Status === "Good"){
            return "#0F0";
        }
        if(this.state.Status === "Slow Down"){
            return "#f4cf53";
        }
        return "#F00";
    }

    render(){
        return(
            <>
            <div style={{
                background :this.getColor(),
                color:"#000",
                height:"200px",
                width:"200px"
            }}>
                {this.state.Status}
            </div>
            <Toggle ClickHandler={this.togglehandler} ></Toggle>
            </>
        );
    }

}