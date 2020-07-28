import React,{Component} from 'react';
import { getjwt } from './jwthelp.js';
import { withRouter } from 'react-router-dom';

class AuthLogin extends Component {
    

    constructor(props){
        
        super(props);
            this.state ={
                user:undefined
            }
        }

        componentDidMount(){
            const jwt = getjwt();
            if(!jwt){
                this.props.history.push("/login");
            }

            this.setState({user:"person"});
            
        }
    
    render(){
        if(this.state.user === undefined){
            return(
                <div><h1>Loading..</h1></div>
            );
        }
        return(
            <div>{this.props.children}</div>
        );
    }

}
export default withRouter(AuthLogin);