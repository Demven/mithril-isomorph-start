import m from 'mithril';
import _Footer from '../Footer/Footer';

class HelloWorld {
  constructor() {
    this.title = m.prop('Hello World');
    this.subtitle = m.prop('using Mithril.js');
  }

  view() {
    const Footer = new _Footer();
    return (
      <div className="HelloWorld">
        <img className="HelloWorld__logo" src="/images/mithriljs-logo.png" alt="mithril.js logotype" />
        <h1 className="HelloWorld__title">{this.title()}</h1>
        <h3 className="HelloWorld__subtitle">{this.subtitle()}</h3>
        <Footer />
      </div>
    );
  }
}

export default HelloWorld;
