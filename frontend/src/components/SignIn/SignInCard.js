import  './App.module.css';
import StandardInput from '../layout/StandardInput.js';
import SignInCSS from './SignInCard.module.css';
import {ReactComponent as Checked} from '../assets/checked-brown.svg';

function SignInCard() {
    return(
        <div className={SignInCSS.maincard}>
            <div className = {SignInCSS.topbox}>
                <h1 style = {{color : 'var(--black-2)'}}>
                    Sign&nbsp;In
                </h1>
            </div>
            <StandardInput name="Username" placeholder = "Type your Username..." marginT = {42} marginL = {20} width = {536}/>
            <StandardInput name="Password" placeholder = "Type your Password..." marginT = {42} marginL = {20} width = {536}/>
            <div className={SignInCSS.underpassword}>
                <div className={SignInCSS.remember}>
                    <div className={SignInCSS.rememberBox}>
                        <Checked className={SignInCSS.Checked}/>
                    </div>
                    <caption className={SignInCSS.rememberText}>Remember&nbsp;Me</caption>
                </div>
                <div>
                    <caption className={SignInCSS.forgotpass}>Forgot&nbsp;Password?</caption>
                </div>
            </div>
            <div className={SignInCSS.accountcheck}>
                <h6>Do&nbsp;not&nbsp;have&nbsp;an&nbsp;account&nbsp;yet?</h6>
                <caption>Create&nbsp;account</caption>
            </div>
            <div className={SignInCSS.loginbtn}>
                <h3>Login</h3>
            </div>
        </div>
    )
}
export default SignInCard