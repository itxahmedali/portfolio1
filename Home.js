import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="Home-section">
        <section className="Home-section1">
            <h1>Hi, <br /> I Am Ahmed <br /> Front End Web Developer.</h1>
            <Link to="./contact"><button type="button" className="btn btn-lg col-5 btn-light">Contact</button></Link>
            </section>
            <section className="Home-section2">
            <a href="https://www.linkedin.com/in/ahmed-ali-13108320b/"> <i className="fab fa-linkedin-in icons"> </i></a>
            <a href="https://github.com/itxahmedali"><i className="fab fa-github icons"></i></a>
            </section>
        </div>
    )
}
