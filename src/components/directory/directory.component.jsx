import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component'
import {selectDirecotySection} from '../../redux/directory/directory.selectors';

const directory = ({sections}) => (

  <div className='directory-menu'>
      {sections.map(({id, ...otherSectionProps}) => (
          <MenuItem key={id} {...otherSectionProps}/>
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirecotySection
})

export default connect(mapStateToProps)(directory);