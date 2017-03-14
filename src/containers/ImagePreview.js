/* @flow */

import { connect } from 'react-redux';
import WallpaperPreview from './WallpaperPreview';

const mapStateToProps = state => ({
  primary: state.colors.primary,
  secondary: state.colors.secondary,
  fileName: state.files.fileName,
  originalFile: state.files.originalFile,
});

const WallpaperContainer = connect(mapStateToProps)(WallpaperPreview);

export default WallpaperContainer;
