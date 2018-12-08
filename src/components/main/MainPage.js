import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MainMenu from './MainMenu';
import BlueMagicPage from '../blueMagic/BlueMagicPage';
import LogosActionPage from '../logos/LogosActionPage';

const styles = {
  topnavbar: {
    borderRadius: 0,
    // height: 75,
    backgroundColor: '#333344',
    borderStyle: 'none',
  },
  topnav: {
    // height: 75,
    // justifyContent: 'center',
  },
  topnavitem: {
    padding: '12.5px 0px',
    // color: '#F6EEE6',
  },
  bottomnavbar: {
    borderRadius: 0,
    backgroundColor: '#333344',
    borderStyle: 'none',
  },
  bottomnavitem: {
    padding: '5px 0px',
    color: '#F6EEE6',
  },
  menudiv: {
    backgroundColor: '#333344',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#7A99AE',
    width: '100%',
    textAlign: 'center',
    // height: 400,
  },
  navmenuitem: {
    backgroundColor: '#333344',
  },
};

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      showCollapseNav: false,
      height: window.innerHeight - 135,
    };

    this.goTo = this.goTo.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.resize = this.resize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize() {
    this.setState({ height: window.innerHeight - 135 });
  }

  goTo(where) {
    if (where === '/blue' || where === '/cactpot') {
      alert("Coming soon!");
    } else {
      this.props.history.push(where);
    }
  }

  onToggle(expanded) {
    this.setState({ showCollapseNav: expanded });
  }

  openFooterLinks(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <div style={{ width: '100%', height: '100%', fontFamily: 'Ubuntu' }}>
        <Navbar fixedTop fluid style={styles.topnavbar} onToggle={this.onToggle}>
          <Navbar.Header style={{ height: 75 }}>
            <Navbar.Brand>
              <div id="titleItem" onClick={() => this.goTo('/')}>
                <div>
                  <p style={{ fontSize: 28, fontWeight: 600, fontFamily: 'Acme' }}>{'Zyphira\'s Tools'}</p>
                </div>
                <p style={{ fontSize: 12 }}>Simple FFXIV tools for complex FFXIV problems</p>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle id="menuItem" />
          </Navbar.Header>
          <Navbar.Collapse>
            { this.state.showCollapseNav ? <Nav pullRight style={styles.topnav}>
              <NavItem style={styles.topnavitem} eventKey="1" onClick={() => this.goTo('/blue')}>
                <p id="menuItem">Blue Magic Compendium</p>
              </NavItem>
              <NavItem style={styles.topnavitem} eventKey="2" onClick={() => this.goTo('/logos')}>
                <p id="menuItem">Logos Action Calculator</p>
              </NavItem>
              <NavItem style={styles.topnavitem} eventKey="3" onClick={() => this.goTo('/cactpot')}>
                <p id="menuItem">Mini Cactpot Solver</p>
              </NavItem>
            </Nav> : null }
            { !this.state.showCollapseNav ? <Nav pullRight style={styles.topnav}>
              <NavDropdown style={styles.topnavitem} eventKey="4" title="Tools" id="menuItem">
                <MenuItem eventKey="4.1" id="navDropdownItem" onClick={() => this.goTo('/blue')}>
                  <p style={{ marginBottom: 0 }}>Blue Magic Compendium</p>
                </MenuItem>
                <MenuItem eventKey="4.2" id="navDropdownItem" onClick={() => this.goTo('/logos')}>
                  <p style={{ marginBottom: 0 }}>Logos Action Calculator</p>
                </MenuItem>
                <MenuItem eventKey="4.3" id="navDropdownItem" onClick={() => this.goTo('/cactpot')}>
                  <p style={{ marginBottom: 0 }}>Mini Cactpot Solver</p>
                </MenuItem>
              </NavDropdown>
            </Nav> : null }
          </Navbar.Collapse>
        </Navbar>
        <div style={{ padding: 20, marginTop: 75, marginBottom: 60, height: this.state.height, width: '100%', overflowY: 'scroll' }}>
          <Route exact path="/" component={MainMenu} />
          { /* <Route exact path="/blue" component={BlueMagicPage} /> */ }
          <Route exact path="/logos" component={LogosActionPage} />
        </div>
        <Navbar fixedBottom fluid style={styles.bottomnavbar}>
          <Nav pullLeft>
            <NavItem style={styles.bottomnavitem} eventKey={2} href="#">
              <p style={{ fontSize: 10, color: '#fff7e6', marginTop: 10 }}>
                FINAL FANTASY XIV ©2010 - 2018 SQUARE ENIX CO., LTD. FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. All material used under license.
              </p>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem style={styles.bottomnavitem} eventKey={2} href="#">
              <a style={{ marginRight: 10 }} onClick={() => this.openFooterLinks('https://ko-fi.com/J3J5N2E9')}><img height="36" style={{ border: 0, height: 36 }} src="https://az743702.vo.msecnd.net/cdn/kofi2.png?v=0" border="0" alt="Buy Me a Coffee at ko-fi.com" /></a>
              <a onClick={() => this.openFooterLinks('https://www.twitter.com/ZyphiraZ')}><img height="36" style={{ border: 0, height: 36 }} src="../../assets/Twitter_Logo_Blue.png" border="0" alt="@ZyphiraZ on Twitter" /></a>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(App);
