/* @flow */

import { connect } from 'react-redux';
import ActivityBar from '../components/ActivityBar';

const mapStateToProps = state => ({
  active: state.ui.active,
});

const ActivityBarContainer = connect(
  mapStateToProps,
)(ActivityBar);

export default ActivityBarContainer;
