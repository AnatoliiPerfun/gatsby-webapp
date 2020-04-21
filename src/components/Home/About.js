import React from 'react';
import Title from "../Title";
import styles from "../../css/about.module.css";
import img from "../../images/defaultBcg.jpeg";


const About = () => {
    return (
        <section className={styles.about}>
            <br />
            <Title title="about" subtitle="us" />
            <br />
            <div className={styles.aboutCenter}>
                <article className={styles.aboutImg}>
                    <div className={styles.imgContainer}>
                        <img src={img} alt="about company"/>
                    </div>
                </article>
                <article className={styles.aboutInfo}>
                    <h4>Explore new world</h4>
                    <p>bla bla bla</p>
                    <p>its all about magic</p>
                    <button type="button" className="btn-primary">
                    read more
                    </button>
                </article>
            </div>
        </section>
        
    )
}

export default About