import React,{useState} from 'react';
import  axios from 'axios';

function Signin(props) {

  const [state, setState] = useState({
    name:"",
    email: "",
    password:""
  });


function changeH(event){
    const { name, value } = event.target;

    setState(prevEvent => {
      return {
        ...prevEvent,
        [name]: value
      };
    });
    
}

function submitHandle(e){
    e.preventDefault()
    console.log(state)
    localStorage.setItem('name',state.name )
    localStorage.setItem('password',state.password )

    // axios.post("http://localhost:8080/auth/createRoom", state)
    axios({
        method:"POST",
        url:"https://chat-app-couple.herokuapp.com/auth/signup",
        data:state
      })
    .then(res =>{
        if(res.data.message ==='User created!'){
         
          console.log("yes")
          props.history.push('/login')
          }
        else{
          
        }

         
        
    }).catch(err=>{
        console.log(err);
    })
}





  return (
    // <div className="App">
    //          <form onSubmit={submitHandle}>
    //               <label>Username</label>
    //               <input onChange={changeH} name="name" value={state.name}></input>
    //               <label>Email</label>
    //               <input onChange={changeH} name="email" value={state.email}></input>
    //               <label>Password</label>
    //               <input onChange={changeH} name="password" value={state.password}></input>
    //               <button>Sign up</button>
    //        </form>

    // </div>
    // <body>
    <div  className="bg">
        <div className="navsignin">
          <h1 className="titlesignin">Couplera</h1>
          <button className="loginbtnsignin"><a className='logina' href='/login'>Login</a></button>
        </div>

          <div className="formsignin">
          <div className='formtitle'>
        <h1 className="signup">Sign up</h1>
        <img src="" alt=""/>
          </div>


          <form onSubmit={submitHandle}>


            <h3 className="head">Username</h3>
            <input className="inputsignin"  type="text" onChange={changeH} name="name" value={state.name} placeholder="Enter an username" />
            <h3 className="head">E-mail</h3>
              <input className="inputsignin"type="email"  onChange={changeH} name="email" value={state.email} placeholder="Enter an email" />
            <h3 className="head">Password</h3>
              <input className="inputsignin"type="password" name="uname" placeholder="Enter password" />
            <h3 className="head">Confirm Password</h3>
              <input className="inputsignin" type="password" onChange={changeH} name="password" value={state.password} placeholder="Re-enter password " />

              <button className='buttonsignin'type="submit" name="button">Sign Up</button>
              <p className="psignin">Already a user? <a class="asignin" href="/login">Login</a></p>
          </form>
      </div>


  </div>
// </body>

  );
}

export default Signin;