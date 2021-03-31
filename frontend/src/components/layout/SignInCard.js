import styles from './App.module.css';
import StandardInput from './StandardInput.js';
import SignInCSS from './SignInCard.module.css';

function SignInCard() {
    return(
        <div className={SignInCSS.maincard}>
            <div className = {SignInCSS.topbox}>
                <h1 style = {{color : 'var(--black-2)'}}>
                    Sign In
                </h1>
            </div>
            <StandardInput name="Username" placeholder = "Type your Username..." marginT = {42} marginL = {20} width = {536}/>
            <StandardInput name="Password" placeholder = "Type your Password..." marginT = {42} marginL = {20} width = {536}/>
            <div className={SignInCSS.remember}>
                <div className={SignInCSS.rememberBox}></div>
                <caption className={SignInCSS.rememberText}> Remember Me</caption>
            </div>
        </div>
    )
}
export default SignInCard