import styles from '../../../App.module.css';
import TopbarCSS from './Topbar.module.css';
import {useState} from 'react';

function App() {
  return (  
    <div className={styles.App}>
      <div className={TopbarCSS.topbar}>
        <h1 className={TopbarCSS.farmazon}>
          Farmazon
        </h1>
        <div className={TopbarCSS.emptydiv}></div>
        <h4 className={TopbarCSS.contact}>
          CONTACT
        </h4>
        <h4 className={TopbarCSS.about}>
          ABOUT
        </h4>
      </div>
    </div>
  );
}

export default TopBar;
