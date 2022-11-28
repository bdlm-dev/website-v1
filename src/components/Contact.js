import React, { Component } from 'react';
import styles from './Contact.module.scss';

export default class Contact extends Component {
    render() {
        return (
            <div className={styles.contact}>
                <div className={styles.container}>
                    <div className={styles.chat}>
                        let's chat
                    </div>
                    <div className={styles.email}>
                        <a href="mailto:bdlm@hotmail.co.uk">bdlm@hotmail.co.uk</a>
                    </div>
                    <div className={styles.links}>
                        <Link link="https://github.com/bdlm-dev" name="github" />
                        <Link link="https://codepen.io/mmbluey" name="codepen" />
                        <Link link="https://www.codewars.com/users/mmbluey" name="codewars" />
                    </div>
                </div>
            </div>
        );
    }
}

class Link extends Component {
    render() {
        return (
            <div className={styles.link}>
                <a href={this.props.link} target="_blank" rel="noreferrer">{this.props.name}</a>
                <i className={styles.linkUpArrow} />
            </div>
        );
    }
}