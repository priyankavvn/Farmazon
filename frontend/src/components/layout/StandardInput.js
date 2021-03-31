import styles from './App.module.css';
import inputCSS from './StandardInput.module.css';

function StandardInput(props){
    return(
        <div className={inputCSS.box} style={{marginTop : props.marginT, marginLeft : props.marginL, width : props.width}}>
            <h4 className = {inputCSS.name}>{props.name}</h4>
            <div className={inputCSS.field} style={{width : props.width}}>
                <input type="text" placeholder={props.placeholder} style={{width : props.width}}/>
            </div>
        </div> 
    )
}

export default StandardInput