import React from 'react';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

import '../assets/sass/materialize.scss';
import '../assets/sass/sayHello.scss';

const SayHello = () => {
  return (
    <section id="three" className="wrapperTouchBanner inner style1">
      <div className="container ">
        <div className="row">
          <div className="col s12">
            <Roll left>
              <header className="majorTouch">
                <h2> Say hello! </h2>
              </header>
            </Roll>
          </div>
        </div>
        <Fade bottom cascade delay={3000}>
          <div className="row section">
            <div className="col s3 right-align">
              <span className="icon solid fas fa-phone major style2 "></span>
            </div>
            <div className="col s8">
              <h3>+44 234234 23423</h3>
            </div>
          </div>
          <div className="row section">
            <div className="col s3 right-align">
              <a href="https://www.instagram.com/jackpropmain/" target="_blank" rel="noreferrer">
              <span className="icon brands fa-instagram major style2"></span>
              </a>
            </div>

            <div className="col s8 left-align">
              <h3> Social </h3>
            </div>
          </div>
          <div className="row">
            <div className="col s12 m8">
              <h3 className="emailDrop"> Or drop us a message below</h3>
            </div>
          </div>
        </Fade>
      </div>

      {/* <div className="inner">
        <Roll left>
          <header className="majorTouch">
            <Pulse count={2}>
              <h2> Say hello! </h2>
            </Pulse>
          </header>
        </Roll>
        <Fade bottom cascade delay={3000} duration={3000}>
          <ul className="icons major">
            <li>
              <span
                style={{}}
                className="icon solid fas fa-phone major style1 "
              ></span>
              <br />

              <h2 style={{ margin: '8px', marginLeft: '25px' }}>
                +44 234234 23423
              </h2>
            </li>

            <li>
              <span className="icon brands fa-instagram major style2"></span>
              <Arrow className={'arrowSocial'} />
              <h3> Check out our work here </h3>
            </li>

            <li>
              <h3 className="emailTitle"> Or drop us an email below </h3>
              <Pulse forever duration={1500}>
                {' '}
                <Arrow className={'arrowEmail'} />{' '}
              </Pulse>
            </li>
          </ul>
        </Fade>
      </div> */}
    </section>
  );
};

export default SayHello;
