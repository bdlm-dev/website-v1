import React, {Component} from 'react';
import styles from './Home.module.scss';

export default class Home extends Component {

    render() { // can't use kebab-case variables as they're not valid JS variables.
        return (
            <div className={styles.home} id="home"  style={this.props.style}>
                <div className={`${styles.top}`}>
                    <span className={`${styles.miller} ${styles.reveal}`}>Miller.</span>
                    <br />
                    <span className={`${styles.strive} ${styles.revealAlt}`}>Strive for perfection</span> 
                </div>

                <div className={styles.bottom}>
                    <div className={styles.explore}>EXPLORE</div>
                    <div className={styles.tagContainer}>
                        <div className={styles.tags}>
                            <span>Develop</span>
                            <span>Design</span>
                            <span>Innovate</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}