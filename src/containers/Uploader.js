/* @flow */

import { connect } from 'react-redux';
import {
  addDuotoneColor,
  setDuotoneColor,
  setPrimaryColor,
  setSecondaryColor,
  toggleColorPicker,
} from '../actions';
import Uploader from '../components/Uploader';

const mapStateToProps = state => ({
  originalFile: state.files.originalFile,
  fileName: state.files.fileName,
  fileSize: state.files.fileSize,
  downloadDisabled: !state.files.fileSize,
  duotones: state.colors.duotones,
  primary: state.colors.primary,
  secondary: state.colors.secondary,
  showColorPicker: state.ui.showColorPicker,
});

const mapDispatchToProps = dispatch => ({
  onDuotoneClick: (primary, secondary) => {
    dispatch(setDuotoneColor(primary, secondary));
  },
  onAddDuotoneClick: (primary, secondary) => {
    dispatch(addDuotoneColor(primary, secondary));
  },
  onSetPrimaryClick: (primary) => {
    dispatch(setPrimaryColor(primary));
  },
  onSetSecondaryClick: (secondary) => {
    dispatch(setSecondaryColor(secondary));
  },
  onToggleColorPicker: () => {
    dispatch(toggleColorPicker());
  },
});

const UploaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Uploader);

export default UploaderContainer;
