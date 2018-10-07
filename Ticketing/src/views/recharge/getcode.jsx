// import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
// import Popup from "reactjs-popup";
//
//
//
// class getcode extends Component {
//
//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         items: [],
//     //         fields : {},
//     //         errors : {}
//     //     }
//     // }
//     //
//     // handleValidation(){
//     //     let fields = this.state.fields;
//     //     let errors = {};
//     //     let formIsvalid = true;
//     //
//     //     if (!fields["username"]){
//     //         formIsvalid = false;
//     //         errors["username"] = "Username is required";
//     //     }
//     //
//     //     if (typeof fields["username"] !== "undefined"){
//     //         if (!fields["username"].match(/^[a-zA-Z]+$/)){
//     //             formIsvalid = false;
//     //             errors["username"] = "Only letters are allowed";
//     //         }
//     //     }
//     //
//     //     if (!fields["password"]){
//     //         formIsvalid = false;
//     //         errors["password"] = "Enter password";
//     //     }
//     //
//     //     this.setState({errors:errors});
//     //     return formIsvalid;
//     // }
//     //
//     // contactSubmit(e){
//     //     e.preventDefault();
//     //     if(this.handleValidation()){
//     //         alert("User Successfully Logged in");
//     //     }else{
//     //         alert("Invalid credentials..Please try again...!");
//     //     }
//     // }
//     //
//     // handleChange(field,e){
//     //     let fields = this.state.fields;
//     //     fields[fields] = e.target.value;
//     //     this.setState({fields});
//     // }
//     //
//     //
//     // //Have to fetch user database
//     // componentDidMount(){
//     //     fetch('http://localhost:3001/onlinefood/getuser')
//     //         .then(result1 => result1.json())
//     //         .then(items=>this.setState({items}))
//     // }
//
//
//     render() {
//
//         return (
//
//             <div className="container">
//
//
//                 <Popup
//                     trigger={<button className="btn btn-primary btn-lg btn-block" > USER LOGIN  </button>}
//                     modal
//                     closeOnDocumentClick
//                 >
//                     <form name="login form">
//                         return(
//
//                         <span> <font color="black">
//                          <div className="header"> Enter User Details </div> <br/> <br/>
//                             {/*<p> {bookslist}</p>*/}
//                             <form>
//                              <label>ENTER USERNAME : </label>
//                              <input ref="username" type='text' required/><br/>
//
//                              <label>ENTER PASSWORD: </label>
//                              <input ref="password" type='password'required/><br/><br/>
//
//                             <center><button className="btn btn-success" type="submit" name="login"  >LOGIN</button></center>
//
//                             <br/>
//                             <p><center> <Link to="/">Forgot your password?</Link></center></p>
//
//                             </form>
//                         </font>
//                     </span></form>
//
//                     )
//                 </Popup>
//
//             </div>
//
//
//
//         )
//     }
// }
//
// export default getcode;
