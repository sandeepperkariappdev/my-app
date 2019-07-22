import * as React from 'react'

interface MyCompProps{
    products:string[]
}
interface MyCompState{
    error:any,
    errorInfo:any
    quantities?:{[key:string]:number}
}

const ProductDisplay = (props:{title:string}) => {(<h2>{props.title}</h2>)}

//const contentDisplay:React.FunctionComponent<{title:string}> = (props) => {(<h2>{props.title}</h2>)}

const MISSING_ERROR= 'Error was swallowed during propagation';

class ErrorBoundary  extends React.Component<MyCompProps, MyCompState>{
    static defaultProps: MyCompProps = {
        products:[]
    }
    constructor(props:MyCompProps){
        super(props)
        this.state= {
            error:null,
            errorInfo:null
        } as MyCompState;
    }

    componentDidCatch(error:Error | null, info:object){
        this.setState({
            error:error || new Error(MISSING_ERROR),
            errorInfo:info
        })
    }
    render(){
        if(this.state.errorInfo){
            return (<div>
                <h2>something went wrong</h2>
                <details style={{}} >
                    {this.state.error && this.state.error.toString()}
                    <br />
                    {this.state.errorInfo.componenetStack}
                </details>
            </div>);
        }
        return this.props.children;
    }

}