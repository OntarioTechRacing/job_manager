
import './App.css';
import otrLogo from './images/otrLogo.png';

function Login(){
    return(
        <div>
            <div className = "login-background">
                <div className = "login-image">

                </div>

                <div>
                    <div>
                        <div><img src = {otrLogo} alt = "OTR LOGO" width = "100"/></div>
                        <div>Server Cluster App</div>
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
                </div>
            
            </div>
        </div>
    )
}

export default Login;