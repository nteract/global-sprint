import Host from "../host.md";
import Lead from "../lead.md";
import Participate from "../participate.md";

const Hero = ({ children }) => {
  return (
    <div className="hero-section">
      {children}
      <style jsx>{`
        .hero-section {
          background-color: hsl(182, 43%, 89%);
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

const colors = ["#e7e7e7", "#d7d7d7"];

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
          <h1>nteract global sprint</h1>
        </Hero>
        <Sections>
          <Participate />
          <Lead />
          <Host />
        </Sections>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            font-family: "Nunito", sans-serif;
          }
        `}</style>
      </div>
    );
  }
}
export default Index;
