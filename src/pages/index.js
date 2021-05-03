import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01_.jpg';
import pic2 from '../assets/images/pic02_.jpg';
import pic3 from '../assets/images/pic03_.jpg';
// import config from '../../config';
import { StaticImage } from 'gatsby-plugin-image';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import Pulse from 'react-reveal/Pulse';
import Arrow from '../components/arrow';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <Roll left delay={2500} duration={2500}>
          <StaticImage
            src="../assets/img/logo2.png"
            placeholder="blurred"
            width={600}
          />
        </Roll>

        {/* <h2>{config.heading}</h2> */}
        {/* <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                More...
              </a>
            </Scroll>
          </li>
        </ul> */}
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="arrow">
          <span class="material-icons">expand_more</span>
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>Property maintenance across the South West</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
            ipsam voluptates tempora, quas ea ratione eaque dignissimos? Eos
            vitae molestiae dolore, alias doloremque nesciunt eligendi amet sint
            laborum velit assumenda?
          </p>
        </header>
        <ul className="icons major">
          <Fade left delay={500} distance="50vw">
            <li>
              <span className="icon solid fas fa-home major style1 "></span>
            </li>
          </Fade>
          <Fade top delay={1000}>
            <li>
              <span className="icon solid fas fa-hammer major style3"></span>
            </li>
          </Fade>

          <Fade right delay={500} distance="50vw">
            <li>
              <span className="icon solid fas fa-tree major style2"></span>
            </li>
          </Fade>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <Fade fraction={0.2} duration={1500}>
        <section className="spotlight">
          <div className="image">
            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h2>
              <q>
                <span className="textColor">
                  Perfect decoration and friendly{' '}
                </span>
              </q>
            </h2>

            {/* <cite>-Mrs Jones</cite> */}
          </div>
        </section>
      </Fade>
      <Fade fraction={0.2} duration={1500}>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>
              <q>
                <span className="textColor">Great Service lovely team</span>
              </q>{' '}
            </h2>

            {/* <cite>-Mrs Davis</cite> */}
          </div>
        </section>
      </Fade>
      <Fade fraction={0.2} duration={1500}>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h2>
              <q>
                <span className="textColor">
                  {' '}
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  repellendus necessitatibus explicabo ipsam quaerat id iure
                  ullam, quod quos impedit esse asperiores odio. Quia eaque
                  totam inventore ipsam, accusamus labore.
                </span>
              </q>{' '}
            </h2>

            {/* <cite>-Mrs Jones</cite> */}
          </div>
        </section>
      </Fade>
    </section>
    {/* 
    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>What we do</h2>
        </header>
        <ul className="features">
          <li className="icon solid fas fa-home ">
            <h3>Plumbing</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fas fa-tree">
            <h3>Landscaping</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fas fa-toolbox">
            <h3>Roof Maintenance</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fas fa-bath">
            <h3>Bathrooms</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fas fa-tools">
            <h3>Custom Builds</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fas fa-paint-roller">
            <h3>Painting and Decoration</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section> */}
    <section id="three" className="wrapperTouchBanner style1">
      <div className="inner">
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
             <Pulse forever duration={1500}> <Arrow className={'arrowEmail'} /> </Pulse>
            </li>
          </ul>
        </Fade>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">

        <ul className="actions stacked">
          <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name">
                Name <input type="text" name="name" />
              </label>
            </div>{' '}
            <div>
              <label htmlFor="email">
                Email <input type="email" name="email" />
              </label>
            </div>
            <div>
              <label htmlFor="message">
                Message <textarea type="text" rows="4" name="message" />
              </label>
            </div>
            <li>
              <button
                type="submit"
                className="button primary fit icon solid fa-mail-bulk"
              >
                Send
              </button>
            </li>
          </form>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
