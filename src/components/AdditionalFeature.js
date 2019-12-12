import React from 'react';
import { addFeature } from '../actions/carActions'
import { connect } from 'react-redux';

const AdditionalFeature = props => {

const buyItem = item => {
  props.addFeature(item)
  // dispatch an action here to add an item
}
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => buyItem(props.feature) }>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
//see explaination in added feature
const mapDispatchToProps = {
  addFeature
}

export default connect(state => state, mapDispatchToProps )(AdditionalFeature);
