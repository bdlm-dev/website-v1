import React, { Component } from 'react';
import styles from './Portfolio.module.scss';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.data = [
            {
                title: "Portfolio Website",
                description: "This very website, designed in Figma, prototyped on Codepen, and deployed with Netlify. Built with HTML, SCSS and JavaScript in React.",
                tools: ["CSS", "SCSS", "HTML", "JS", "Figma", "React"],
            },
            {
                title: "UNDER CONSTRUCTION",
                description: "This area is still being built! Please check back later for more.",
                tools: [""],
            }
        ];

        /* data template
            {
                title: "",
                description: "",
                tools: [""],
            },
        */
    }

    render() {
        this.projects = this.data.map(item => <Project title={item.title} description={item.description} tools={item.tools} key={item.title}></Project>)
        console.log(this.projects);

        return (
            <div className={styles.portfolio} style={this.props.style}>
                <div className={styles.hero}>
                    <svg width="1" height="1">
                        <clipPath id="portfolio-clip" clipPathUnits="objectBoundingBox">
                            <path d="m0 .5C.5 1 .5 0 1 .5V1H0V.5" />
                        </clipPath>
                    </svg>
                    <div className={`${styles.title} ${styles.main}`}>
                        PORTFOLIO
                    </div>
                    <div className={`${styles.title} ${styles.blue}`} clipPathUnits="objectBoundingBox">
                        PORTFOLIO
                    </div>
                    <a className={styles.arrow} href="#projects">a</a>
                </div>
                <div className={styles.pageContent}>
                    <section id="projects">
                        <ul className={styles.projects}>
                            {this.projects}
                        </ul>
                    </section>
                </div>
            </div>
        );
    }
}

class Project extends Component {
    constructor(props) {
        super(props);
        this.title = props.title;
        this.description = props.description;
        this.tools = props.tools;
    }

    render() {

        return (
            <li>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <h2>{this.title}</h2>
                    <p className={styles.description}>
                        {this.description}
                    </p>
                    <div className={styles.tools}>
                        {this.tools.map(item => <span> {item} </span>)}
                    </div>
                </div>
            </li>
        );
    }
}