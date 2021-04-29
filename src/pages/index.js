import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01_.jpg';
import pic2 from '../assets/images/pic02_.jpg';
import pic3 from '../assets/images/pic03_.jpg';
// import config from '../../config';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <StaticImage
          src="../assets/img/logo2.png"
          placeholder="blurred"
          width={400}
        />

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
        <a href="#one" className="more"></a>
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
          <li>
            <span className="icon solid fas fa-home major style1 "></span>
          </li>
          <li>
            <span className="icon solid fas fa-hammer major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
          <li>
            <span className="icon solid fas fa-tree major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            <q>gr8 bloke, nhs saved me mum</q>
          </h2>

          <p>-Mrs Jones</p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            <q>
              Worked with another hansome man on my patio but the older one on
              the digger kept swearing
            </q>
          </h2>

          <cite>-Mrs Davis</cite>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            <q>gr8 bloke, nhs saved me mum</q>
          </h2>

          <p>-Mrs Jones</p>
        </div>
      </section>
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

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Get in touch</h2>
        </header>

        <ul className="actions stacked">
          <form>
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
                Message <textarea type="text" rows="4"  name="message" />
              </label>
            </div>
          </form>
          <li>
            <button
              type="submit"
              className="button primary fit icon solid fa-mail-bulk"
            >
              Send
            </button>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
