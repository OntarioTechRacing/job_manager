
import './App.css';
import otrLogo from './images/otrLogo.png';
import { Link } from 'react-router-dom'

function Login(){
    return (
        <div>
            <div className = "login-background">
                <div className = "login-image">

                </div>

                <div>
                    <div><img src = {otrLogo} alt = "OTR LOGO" width = "100"/></div>

                    <div>
                        <div><h2>Server Cluster App</h2></div>
                    </div>

                    <div className = "form-container">
                        <form>
                            <div><input className = "username-container"type = "text" placeholder = "Username or Email" name = "username"/></div>
                            <div><input className = "password-container" type = "text" placeholder = "Password" name = "password"/></div>
                        </form>
                    </div>

                    <div>
                        <button className = "sign-in-btn">Sign In</button>
                    </div>

                    <div className="signup-options-container">
                        <div className = "line-break"></div>
                        <div>or</div>
                        <div className = "line-break"></div>
                    </div>

                    <div>
                        <div>Sign in with Google</div>
                        <div>
                            <div>Are you new?</div>
                            <div>
                                    <button className="newAccount-btn"> 
                                        <Link to={"./NewAccount"}>
                                            Create an account
                                        </Link> 
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;