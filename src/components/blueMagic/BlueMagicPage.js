import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class BlueMagicPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      spells: [
        {
          name: 'Bad Breath',
          genus: 'Morbol',
          spellEffect: 'This is what the spell does.',
          additionalEffect1: 'The spell also does this.',
          additionalEffect2: '',
          duration: 20,
          range: 5,
          radius: 0,
          potency: 100,
          cast: 2.5,
          recast: 2.5,
          actionType: 'Spell',
          element: 'Earth',
          icon: '',
          levelRequirement: 40,
        },
        {
          name: '1000 Needles',
          genus: 'Cactuar',
          spellEffect: 'This is what the spell does.',
          additionalEffect1: '',
          additionalEffect2: '',
          duration: 0,
          range: 5,
          radius: 0,
          potency: 1000,
          cast: 2.5,
          recast: 2.5,
          actionType: 'Spell',
          element: 'Physical',
          icon: '',
          levelRequirement: 25,
        },
        {
          name: 'Glass Dance',
          genus: 'Shiva',
          spellEffect: 'This is what the spell does.',
          additionalEffect1: 'The spell also does this.',
          additionalEffect2: '',
          duration: 0,
          range: 5,
          radius: 10,
          potency: 500,
          cast: 2.5,
          recast: 2.5,
          actionType: 'Spell',
          element: 'Ice',
          icon: '',
          levelRequirement: 50,
        },
      ],
      monsters: [
        {
          genus: 'Morbol',
          class: 'Seedkin',
          kingdom: 'Bloodless',
          locations: [
            {
              monster: 'Morbol',
              zone: 'East Shroud',
              region: 'Larkscall',
              pos: '(X: 23 Y: 21)',
              level: 48,
              type: 'map',
            },
            {
              monster: 'Morbol',
              zone: 'Mor Dhona',
              region: 'Fogfens',
              pos: '(X: 15 Y: 14)',
              level: 44,
              type: 'map',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div id="blueMagePage">
        <Grid style={{ marginBottom: 20 }}>
          <Row>
            <Col xs={8} xsOffset={2}>
              <p style={{ textAlign: 'center', fontSize: 32, fontWeight: '600' }}>Blue Magic Compendium</p>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={2}>
              <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>Icon</p>
            </Col>
            <Col xs={2}>
              <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>Spell Name</p>
            </Col>
            <Col xs={2}>
              <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>Gained From</p>
            </Col>
            <Col xs={4}>
              <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>Spell Effect</p>
            </Col>
            <Col xs={2}>
              <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>Elemental Affinity</p>
            </Col>
          </Row>
          { this.state.spells.map((spell, i) => (
            <Row key={i} style={{ backgroundColor: '#333344', color: '#fff7e6', borderRadius: 10, borderStyle: 'solid', borderWidth: 2, borderColor: '#7A99AE', paddingTop: 10, paddingBottom: 10 }}>
              <Col xs={2}>
              </Col>
              <Col xs={2}>
                <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>{spell.name}</p>
              </Col>
              <Col xs={2}>
                <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>{spell.genus}</p>
                <p style={{ textAlign: 'center', fontSize: 10, fontWeight: '400' }}>(Click for location details)</p>
              </Col>
              <Col xs={4}>
                <p style={{ textAlign: 'center', fontSize: 10, fontWeight: '400' }}>{spell.spellEffect}</p>
                { spell.additionalEffect1 ? <p style={{ textAlign: 'center', fontSize: 10, fontWeight: '400' }}><span style={{ color: '#33cc33' }}>Additional Effect: </span>{spell.additionalEffect1}</p> : null }
              </Col>
              <Col xs={2}>
                <p style={{ textAlign: 'center', fontSize: 14, fontWeight: '600' }}>{spell.element}</p>
              </Col>
            </Row>
          ))}
        </Grid>
      </div>
    );
  }
}
