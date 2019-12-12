import React from 'react';
import { removeFeature } from '../actions/carActions';
import { connect } from 'react-redux';

//--------------({ removeFeature, dispatch })
const AddedFeature = props => {
  const removeFeature = item => {
// mapDispatchToProps below allows me to write this
    props.removeFeature(item)
//dispatch(removeFeature(item))
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"onClick={() => removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};
//used so as short cut to props.dispatch(actionName()) 
const mapDispatchToProps = {
  removeFeature
}
//feeding redux store into component
export default connect(state => state, mapDispatchToProps) (AddedFeature);
//used for connecting "container components" to store

