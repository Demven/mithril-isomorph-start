import m from 'mithril';

class Footer {
  view() {
    return (
      <footer className="Footer">
        <a onclick={() => m.route('/')} className="Footer__link">Hello World</a><br />
        <a onclick={() => m.route('/todo')} className="Footer__link">ToDo</a>
      </footer>
    );
  }
}

export default Footer;
