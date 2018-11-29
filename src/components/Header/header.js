import React from 'react';

import styles from './header.module.css'

const header = (props) => (
    <>
        <header className={styles.header}>
            <div className={styles['header-wrapper']}>

                <div className={styles.logo}>
                    Demo App
            </div>
                <div className="btn-group">
                    <button>Hot</button>
                    <button>Top</button>
                    <button>User</button>
                </div>
            </div>
        </header>
    </>
);

export default header;