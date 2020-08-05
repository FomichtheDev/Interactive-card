import React from "react";
import classes from './Layout.module.css'

function Layout(props) {
    return(
        <section className={classes.Layout}>
            {props.children}
        </section>
    )
}

export default Layout;