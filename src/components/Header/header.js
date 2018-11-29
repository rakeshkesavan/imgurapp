import React from 'react';
import * as sectionTypes from './sectionTypes';

import styles from './header.module.css';

const header = (props) => (
    <>
        <header className={styles.header}>
            <div className={[styles['header-wrapper'], styles['flex-grid-thirds']].join(' ')}>

                <div className={[styles['logo'], styles['col']].join(' ')}>
                    Demo App
                </div>

                <div className={styles.col}>
                    <nav>
                        <ul>
                            <li
                                className={(props.section === sectionTypes.SECTION_HOT) ? styles.active : ''}
                                onClick={() => (props.sectionClicked(sectionTypes.SECTION_HOT))}>
                                {sectionTypes.SECTION_HOT}</li>

                            <li className={(props.section === sectionTypes.SECTION_TOP) ? styles.active : ''}
                                onClick={() => (props.sectionClicked(sectionTypes.SECTION_TOP))}>{sectionTypes.SECTION_TOP}</li>
                            <li className={(props.section === sectionTypes.SECTION_USER) ? styles.active : ''}
                                onClick={() => (props.sectionClicked(sectionTypes.SECTION_USER))}>{sectionTypes.SECTION_USER}</li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.col}>
                    <div className={styles.colContainer}>
                        <span className={styles.viralLabel}>Show Viral Images</span>
                        <label className={styles.switch}>
                            <input type="checkbox" />
                            <span className={[styles.slider, styles.round].join(' ')}></span>
                        </label>
                    </div>
                </div>


                <div className={styles.col}></div>
            </div>
        </header>
    </>
);

export default header;