import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


const logo = require('./download.jfif');











class Login extends Component {

  
  
  constructor(props){
    super(props)
    this.state ={
      name:"",
      password:"",
      login:false,
      store:null,
      
    }
  }

 
 
    


  change =(e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitH = (e) =>{
    e.preventDefault()
    const {history} = this.props;
    console.log(this.state)
    
    // let datajson = JSON.stringify(this.state);
    // axios.post("http://localhost:8080/auth/login", this.state)
    axios({
      method:"POST",
      url:"https://chat-app-couple.herokuapp.com/auth/login",
      data:this.state
    })
    .then(res =>{
      if(res.status ===200){
        console.log(res);
        
        localStorage.setItem("temp-jwt" , res.data.token)
        if(res.data.room === null){
          history.push("/createroom");
        }else{
          localStorage.setItem("roomname",res.data.room);
          localStorage.setItem('name',this.state.name );
          history.push("/event");
        }
      }
      else{
        alert("Invalid credentials, you could not be logged in");
      }
    })
    .catch(err=>{
      console.log(err);
    })
  }

  // state={
  //   loggedIn:true
  // }
  
  
//   verify = (event) =>{
//   event.preventDefault();
  
//   const {history} = this.props;
//   let check = true;
//   let request = {
//       name:document.getElementById("username").value,
//       password:document.getElementById("password").value
//   }
  
//   let data = request.json;
//   console.log(request);
//   axios.post("http://localhost:8080/auth/login", request)
//   .then(response =>{
//     if( response.status === 200){
//       console.log(response);
//       history.push("/chatbox");
//     }
 
//     })
  
//   .catch(err =>{
//    console.log(err);
//   })
// }

  // verify = (event) =>{
  //   const {history} = this.props;
  //   event.preventDefault();
  //   console.log("yes");
 
  //   this.props.history.push("/chatbox");
   
   
    

  // }
  render(){
    const { name , password} = this.state;
    return (
      

     
   
    //   <div className='body'>
    
    //   <h1 id="top">Couplera</h1>
  
  
  
    // <div id="login">
  
    //   <div className="imgcontainer">
    //     <img className='loginimg' src={logo} alt="icon" />
    //   </div>
  
    //   <h2 className='logintitle'>Log In</h2>
    //   <div className="container">
    //   <form className='loginform' onSubmit={this.submitH} >
    //     <label><b className='btype'>Username</b></label>
    //     <input className="in"  id="username" type="text" onChange={this.change} placeholder="Enter Username" name="name" value={this.name} />
    //     <label><b className='btype'>Password</b></label>
    //     <input className="in" id="password" type="password" onChange={this.change} placeholder="Enter Password" name="password" value={this.password} />
    //     <button className='loginbtn'  type="submit" name="button">LOGIN</button>
    //     <Link to="/signin">
    //     <p className='loginp'>A new user? <a className='loginanchor' href="#">Sign Up</a></p>
    //     </Link>
    //   </form>
  
    //    </div>
    //   </div>
  
  
    // </div>



    <div  className="loginbg">
        <div className="navsignin">
          <h1 className="titlesignin">Couplera</h1>
          <button className="loginbtnsignin"><a className='logina' href='/signin'>Sign up</a></button>
        </div>

          <div className="formsignin">
          <div className='formtitle'>
        <img className='loginimg' src={logo}  alt=""/>
        <h1 className="signup">Log In</h1>
        
          </div>


          <form onSubmit={this.submitH}>


            <h3 className="headlogin">Username</h3>
            <input className="inputsignin"  id="username" type="text" onChange={this.change} placeholder="Enter Username" name="name" value={this.name} />

           
            <h3 className="headlogin">Password</h3>
              <input className="inputsignin" id="password" type="password" onChange={this.change} placeholder="Enter Password" name="password" value={this.password} />

              <button className='buttonsignin' type="submit" name="button">Log In</button>
              <p className="psignin">A new user? <a class="asignin" href="/signin">Sign Up</a></p>
          </form>
      </div>


  </div>
 
     
    );
  }
}

export default Login;