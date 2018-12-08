import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const styles = {
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
  containerdiv: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
};


class MainMenu extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
    };
    this.goTo = this.goTo.bind(this);
  }

  goTo(where) {
    if (where === '/blue' || where === '/cactpot') {
      alert("Coming soon!");
    } else {
      this.props.history.push(where);
    }
  }

  render() {
    return (
      <div style={styles.containerdiv}>
        <Row>
          <Col xs={10} xsOffset={1} sm={8} smOffset={2}>
            <div style={styles.menudiv}>
              <div id="mainMenuLink" style={{ cursor: 'pointer', width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} onClick={() => this.goTo('/blue')}>
                <p style={{ fontSize: 28, marginBottom: 0 }}>Blue Magic Compendium</p>
              </div>
              <div id="mainMenuLink" style={{ cursor: 'pointer', width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} onClick={() => this.goTo('/logos')}>
                <p style={{ fontSize: 28, marginBottom: 0 }}>Logos Action Calculator</p>
              </div>
              <div id="mainMenuLink" style={{ cursor: 'pointer', width: '100%', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 7 }} onClick={() => this.goTo('/cactpot')}>
                <p style={{ fontSize: 28, marginBottom: 0 }}>Mini Cactpot Solver</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(MainMenu);
