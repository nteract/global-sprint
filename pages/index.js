import Host from "../host.md";
import Lead from "../lead.md";
import Participate from "../participate.md";

import Scrollspy from "react-scrollspy";

const Hero = ({ children }) => {
  return (
    <div className="hero-section">
      {children}
      <style jsx>{`
        .hero-section {
          background-color: #ff598f;
          background-size: cover;
          height: 40vh;
          text-align: center;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

const Section = ({ children, color }) => (
  <div className="section">
    {children}
    <style jsx>{`
      .section {
        background-color: ${color};
        padding: 1em;
      }
    `}</style>
  </div>
);

// hero: #ff
const colors = [
  // "#ff598f", // HERO
  // "#fd8a5e", // NAV
  "#e0e300",
  "#01dddd",
  "#00bfaf"
];

const Nav = ({ sticky }) => {
  return (
    <nav className={sticky ? "alt" : ""}>
      <Scrollspy
        items={["participate", "lead", "host"]}
        currentClassName="is-current"
      >
        <li>
          <a href="#participate">participate</a>
        </li>
        <li>
          <a href="#lead">lead</a>
        </li>
        <li>
          <a href="#host">host</a>
        </li>
      </Scrollspy>
      <style jsx>{`
        nav {
          background-color: #fd8a5e;
          margin: 0 auto;
        }
        :global(ul) {
          margin: 0 auto;
          list-style: none;
        }

        li {
          -moz-transition: margin 0.2s ease;
          -webkit-transition: margin 0.2s ease;
          -ms-transition: margin 0.2s ease;
          transition: margin 0.2s ease;
          display: inline-block;
          margin: 0 0.35em;
          padding: 0;
          vertical-align: middle;

          margin: 0 0.175em;
        }
        a {
          -moz-transition: font-size 0.2s ease;
          -webkit-transition: font-size 0.2s ease;
          -ms-transition: font-size 0.2s ease;
          transition: font-size 0.2s ease;
          display: inline-block;
          height: 2.25em;
          line-height: 2.25em;
          padding: 0 1.25em;
          border: 0;
          border-radius: 8px;
          box-shadow: inset 0 0 0 1px transparent;

          text-decoration: none;
          color: inherit;
        }
      `}</style>
    </nav>
  );
};

const Sections = ({ children }) =>
  React.Children.map(children, (child, idx) => (
    <Section color={colors[idx % colors.length]}>{child}</Section>
  ));

/**
 * <link href="https://fonts.googleapis.com/css?family=Nunito:300,300i,400,400i,600,700" rel="stylesheet">
 * @return {[type]} [description]
 */

class Index extends React.Component {
  componentDidMount() {
    // Load fuller suite of fonts now
    var WebFont = require("webfontloader");

    WebFont.load({
      google: {
        families: [
          // Nunito in all flavors of bold and italic
          "Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        ]
      }
    });
  }

  render() {
    return (
      <div>
        <Hero>
          <header>
            <h1>nteract global sprint</h1>
          </header>
        </Hero>
        <Nav />
        <Sections>
          <div id="participate">
            <Participate />
          </div>
          <div id="lead">
            <Lead />
          </div>
          <div id="host">
            <Host />
          </div>
        </Sections>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: "Nunito", sans-serif;
            color: black;
            /* color: rgb(99, 99, 99); */
          }
        `}</style>
      </div>
    );
  }
}

export default Index;
