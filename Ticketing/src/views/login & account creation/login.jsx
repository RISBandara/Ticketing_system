import React ,{Component} from 'react'
import "../../css/login.css";
import BaseUrl from "../../constatnts/base-url";
import Dialog from "@material-ui/core/es/Dialog/Dialog";
import DialogTitle from "@material-ui/core/es/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/es/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/es/DialogContentText/DialogContentText";
import ReactDOM from "react-dom";
import Manage from "../../Manage";
import App from "../../App";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            name:'',
            nic:'',
            dob:'',
            type:'',
            key:'kasun',
            username: '',
            password: '',
            open:false,
            newUsername:'',
            newPassword:'',
            confirmPassword:'',
            role:''
        };
    }

    notifySuccess = (message) => {
        toast.success(message, {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    notifyError = (message) => {
        toast.error(message, {
            position: toast.POSITION.BOTTOM_CENTER
        });
    };

    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSignUp=(event)=>{
        if(this.state.newPassword!==this.state.confirmPassword){
            this.notifyError("Passwords does not match properly")
        }else{
            var user={
                name:this.state.name,
                nic:this.state.nic,
                dob:this.state.dob,
                type:this.state.type,
                username:this.state.newUsername,
                password:this.state.newPassword,
                role:this.state.role
            }
            event.preventDefault();
            BaseUrl.post('users',user).then(res=>{
                this.notifySuccess("Successfully Submitted.! To activate your account please recharge Rs.100");
                this.handleClose();
                localStorage.setItem("key",res.data["key"]);
                localStorage.setItem("name",res.data["name"]);
                localStorage.setItem("nic",res.data["nic"]);
                localStorage.setItem("type",res.data["type"]);
                // ReactDOM.render(<App />, document.getElementById('root'));

            }).catch(error=>{

            })
        }

    }

    handleLogin=(event)=>{
        var user={
            username:this.state.username,
            password:this.state.password
        }
        event.preventDefault();
        BaseUrl.post('users/login',user).then(res=>{
            this.notifySuccess("Successfully Submitted.!")
            this.handleClose();
            localStorage.setItem("key",res.data["key"]);
            localStorage.setItem("name",res.data["name"]);
            localStorage.setItem("nic",res.data["nic"]);
            if(res.data["role"]=="Passenger"){
                ReactDOM.render(<App/>, document.getElementById('root'));
            }else{
                ReactDOM.render(<Manage/>, document.getElementById('root'));
            }

        }).catch(error=>{
            if(error){
                this.notifyError("Invalid credentials.");
            }

        })
    }

    handleClickOpen = (event) => {
        event.preventDefault();
        this.setState({ open: true });
    };

    handleClose = (event) => {
        // event.preventDefault();
        this.setState({ open: false });
        // ReactDOM.render(<StartJourney/>, document.getElementById('root'));
    };

    render(){
        const {name,nic,dob,type,username,password,newUsername,newPassword,confirmPassword,role}=this.state;
        return(
            <div>
                <ToastContainer />
                    <div>
                        <img src={require('../../images/logo.jpg')} alt="" width="100%"/><br/><br/>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-xs-10 col-sm-8 col-sm-offset-5">
                                    <h4>Please login to your account</h4>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-sm-10 col-xs-12 col-sm-offset-2 col-md-offset-2">
                                    <form>
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input type="text" name="username" className="form-control" value={username.value} onChange={this.handleChange} placeholder="Enter username"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" name="password" className="form-control"  value={password.value} onChange={this.handleChange} id="exampleInputPassword1" placeholder="Password"/>
                                        </div>
                                        <div className="container">
                                            <div className="row" align="center">
                                                <button type="submit" className="btn btn-primary col-sm-10 col-md-9 col-xs-12" onClick={this.handleLogin}>Login</button>&nbsp;&nbsp;
                                                <span className="button-span"></span>
                                                <button type="submit" className="btn btn-success col-sm-10 col-md-9 col-xs-12" onClick={this.handleClickOpen}>Register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Dialog
                            open={this.state.open}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Register a new account</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    <form>
                                        <div className="form-group">
                                            <label >Full Name</label>
                                            <input type="text" name="name" className="form-control" onChange={this.handleChange} value={name.value} placeholder="Enter full name"/>

                                        </div>
                                        <div className="form-group">
                                            <label>NIC</label>
                                            <input type="text" name="nic" className="form-control" onChange={this.handleChange} value={nic.value} placeholder="Enter NIC"/>

                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Date of Birth</label>
                                            <input type="date" name="dob" className="form-control" onChange={this.handleChange} value={dob.value} placeholder="Enter Date of Birth"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect1">Type</label>
                                            <select className="form-control" name="type" id="exampleFormControlSelect1" onChange={this.handleChange} value={type.value}>
                                                <option>Choose..</option>
                                                <option>Local</option>
                                                <option>Foreign</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleFormControlSelect1">Role</label>
                                            <select className="form-control" name="role" id="exampleFormControlSelect1" onChange={this.handleChange} value={role.value}>
                                                <option>Choose..</option>
                                                <option>Passenger</option>
                                                <option>Manager</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">New Username</label>
                                            <input type="text" name="newUsername" value={newUsername.value} className="form-control" onChange={this.handleChange} placeholder="New username"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">New Password</label>
                                            <input type="password" name="newPassword" onChange={this.handleChange} value={newPassword.value} className="form-control" placeholder="New password"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Confirm Password</label>
                                            <input type="password" name="confirmPassword" onChange={this.handleChange} value={confirmPassword.value} className="form-control" placeholder="Confirm password"/>
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <button type="submit" className="btn btn-success col-sm-10 col-md-5 col-xs-12" onClick={this.handleSignUp}>Register</button>
                                            </div>
                                        </div><br/>
                                    </form>
                                </DialogContentText>
                            </DialogContent>
                        </Dialog>
                    </div>

            </div>

        );
    }
}