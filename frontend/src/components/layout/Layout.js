import Navbar from '../navbar/Navbar'

import styles from './layout.module.css'

function Layout(props){
    return(
        <div className={styles.layout}>
            {<Navbar/>}
            {props.children}
        </div>
    );
}

export default Layout;