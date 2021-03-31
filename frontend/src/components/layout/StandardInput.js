import styles from './App.module.css';
import inputCSS from './StandardInput.module.css';

function StandardInput(props){
    return(
        <div className={inputCSS.box} style={{marginTop : props.marginT, marginLeft : props.marginL, width : props.width}}>
            <h4 className = {inputCSS.name}>{props.name}</h4>
            <input className={inputCSS.input} type={props.type} placeholder={props.placeholder} style={{width : props.width}}/>
        </div>
    )
}

export default StandardInput