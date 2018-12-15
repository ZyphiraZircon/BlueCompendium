/* eslint-disable global-require */
import React from 'react';
import { Grid, Row, Col, Image, Tooltip, OverlayTrigger, ButtonGroup, Button, Glyphicon, DropdownButton, MenuItem } from 'react-bootstrap';

// import icon00 from '../../assets/00.png';

const styles = {
  imageStyle: {
    height: 45,
    width: 45,
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#858685',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  imageStyleHover: {
    height: 45,
    width: 45,
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
  },
  imageStyleSelected: {
    height: 45,
    width: 45,
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#ffe075',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 10,
    boxShadow: '0 0 15px #ffe075',
  },
  imageStyleFaded: {
    height: 45,
    width: 45,
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#858685',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    opacity: 0.3,
  },
  imageStyleHoverFaded: {
    height: 45,
    width: 45,
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    opacity: 0.3,
  },
  boxStyle: {
    backgroundColor: '#222122',
    borderRadius: 5,
    width: 580,
    height: 300,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
    paddingRight: 10,
    float: 'left',
  },
  boxStyle2: {
    backgroundColor: '#222122',
    borderRadius: 5,
    width: 580,
    height: 300,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
    paddingRight: 10,
    float: 'right',
    position: 'relative',
  },
  boxStyle3: {
    backgroundColor: '#222122',
    borderRadius: 5,
    width: '100%',
    height: 300,
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
    paddingRight: 10,
  },
  boxStyle4: {
    backgroundColor: '#222122',
    borderRadius: 5,
    width: '100%',
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 10,
    paddingRight: 10,
    // float: 'left',
  },
};

function dankMnemes(a,b) {
  if (a.name < b.name)
    return -1;
  if (a.name > b.name)
    return 1;
  return 0;
}

