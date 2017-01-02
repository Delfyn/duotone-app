/* @flow */

import { connect } from 'react-redux';
import { setInvalidFile, addFile } from '../actions';
import Dropzone from './Dropzone';

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  invalidFile: (primary, secondary) => {
    dispatch(setInvalidFile(primary, secondary));
  },
  addFile: (preview, size, type, name) => {
    dispatch(addFile(preview, size, type, name));
  },
});

const DropzoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dropzone);

export default DropzoneContainer;
