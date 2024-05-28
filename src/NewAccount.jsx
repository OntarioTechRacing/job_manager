import otrLogo from './images/otrLogo.png';

function NewAccount(){
    return(
        <div>
            <div>
                <div><img src = {otrLogo} alt = "OTR LOGO" width = "100"/></div>

                <div>
                    <div>Server Cluster App</div>
                </div>

                <div className = "form-container">
                    <div>Create an account</div>

                    <form>
                        <div><input className = "username-container"type = "text" placeholder = "Username or Email" name = "username"/></div>
                        <div><input className = "password-container" type = "text" placeholder = "Password" name = "password"/></div>
                    </form>
                </div>

                <div>
                    <div>
                        <label class = "container">I have read and agree to the Terms and Conditions</label>
                        <span class = "checkmark"></span>
                    </div>

                    <div>
                        <label class = "container">I consent to the Privacy Policy</label>
                        <span class = "checkmark"></span>
                    </div>
                </div>

                <div>
                    <button className = "sign-in-btn">Create my account</button>
                </div>

                <div className="signup-options-container">
                    <div className = "line-break"></div>
                    <div>Or</div>
                    <div className = "line-break"></div>
                </div>

                <div>
                    <div>Sign up with Google</div>
                </div>
            </div>
        </div>
    )
}

export default NewAccount;