import React, { Component } from 'react';
import banner from "../image/drew2.png"
import TypeWriterText from './TypeWriterText';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li><a className="smoothscroll" href="#home"> {'< home />'}</a></li>
              <li><a className="smoothscroll" href="#about"> {'< About />'}</a></li>
              <li><a className="smoothscroll" href="#resume"> {'< Resume />'}</a></li>
              <li><a className="smoothscroll" href="#portfolio"> {'< Projects />'}</a></li>
              {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
              <li><a className="smoothscroll" href="#contact"> {'< Contact Me />'}</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              {/* <h1 className="responsive-headline">{resumeData.name}.</h1> */}
              <TypeWriterText/>
              <h3 style={{ color: '#fff', fontFamily: 'sans-serif' }}>I am a {resumeData.role}.{resumeData.roleDescription}
              </h3>
              <hr />
              <ul className="image-float">
                
                <li style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <ul className="social">
                    {resumeData.socialLinks && resumeData.socialLinks.map(item => (
                      <li key={item.name}>
                        <a href={item.url} target="_blank"><i className={item.className}></i>          <span>{item.text}</span>
</a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }}>
                  <img src={banner} alt="Banner" height="200" width="200" />
                </li>
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}