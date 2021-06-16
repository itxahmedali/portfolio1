import React from 'react';
import './Work.css';

export default function Work() {
    return (
    <section id="downloads" className="work1">
    <div className="work-h">
    <h1>Work</h1>
    </div>
    <div className="work-content">
    <div className="card card-body">
  <img src="work-img1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Develope what you need.</h5>
    <p className="card-text">I'm a developer, so I know how to create your website to run across
        devices using the latest technologies available.</p>
  </div>
</div>
 <div className="card card-body">
  <img src="work-img2.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Design what you want.</h5>
    <p className="card-text">like to keep it simple. My goals are to focus on typography, content and conveying the message that you want to send.</p>
  </div>
</div>
</div>
  </section>
    )
}
