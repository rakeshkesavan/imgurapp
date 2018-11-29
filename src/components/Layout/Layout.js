import React from 'react';
import Header from '../Header/header'

// import styles from './Layout.module.css'

const layout = (props) => (
    <>
        <Header />
        <main>
            {props.children}
        </main>
    </>
);

export default layout;