export default class LogosActionPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      actions: [
        {
          name: 'Wisdom of the Aetherweaver',
          icon: require('../../assets/icons/logos/actions/00.png'),
          description: 'Increases magic damage dealt by 60%. Lasts until cancelled.',
          uses: 3,
          tanks: false,
          healers: true,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [0],
          hover: false,
        },
        {
          name: 'Wisdom of the Martialist',
          icon: require('../../assets/icons/logos/actions/01.png'),
          description: 'Increases physical damage dealt by 40%. Lasts until cancelled.',
          uses: 3,
          tanks: true,
          healers: false,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [1],
          hover: false,
        },
        {
          name: 'Wisdom of the Platebearer',
          icon: require('../../assets/icons/logos/actions/02.png'),
          description: 'Increases defense by 3,000 and maximum HP by 50%. Lasts until cancelled.',
          uses: 3,
          tanks: false,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [2],
          hover: false,
        },
        {
          name: 'Wisdom of the Guardian',
          icon: require('../../assets/icons/logos/actions/03.png'),
          description: 'Increases defense by 1,800 and maximum HP by 10%. Lasts until cancelled.',
          uses: 3,
          tanks: true,
          healers: false,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [14],
          mnemes2: [2, 3, 3],
          hover: false,
        },
        {
          name: 'Wisdom of the Ordained',
          icon: require('../../assets/icons/logos/actions/04.png'),
          description: 'Increases maximum MP by 50% and healing magic potency by 25%. Lasts until cancelled.',
          uses: 3,
          tanks: false,
          healers: true,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [16],
          mnemes2: [0, 4, 4],
          hover: false,
        },
        {
          name: 'Wisdom of the Skirmisher',
          icon: require('../../assets/icons/logos/actions/05.png'),
          description: 'Increases damage dealt by 12%. Lasts until cancelled.',
          uses: 3,
          tanks: false,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [12],
          mnemes2: [1, 1, 1],
          hover: false,
        },
        {
          name: 'Wisdom of the Watcher',
          icon: require('../../assets/icons/logos/actions/06.png'),
          description: 'Increases evasion by 25% while reducing damage dealt by 5%. Lasts until cancelled.',
          uses: 3,
          tanks: true,
          healers: false,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [19, 19],
          hover: false,
        },
        {
          name: 'Wisdom of the Templar',
          icon: require('../../assets/icons/logos/actions/07.png'),
          description: 'Increases healing magic potency by 50% and maximum HP by 30%, while reducing damage dealt by 5%. Lasts until cancelled.',
          uses: 3,
          tanks: false,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [2, 4, 23],
          hover: false,
        },
        {
          name: 'Wisdom of the Irregular',
          icon: require('../../assets/icons/logos/actions/08.png'),
          description: 'Increases damage dealt by 21% while reducing magic defense by 60%. Lasts until cancelled.',
          uses: 3,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [1, 12, 3],
          hover: false,
        },
        {
          name: 'Wisdom of the Breathtaker',
          icon: require('../../assets/icons/logos/actions/09.png'),
          description: 'Increases poison resistance and movement speed, including mount speed, and increases evasion by 10%. Lasts until cancelled.',
          uses: 3,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [19, 19, 19],
          hover: false,
        },
        {
          name: 'Wisdom of the Remembered',
          icon: require('../../assets/icons/logos/actions/10.png'),
          description: 'Increases maximum HP by 10% and accuracy by 30% and grants a 70% chance of automatic revival upon KO. Lasts until cancelled.',
          uses: 1,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [15],
          mnemes2: [0, 1, 2],
          hover: false,
        },
        {
          name: 'Protect L',
          icon: require('../../assets/icons/logos/actions/11.png'),
          description: 'Increases the physical defense of target by 1,000 for 30m.',
          uses: '∞',
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [11],
          hover: false,
        },
        {
          name: 'Shell L',
          icon: require('../../assets/icons/logos/actions/12.png'),
          description: 'Increases the magic defense of target by 1,000 for 30m.',
          uses: '∞',
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [22],
          mnemes2: [11, 7],
          hover: false,
        },
        {
          name: 'Death L',
          icon: require('../../assets/icons/logos/actions/13.png'),
          description: 'KOs target. The less the target\'s HP, the greater the chance of success.',
          uses: 30,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [0, 8, 6],
          hover: false,
        },
        {
          name: 'Focus L',
          icon: require('../../assets/icons/logos/actions/14.png'),
          description: 'Grants a stack of Boost for 30s. Each stack increases potency of next weaponskill by 30%. Max 16 stacks. Shares a recast timer with all weaponskills.',
          uses: 99,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [12, 13],
          hover: false,
        },
        {
          name: 'Paralyze L',
          icon: require('../../assets/icons/logos/actions/15.png'),
          description: 'Afflicts target with Paralysis for 60s.',
          uses: 99,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [6],
          hover: false,
        },
        {
          name: 'Paralyze L III',
          icon: require('../../assets/icons/logos/actions/16.png'),
          description: 'Afflicts target and all neaby enemies with Paralysis for 60s.',
          uses: 20,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [6, 6, 6],
          hover: false,
        },
        {
          name: 'Swift L',
          icon: require('../../assets/icons/logos/actions/17.png'),
          description: 'Greatly increases movement speed for 10s.',
          uses: 20,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [18, 18],
          hover: false,
        },
        {
          name: 'Featherfoot L',
          icon: require('../../assets/icons/logos/actions/18.png'),
          description: 'Increases evasion by 15% for 45s.',
          uses: 50,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [18],
          mnemes2: [9, 9],
          hover: false,
        },
        {
          name: 'Spirit Dart L',
          icon: require('../../assets/icons/logos/actions/19.png'),
          description: 'Delivers a ranged attack with a potency of 1oo and afﬂicts target with spirit Dart L, increasing damage taken by 8% for 60s.',
          uses: 50,
          tanks: false,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [20],
          hover: false,
        },
        {
          name: 'Catastrophe L',
          icon: require('../../assets/icons/logos/actions/20.png'),
          description: 'Deals unaspected damage to all nearby enemies with a potency of 4,000, while dealing damage with a potency of 999,999 to self.',
          uses: 3,
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: false,
          mnemes: [20, 20, 20],
          hover: false,
        },
        {
          name: 'Dispel L',
          icon: require('../../assets/icons/logos/actions/21.png'),
          description: 'Removes one beneﬁcial status from target.',
          uses: '∞',
          tanks: false,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [21],
          mnemes2: [10, 10, 10],
          hover: false,
        },
        {
          name: 'Feint L',
          icon: require('../../assets/icons/logos/actions/22.png'),
          description: 'Delivers an attack with a potency of 100 and reduces target\'s evasion for 60s.',
          uses: '∞',
          tanks: true,
          healers: true,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [9],
          hover: false,
        },
        {
          name: 'Stealth L',
          icon: require('../../assets/icons/logos/actions/23.png'),
          description: 'Activate to become invisible and reduce movement speed by 50%. Has no effect on certain enemies with special sight. Cannot be executed while in combat.',
          uses: 50,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [19],
          hover: false,
        },
        {
          name: 'Aetherial Manipulation L',
          icon: require('../../assets/icons/logos/actions/24.png'),
          description: 'Rush to a target\'s side. unable to cast if bound.',
          uses: 99,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [1, 9, 5],
          hover: false,
        },
        {
          name: 'Backstep L',
          icon: require('../../assets/icons/logos/actions/25.png'),
          description: 'Jump 10 yalms back from current position. Cannot be executed while bound.',
          uses: 99,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [5],
          hover: false,
        },
        {
          name: 'Tranquilizer L',
          icon: require('../../assets/icons/logos/actions/26.png'),
          description: 'Stuns target for 8s',
          uses: 50,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [10],
          hover: false,
        },
        {
          name: 'Bloodbath L',
          icon: require('../../assets/icons/logos/actions/27.png'),
          description: 'Converts a portion of damage dealt into HP. Lasts 45s.',
          uses: 50,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [13],
          mnemes2: [1, 1, 4],
          hover: false,
        },
        {
          name: 'Rejuvenate L',
          icon: require('../../assets/icons/logos/actions/28.png'),
          description: 'Instantly restores 500 TP and 50% of maximum MP.',
          uses: 50,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [1, 0, 4],
          hover: false,
        },
        {
          name: 'Haymaker L',
          icon: require('../../assets/icons/logos/actions/29.png'),
          description: 'Delivers an attack with a potency of 300 and afflicts target with Slow +20%. Lasts 30s. Can only be executed immediately after evading an attack.',
          uses: 50,
          tanks: true,
          healers: false,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [1, 3, 18],
          hover: false,
        },
        {
          name: 'Rapid Recast L',
          icon: require('../../assets/icons/logos/actions/30.png'),
          description: 'Shortens recast time for next ability used by 50%. Lasts 15s.',
          uses: 50,
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [4, 7, 9],
          hover: false,
        },
        {
          name: 'Cure L',
          icon: require('../../assets/icons/logos/actions/31.png'),
          description: 'Restores target\'s HP. Cure Potency: 9,000.',
          uses: '∞',
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [4],
          hover: false,
        },
        {
          name: 'Cure L II',
          icon: require('../../assets/icons/logos/actions/32.png'),
          description: 'Restores target\'s HP. Cure Potency: 12,000.',
          uses: 50,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [17],
          mnemes2: [4, 4, 4],
          hover: false,
        },
        {
          name: 'Stoneskin L',
          icon: require('../../assets/icons/logos/actions/33.png'),
          description: 'Creates a barrier around target that absorbs damage totaling 10% of target\'s maximum HP. Lasts 30s.',
          uses: 99,
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [23],
          mnemes2: [11, 11, 11],
          hover: false,
        },
        {
          name: 'Cure L III',
          icon: require('../../assets/icons/logos/actions/34.png'),
          description: 'Restores HP of target and all party members nearby target. Cure Potency: 9,000.',
          uses: 50,
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [17, 17],
          hover: false,
        },
        {
          name: 'Regen L',
          icon: require('../../assets/icons/logos/actions/35.png'),
          description: 'Grants healing over time effect to target. Cure Potency: 2,500. Lasts 21s.',
          uses: 99,
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [4, 4, 9],
          hover: false,
        },
        {
          name: 'Esuna L',
          icon: require('../../assets/icons/logos/actions/36.png'),
          description: 'Removes a single detrimental effect from target.',
          uses: '∞',
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [7],
          hover: false,
        },
        {
          name: 'Incense L',
          icon: require('../../assets/icons/logos/actions/37.png'),
          description: 'Gesture threateningly, placing yourself at the top of a target\'s enmity list and increasing enmity generation for 15s.',
          uses: '∞',
          tanks: false,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [3],
          hover: false,
        },
        {
          name: 'Raise L',
          icon: require('../../assets/icons/logos/actions/38.png'),
          description: 'Resurrects target to a weakened state.',
          uses: 99,
          tanks: true,
          healers: false,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [8],
          hover: false,
        },
        {
          name: 'Bravery L',
          icon: require('../../assets/icons/logos/actions/39.png'),
          description: 'Increases target\'s damage dealt by 10% for 100s.',
          uses: 99,
          tanks: false,
          healers: true,
          melee: false,
          ranged: false,
          casters: true,
          mnemes: [12, 14, 16],
          hover: false,
        },
        {
          name: 'Solid Shield L',
          icon: require('../../assets/icons/logos/actions/40.png'),
          description: 'Reduces physical damage taken by 99% for 8s.',
          uses: 30,
          tanks: false,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [14, 11, 23],
          hover: false,
        },
        {
          name: 'Spell Shield L',
          icon: require('../../assets/icons/logos/actions/41.png'),
          description: 'Reduces magic damage taken by 99% for 8s.',
          uses: 30,
          tanks: false,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [14, 22, 23],
          hover: false,
        },
        {
          name: 'Reflect L',
          icon: require('../../assets/icons/logos/actions/42.png'),
          description: 'Creates a rnagic-reflecting barrier around self or party member. Lasts 10s.',
          uses: 99,
          tanks: true,
          healers: true,
          melee: true,
          ranged: true,
          casters: true,
          mnemes: [16, 11, 22],
          hover: false,
        },
        {
          name: 'Smite L',
          icon: require('../../assets/icons/logos/actions/43.png'),
          description: 'Delivers an attack with a potency of 1000 and restores an amount of own HP proportional to damage dealt. Can only be executed when your HP is below 50%.',
          uses: 30,
          tanks: true,
          healers: false,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [12, 20, 10],
          hover: false,
        },
        {
          name: 'Refresh L',
          icon: require('../../assets/icons/logos/actions/44.png'),
          description: 'Increases the amount of magia aether regenerated over time by self and nearby party members. Lasts 30s.',
          uses: 99,
          tanks: false,
          healers: true,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [0, 16, 17],
          hover: false,
        },
        {
          name: 'Banish L',
          icon: require('../../assets/icons/logos/actions/45.png'),
          description: 'Deals unaspected damage with a potency of 200 and afflicts undead targets with Banish L, increasing damage taken by 12% for 60s.',
          uses: 99,
          tanks: false,
          healers: true,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [0, 21, 21],
          hover: false,
        },
        {
          name: 'Banish L III',
          icon: require('../../assets/icons/logos/actions/46.png'),
          description: 'Deals unaspected damage with a potency of 150 to target and all nearby enemies and afﬂicts undead targets with Banish L, increasing damage taken by 12% for 60s.',
          uses: 50,
          tanks: false,
          healers: true,
          melee: false,
          ranged: false,
          casters: false,
          mnemes: [16, 21, 21],
          hover: false,
        },
        {
          name: 'Magic Burst L',
          icon: require('../../assets/icons/logos/actions/47.png'),
          description: 'Increases spell damage by 100% while increasing MP cost for 20s.',
          uses: 5,
          tanks: false,
          healers: true,
          melee: false,
          ranged: false,
          casters: true,
          mnemes: [15, 16, 23],
          hover: false,
        },
        {
          name: 'Double Edge L',
          icon: require('../../assets/icons/logos/actions/48.png'),
          description: 'Stacking buff that increases physical damage dealt by 15% and deals damage over time with potency 1200 per stack. Lasts 48s. Stacks increase every 3s. Max 16 stacks.',
          uses: 5,
          tanks: true,
          healers: false,
          melee: true,
          ranged: false,
          casters: false,
          mnemes: [12, 13, 14],
          hover: false,
        },
        {
          name: 'Eagle Eye Shot L',
          icon: require('../../assets/icons/logos/actions/49.png'),
          description: 'Delivers a ranged attack with a potency of 80. Potency increases up to 1,000% the lower the target\'s HP. Generates signiﬁcant enmity upon use.',
          uses: 20,
          tanks: false,
          healers: false,
          melee: false,
          ranged: true,
          casters: false,
          mnemes: [12, 15, 20],
          hover: false,
        },
      ],
      mnemes: [
        {
          name: 'Wisdom of the Aetherweaver',
          source: 'Conceptual Logogram',
          sourceIndex: 0,
          type: 'Offensive',
          index: 0,
          icon: require('../../assets/icons/logos/other/m00.png'),
        },
        {
          name: 'Wisdom of the Martialist',
          source: 'Conceptual Logogram',
          sourceIndex: 0,
          type: 'Offensive',
          index: 1,
          icon: require('../../assets/icons/logos/other/m00.png'),
        },
        {
          name: 'Wisdom of the Platebearer',
          source: 'Conceptual Logogram',
          sourceIndex: 0,
          type: 'Protective',
          index: 2,
          icon: require('../../assets/icons/logos/other/m01.png'),
        },
        {
          name: 'Incense L',
          source: 'Conceptual Logogram',
          sourceIndex: 0,
          type: 'Protective',
          index: 3,
          icon: require('../../assets/icons/logos/other/m01.png'),
        },
        {
          name: 'Cure L',
          source: 'Conceptual Logogram',
          sourceIndex: 0,
          type: 'Curative',
          index: 4,
          icon: require('../../assets/icons/logos/other/m02.png'),
        },
        {
          name: 'Backstep L',
          source: 'Conceptual Logogram',
          sourceIndex: 0,
          type: 'Tactical',
          index: 5,
          icon: require('../../assets/icons/logos/other/m03.png'),
        },
        {
          name: 'Paralyze L',
          source: 'Conceptual Logogram',
          sourceIndex: 0,
          type: 'Inimical',
          index: 6,
          icon: require('../../assets/icons/logos/other/m04.png'),
        },
        {
          name: 'Esuna L',
          source: 'Fundamental Logogram',
          sourceIndex: 1,
          type: 'Curative',
          index: 7,
          icon: require('../../assets/icons/logos/other/m02.png'),
        },
        {
          name: 'Raise L',
          source: 'Fundamental Logogram',
          sourceIndex: 1,
          type: 'Curative',
          index: 8,
          icon: require('../../assets/icons/logos/other/m02.png'),
        },
        {
          name: 'Feint L',
          source: 'Fundamental Logogram',
          sourceIndex: 1,
          type: 'Tactical',
          index: 9,
          icon: require('../../assets/icons/logos/other/m03.png'),
        },
        {
          name: 'Tranquilizer L',
          source: 'Fundamental Logogram',
          sourceIndex: 1,
          type: 'Inimical',
          index: 10,
          icon: require('../../assets/icons/logos/other/m04.png'),
        },
        {
          name: 'Protect L',
          source: 'Fundamental Logogram',
          sourceIndex: 1,
          type: 'Mitigative',
          index: 11,
          icon: require('../../assets/icons/logos/other/m05.png'),
        },
        {
          name: 'Wisdom of the Skirmisher',
          source: 'Offensive Logogram',
          sourceIndex: 2,
          type: 'Offensive',
          index: 12,
          icon: require('../../assets/icons/logos/other/m00.png'),
        },
        {
          name: 'Bloodbath L',
          source: 'Offensive Logogram',
          sourceIndex: 2,
          type: 'Offensive',
          index: 13,
          icon: require('../../assets/icons/logos/other/m00.png'),
        },
        {
          name: 'Wisdom of the Guardian',
          source: 'Protective Logogram',
          sourceIndex: 3,
          type: 'Protective',
          index: 14,
          icon: require('../../assets/icons/logos/other/m01.png'),
        },
        {
          name: 'Wisdom of the Remembered',
          source: 'Protective Logogram',
          sourceIndex: 3,
          type: 'Protective',
          index: 15,
          icon: require('../../assets/icons/logos/other/m01.png'),
        },
        {
          name: 'Wisdom of the Ordained',
          source: 'Curative Logogram',
          sourceIndex: 4,
          type: 'Curative',
          index: 16,
          icon: require('../../assets/icons/logos/other/m02.png'),
        },
        {
          name: 'Cure L II',
          source: 'Curative Logogram',
          sourceIndex: 4,
          type: 'Curative',
          index: 17,
          icon: require('../../assets/icons/logos/other/m02.png'),
        },
        {
          name: 'Featherfoot L',
          source: 'Tactical Logogram',
          sourceIndex: 5,
          type: 'Tactical',
          index: 18,
          icon: require('../../assets/icons/logos/other/m03.png'),
        },
        {
          name: 'Stealth L',
          source: 'Tactical Logogram',
          sourceIndex: 5,
          type: 'Tactical',
          index: 19,
          icon: require('../../assets/icons/logos/other/m03.png'),
        },
        {
          name: 'Spirit Dart L',
          source: 'Inimical Logogram',
          sourceIndex: 6,
          type: 'Inimical',
          index: 20,
          icon: require('../../assets/icons/logos/other/m04.png'),
        },
        {
          name: 'Dispel L',
          source: 'Inimical Logogram',
          sourceIndex: 6,
          type: 'Inimical',
          index: 21,
          icon: require('../../assets/icons/logos/other/m04.png'),
        },
        {
          name: 'Shell L',
          source: 'Mitigative Logogram',
          sourceIndex: 7,
          type: 'Mitigative',
          index: 22,
          icon: require('../../assets/icons/logos/other/m05.png'),
        },
        {
          name: 'Stoneskin L',
          source: 'Mitigative Logogram',
          sourceIndex: 7,
          type: 'Mitigative',
          index: 23,
          icon: require('../../assets/icons/logos/other/m05.png'),
        },
      ],
      logograms: [
        {
          name: 'Conceptual Logogram',
          icon: require('../../assets/icons/logos/other/l01.png'),
          source: 'Killing elemental sprites; current or higher level',
          source2: 'Bronze bunny chests',
        },
        {
          name: 'Fundamental Logogram',
          icon: require('../../assets/icons/logos/other/l02.png'),
          source: 'EXP Chain of 30 or more',
          source2: 'Bronze bunny chests',
        },
        {
          name: 'Offensive Logogram',
          icon: require('../../assets/icons/logos/other/l03.png'),
          source: 'Gold bunny chests',
        },
        {
          name: 'Protective Logogram',
          icon: require('../../assets/icons/logos/other/l03.png'),
          source: 'Glaukopis (NM)',
          source2: 'Gold bunny chests',
        },
        {
          name: 'Curative Logogram',
          icon: require('../../assets/icons/logos/other/l03.png'),
          source: 'Graffiacane/Leucosia (NM)',
          source2: 'Silver bunny chests',
        },
        {
          name: 'Tactical Logogram',
          icon: require('../../assets/icons/logos/other/l03.png'),
          source: 'Heat-warped lockboxes',
        },
        {
          name: 'Inimical Logogram',
          icon: require('../../assets/icons/logos/other/l03.png'),
          source: 'Sophist/Ying-Yang/Eldthurs (NM)',
          source2: 'Killing elemental sprites; level 50+ and adaption',
        },
        {
          name: 'Mitigative Logogram',
          icon: require('../../assets/icons/logos/other/l03.png'),
          source: 'Killing undead; adaption',
          source2: 'Gold bunny chests',
        },
      ],
      selectedAction: -1,
      neededLogograms: [],
      ownMnemes: [],
      page: 'collection',
    };

    this.logosActionMouseEnter = this.logosActionMouseEnter.bind(this);
    this.logosActionMouseLeave = this.logosActionMouseLeave.bind(this);
    this.setActive = this.setActive.bind(this);
    this.calculateNeededLogograms = this.calculateNeededLogograms.bind(this);
    this.changePage = this.changePage.bind(this);
    this.addToOwnMnemes = this.addToOwnMnemes.bind(this);
    this.bigCalculate = this.bigCalculate.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.clearAllOwnMnemes = this.clearAllOwnMnemes.bind(this);
  }

  logosActionMouseEnter(index) {
    // alert(index);
    const actions = JSON.parse(JSON.stringify(this.state.actions));
    for (let i = 0; i < actions.length; i++) {
      if (i === index) {
        actions[i].hover = true;
      } else {
        actions[i].hover = false;
      }
    }
    this.setState({ actions });
  }

  logosActionMouseLeave(index) {
    // alert(index);
    const actions = JSON.parse(JSON.stringify(this.state.actions));
    for (let i = 0; i < actions.length; i++) {
      actions[i].hover = false;
    }
    this.setState({ actions });
  }

  setActive(index) {
    let trueIndex = index;
    if (trueIndex === this.state.selectedAction) {
      trueIndex = -1;
    }
    this.setState({ selectedAction: trueIndex }, this.calculateNeededLogograms);
  }

  calculateNeededLogograms() {
    if (this.state.selectedAction > -1) {
      const activeAction = this.state.actions[this.state.selectedAction];
      const neededLogograms = [];
      if (activeAction.mnemes) {
        for (let i = 0; i < activeAction.mnemes.length; i++) {
          const mnemeNumber = activeAction.mnemes[i];
          if (neededLogograms.indexOf(this.state.mnemes[mnemeNumber].sourceIndex) === -1) {
            neededLogograms.push(this.state.mnemes[mnemeNumber].sourceIndex);
          }
        }
      }
      if (activeAction.mnemes2) {
        for (let j = 0; j < activeAction.mnemes2.length; j++) {
          const mnemeNumber = activeAction.mnemes2[j];
          if (neededLogograms.indexOf(this.state.mnemes[mnemeNumber].sourceIndex) === -1) {
            neededLogograms.push(this.state.mnemes[mnemeNumber].sourceIndex);
          }
        }
      }
      this.setState({ neededLogograms });
    }
  }

  changePage(name) {
    this.setState({ page: name });
  }

  addToOwnMnemes(mneme) {
    const currentOwnMnemes = JSON.parse(JSON.stringify(this.state.ownMnemes));
    let foundInOwnMnemes = false;
    for (let iter = 0; iter < currentOwnMnemes.length; iter++) {
      if (currentOwnMnemes[iter].index === mneme.index) {
        foundInOwnMnemes = true;
        currentOwnMnemes[iter].quantity += 1;
      }
    }
    if (!foundInOwnMnemes) {
      currentOwnMnemes.push({
        index: mneme.index,
        quantity: 1,
      });
    }
    this.setState({ ownMnemes: currentOwnMnemes }, this.bigCalculate);
  }

  bigCalculate() {
    const currentOwnMnemes = JSON.parse(JSON.stringify(this.state.ownMnemes));
    const currentActions = JSON.parse(JSON.stringify((this.state.actions)));

    for (let i = 0; i < currentActions.length; i++) {
      let weHaveAMatch = false;
      if (currentActions[i].mnemes) {
        const simplifiedMnemeArray = [];
        for (let j = 0; j < currentActions[i].mnemes.length; j++) {
          let foundInSimplified = false;
          for (let k = 0; k < simplifiedMnemeArray.length; k++) {
            if (simplifiedMnemeArray[k].index === currentActions[i].mnemes[j]) {
              simplifiedMnemeArray[k].quantity += 1;
              foundInSimplified = true;
            }
          }
          if (!foundInSimplified) {
            simplifiedMnemeArray.push({
              index: currentActions[i].mnemes[j],
              quantity: 1,
            });
          }
        }
        console.log(currentActions[i].name + ' ' + JSON.stringify(simplifiedMnemeArray) + ' ' + currentActions[i].mnemes);
        let howManyFound = 0;
        for (let l = 0; l < simplifiedMnemeArray.length; l++) {
          for (let m = 0; m < currentOwnMnemes.length; m++) {
            if (simplifiedMnemeArray[l].index === currentOwnMnemes[m].index && simplifiedMnemeArray[l].quantity <= currentOwnMnemes[m].quantity) {
              howManyFound += 1;
            }
          }
        }
        if (howManyFound === simplifiedMnemeArray.length) {
          weHaveAMatch = true;
        }
      }
      if (currentActions[i].mnemes2) {
        const simplifiedMnemeArray = [];
        for (let j = 0; j < currentActions[i].mnemes2.length; j++) {
          let foundInSimplified = false;
          for (let k = 0; k < simplifiedMnemeArray.length; k++) {
            if (simplifiedMnemeArray[k].index === currentActions[i].mnemes2[j]) {
              simplifiedMnemeArray[k].quantity += 1;
              foundInSimplified = true;
            }
          }
          if (!foundInSimplified) {
            simplifiedMnemeArray.push({
              index: currentActions[i].mnemes2[j],
              quantity: 1,
            });
          }
        }
        let howManyFound = 0;
        for (let l = 0; l < simplifiedMnemeArray.length; l++) {
          for (let m = 0; m < currentOwnMnemes.length; m++) {
            if (simplifiedMnemeArray[l].index === currentOwnMnemes[m].index && simplifiedMnemeArray[l].quantity <= currentOwnMnemes[m].quantity) {
              howManyFound += 1;
            }
          }
        }
        if (howManyFound === simplifiedMnemeArray.length) {
          weHaveAMatch = true;
        }
      }
      if (weHaveAMatch) {
        currentActions[i].canMake = true;
      } else {
        currentActions[i].canMake = false;
      }
    }
    this.setState({ actions: currentActions });
  }

  changeQuantity(index, interval) {
    const currentOwnMnemes = JSON.parse(JSON.stringify(this.state.ownMnemes));
    if (currentOwnMnemes[index].quantity + interval === 0) {
      currentOwnMnemes.splice(index, 1);
    } else {
      currentOwnMnemes[index].quantity += interval;
    }
    this.setState({ ownMnemes: currentOwnMnemes }, this.bigCalculate);
  }

  clearAllOwnMnemes() {
    this.setState({ ownMnemes: [] }, this.bigCalculate);
  }

  render() {
    return (
      <div id="logosPage">
        <Grid style={{ marginBottom: 20 }}>
          <Row>
            <Col xs={8} xsOffset={2}>
              <p style={{ textAlign: 'center', fontSize: 32, fontWeight: '600' }}>Logos Action Calculator</p>
            </Col>
          </Row>
        </Grid>
        <Row style={{ marginBottom: 20 }}>
          <Col xs={12} sm={4} smOffset={4}>
            <ButtonGroup style={{ width: '100%' }}>
              <Button style={{ width: '50%', fontSize: 12 }} active={this.state.page === 'collection'} onClick={() => this.changePage('collection')}>Collection Completion</Button>
              <Button style={{ width: '50%', fontSize: 12 }} active={this.state.page === 'recipe'} onClick={() => this.changePage('recipe')}>What Actions Can I Make?</Button>
            </ButtonGroup>
          </Col>
        </Row>
        { this.state.page === 'collection' ? <div>
          <Row style={{ marginLeft: 10, marginRight: 10 }}>
            <Col xs={12} sm={6}>
              <p style={{ textAlign: 'center', fontSize: 24, fontWeight: '600', width: '100%' }}>Action List</p>
              <div style={styles.boxStyle4}>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(0, 10).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={this.state.selectedAction === i ? styles.imageStyleSelected : spell.hover ? styles.imageStyleHover : styles.imageStyle} src={spell.icon} rounded onMouseEnter={() => this.logosActionMouseEnter(i)} onMouseLeave={() => this.logosActionMouseLeave(i)} onClick={() => this.setActive(i)} />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(10, 20).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={this.state.selectedAction === i + 10 ? styles.imageStyleSelected : spell.hover ? styles.imageStyleHover : styles.imageStyle} src={spell.icon} rounded onMouseEnter={() => this.logosActionMouseEnter(i + 10)} onMouseLeave={() => this.logosActionMouseLeave(i + 10)} onClick={() => this.setActive(i + 10)} />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(20, 30).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={this.state.selectedAction === i + 20 ? styles.imageStyleSelected : spell.hover ? styles.imageStyleHover : styles.imageStyle} src={spell.icon} rounded onMouseEnter={() => this.logosActionMouseEnter(i + 20)} onMouseLeave={() => this.logosActionMouseLeave(i + 20)} onClick={() => this.setActive(i + 20)} />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(30, 40).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={this.state.selectedAction === i + 30 ? styles.imageStyleSelected : spell.hover ? styles.imageStyleHover : styles.imageStyle} src={spell.icon} rounded onMouseEnter={() => this.logosActionMouseEnter(i + 30)} onMouseLeave={() => this.logosActionMouseLeave(i + 30)} onClick={() => this.setActive(i + 30)} />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                  { this.state.actions.slice(40, 50).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={this.state.selectedAction === i + 40 ? styles.imageStyleSelected : spell.hover ? styles.imageStyleHover : styles.imageStyle} src={spell.icon} rounded onMouseEnter={() => this.logosActionMouseEnter(i + 40)} onMouseLeave={() => this.logosActionMouseLeave(i + 40)} onClick={() => this.setActive(i + 40)} />
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <p style={{ textAlign: 'center', fontSize: 24, fontWeight: '600', width: '100%' }}>Required Logograms</p>
              <div style={styles.boxStyle4}>
                <Row style={{ height: 20, marginBottom: 19 }}>
                  { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].name ? <p style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: '#fff7e6' }}>{this.state.actions[this.state.selectedAction].name}</p> : null }
                </Row>
                <div>
                  <Row style={{ height: 70 }}>
                    { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].mnemes && this.state.actions[this.state.selectedAction].mnemes[0] !== undefined
                      ? <Col xs={12} sm={6} style={{ paddingLeft: 40 }}>
                        <div>
                          <div style={{ float: 'left' }}>
                            <Image style={styles.imageStyle} src={this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[0]].icon} rounded />
                          </div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5 }}>
                            <p>
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[0]].name}</span>
                              <br />
                              <span style={{ color: '#777777', fontSize: 10, fontWeight: '600' }}>Source: {this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[0]].source}</span>
                            </p>
                          </div>
                        </div>
                      </Col> : <Col xs={12} sm={6} /> }
                    { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].mnemes2 && this.state.actions[this.state.selectedAction].mnemes2[0] !== undefined
                      ? <Col xs={12} sm={6} style={{ paddingLeft: 40 }}>
                        <div>
                          <div style={{ float: 'left' }}>
                            <Image style={styles.imageStyle} src={this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[0]].icon} rounded />
                          </div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5 }}>
                            <p>
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[0]].name}</span>
                              <br />
                              <span style={{ color: '#777777', fontSize: 10, fontWeight: '600' }}>Source: {this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[0]].source}</span>
                            </p>
                          </div>
                        </div>
                      </Col> : <Col xs={12} sm={6} /> }
                  </Row>
                  <Row style={{ height: 70 }}>
                    { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].mnemes && this.state.actions[this.state.selectedAction].mnemes[1] !== undefined
                      ? <Col xs={12} sm={6} style={{ paddingLeft: 40 }}>
                        <div>
                          <div style={{ float: 'left' }}>
                            <Image style={styles.imageStyle} src={this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[1]].icon} rounded />
                          </div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5 }}>
                            <p>
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[1]].name}</span>
                              <br />
                              <span style={{ color: '#777777', fontSize: 10, fontWeight: '600' }}>Source: {this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[1]].source}</span>
                            </p>
                          </div>
                        </div>
                      </Col> : <Col xs={12} sm={6} /> }
                    { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].mnemes2 && this.state.actions[this.state.selectedAction].mnemes2[1] !== undefined
                      ? <Col xs={12} sm={6} style={{ paddingLeft: 40 }}>
                        <div>
                          <div style={{ float: 'left' }}>
                            <Image style={styles.imageStyle} src={this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[1]].icon} rounded />
                          </div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5 }}>
                            <p>
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[1]].name}</span>
                              <br />
                              <span style={{ color: '#777777', fontSize: 10, fontWeight: '600' }}>Source: {this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[1]].source}</span>
                            </p>
                          </div>
                        </div>
                      </Col> : <Col xs={12} sm={6} /> }
                  </Row>
                  <Row style={{ height: 70 }}>
                    { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].mnemes && this.state.actions[this.state.selectedAction].mnemes[2] !== undefined
                      ? <Col xs={12} sm={6} style={{ paddingLeft: 40 }}>
                        <div>
                          <div style={{ float: 'left' }}>
                            <Image style={styles.imageStyle} src={this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[2]].icon} rounded />
                          </div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5 }}>
                            <p>
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[2]].name}</span>
                              <br />
                              <span style={{ color: '#777777', fontSize: 10, fontWeight: '600' }}>Source: {this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes[2]].source}</span>
                            </p>
                          </div>
                        </div>
                      </Col> : <Col xs={12} sm={6} /> }
                    { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].mnemes2 && this.state.actions[this.state.selectedAction].mnemes2[2] !== undefined
                      ? <Col xs={12} sm={6} style={{ paddingLeft: 40 }}>
                        <div>
                          <div style={{ float: 'left' }}>
                            <Image style={styles.imageStyle} src={this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[2]].icon} rounded />
                          </div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5 }}>
                            <p>
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[2]].name}</span>
                              <br />
                              <span style={{ color: '#777777', fontSize: 10, fontWeight: '600' }}>Source: {this.state.mnemes[this.state.actions[this.state.selectedAction].mnemes2[2]].source}</span>
                            </p>
                          </div>
                        </div>
                      </Col> : <Col xs={12} sm={6} /> }
                  </Row>
                </div>
                { this.state.actions[this.state.selectedAction] && this.state.actions[this.state.selectedAction].mnemes2 ? <div style={{ position: 'absolute', top: '50%', left: '48%' }}>
                  <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '600' }}>OR</p>
                </div> : null }
              </div>
            </Col>
          </Row>
          <Row style={{ height: 30 }}>
          </Row>
          <Row style={{ marginLeft: 10, marginRight: 10 }}>
            <Col xs={12} sm={6} smOffset={3}>
              <p style={{ textAlign: 'center', fontSize: 24, fontWeight: '600', width: '100%' }}>Recommended Logograms to Farm</p>
              <div style={styles.boxStyle3}>
                { this.state.neededLogograms.map((logogram, i) => (
                  <Row key={i} style={{ height: 100, padding: 15 }}>
                    <Col xs={6}>
                      <div>
                        <div style={{ float: 'left' }}>
                          <Image style={styles.imageStyle} src={this.state.logograms[logogram].icon} rounded />
                        </div>
                        <div style={{ marginLeft: 3, marginTop: 13, marginBottom: 17, float: 'left', alignItems: 'center', justifyContent: 'center' }}>
                          <p>
                            <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.logograms[logogram].name}</span>
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col xs={6}>
                      <div>
                        <p>
                          <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>• {this.state.logograms[logogram].source}</span>
                          { this.state.logograms[logogram].source2 ? <br /> : null }
                          { this.state.logograms[logogram].source2 ? <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>• {this.state.logograms[logogram].source2}</span> : null }
                        </p>
                      </div>
                    </Col>
                  </Row>
                ))}
              </div>
            </Col>
          </Row>
        </div> : null }






        { this.state.page === 'recipe' ? <div>
          <Row style={{ marginLeft: 10, marginRight: 10 }}>
            <Col xs={12} sm={6}>
              <p style={{ textAlign: 'center', fontSize: 24, fontWeight: '600', width: '100%' }}>Logograms You Own</p>
              <div style={styles.boxStyle4}>
                <div>
                  <Row style={{ height: 80, marginTop: 20 }}>
                    <p style={{ textAlign: 'center' }}>
                      <DropdownButton
                        title={'Add Logogram'}
                        id={'dropdown-basic-1'}
                      >
                        { JSON.parse(JSON.stringify(this.state.mnemes)).sort(dankMnemes).map((mneme, i) => (
                          <MenuItem eventKey={i} onClick={() => this.addToOwnMnemes(mneme)}><span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>{mneme.name}</span></MenuItem>
                        ))}
                        <MenuItem></MenuItem>
                      </DropdownButton>
                      <Button style={{ marginLeft: 10 }} onClick={this.clearAllOwnMnemes}>Clear All</Button>
                    </p>
                  </Row>
                  { this.state.ownMnemes.map((mneme, i) => (
                    <Row style={{ height: 80 }}>
                      <Col xs={8} sm={6} smOffset={2}>
                        <div>
                          <div style={{ float: 'left' }}>
                            <Image style={styles.imageStyle} src={this.state.mnemes[mneme.index].icon} rounded />
                          </div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5 }}>
                            <p>
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>{this.state.mnemes[mneme.index].name}</span>
                              <br />
                              <span style={{ color: '#fff7e6', fontSize: 12, fontWeight: '600' }}>x{mneme.quantity}</span>
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} sm={4}>
                        <div>
                          <div style={{ marginLeft: 3, float: 'left', paddingTop: 5, textAlign: 'center' }}>
                            <p>
                              <span id="clickToAdd" style={{ cursor: 'pointer', fontSize: 20, fontWeight: '600' }} onClick={() => this.changeQuantity(i, 1)}><Glyphicon glyph="plus" /></span>
                              <span id="clickToAdd" style={{ cursor: 'pointer', fontSize: 20, fontWeight: '600', marginLeft: 10 }} onClick={() => this.changeQuantity(i, -1)}><Glyphicon glyph="minus" /></span>
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  ))}
                </div>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <p style={{ textAlign: 'center', fontSize: 24, fontWeight: '600', width: '100%' }}>Actions You Can Make</p>
              <div style={styles.boxStyle4}>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(0, 10).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={spell.canMake ? styles.imageStyle : styles.imageStyleFaded} src={spell.icon} rounded  />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(10, 20).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={spell.canMake ? styles.imageStyle : styles.imageStyleFaded} src={spell.icon} rounded  />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(20, 30).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={spell.canMake ? styles.imageStyle : styles.imageStyleFaded} src={spell.icon} rounded  />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ marginBottom: 6, textAlign: 'center' }}>
                  { this.state.actions.slice(30, 40).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={spell.canMake ? styles.imageStyle : styles.imageStyleFaded} src={spell.icon} rounded  />
                    </OverlayTrigger>
                  ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                  { this.state.actions.slice(40, 50).map((spell, i) => (
                    <OverlayTrigger
                      overlay={
                        (
                          <Tooltip id="tooltip" className="my-tooltip" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                            <div>
                              <p style={{ color: '#fff7e6', fontSize: 16, fontWeight: '600' }}>{spell.name}</p>
                              <p style={{ color: '#fff7e6', fontSize: 10, fontWeight: '400' }}>{spell.description}</p>
                              <p>
                                { spell.tanks ? <span style={{ color: '#7c93e8', fontSize: 10, fontWeight: '400' }}>WAR PLD DRK </span> : null }
                                { spell.melee ? <span style={{ color: '#ffb682', fontSize: 10, fontWeight: '400' }}>MNK DRG NIN SAM </span> : null }
                                { spell.ranged ? <span style={{ color: '#ff7d72', fontSize: 10, fontWeight: '400' }}>BRD MCH </span> : null }
                                { spell.casters ? <span style={{ color: '#d571a4', fontSize: 10, fontWeight: '400' }}>BLM SMN RDM </span> : null }
                                { spell.healers ? <span style={{ color: '#98ffb7', fontSize: 10, fontWeight: '400' }}>WHM SCH AST </span> : null }
                              </p>
                              <p style={{ color: '#fff7e6', fontSize: 12, fontWeight: '400' }}>Uses: {spell.uses}</p>
                            </div>
                          </Tooltip>
                        )
                      }
                      placement="top"
                    >
                      <Image key={i} style={spell.canMake ? styles.imageStyle : styles.imageStyleFaded} src={spell.icon} rounded  />
                    </OverlayTrigger>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </div> : null }
        <div style={{ height: 100 }} />
      </div>
    );
  }
}
