'use strict';
import React from "react";
import PropTypes from "prop-types";

import {
  Text,
  View,
  Image
} from "react-native";

class CroppingView extends React.Component {
  static propTypes = {
    cropTop: PropTypes.number,
    cropLeft: PropTypes.number,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  };

  getDefaultProps() {
    return {
      cropTop: 0,
      cropLeft: 0
    }
  }

  render() {
    return (
      <View style={[{
        position: 'absolute',
        overflow: 'hidden',
        top: this.props.cropTop,
        left: this.props.cropLeft,
        height: this.props.height,
        width: this.props.width,
        backgroundColor: 'transparent'
        }, this.props.style]}>
        <View style={{
          position: 'absolute',
          top: this.props.cropTop * -1,
          left: this.props.cropLeft * -1,
          backgroundColor: 'transparent'
        }}>
          {this.props.children}
        </View>
      </View>
    );
  }
};

class CroppedImage extends React.Component {
  render() {
    return (
      <View style={[{
        overflow: 'hidden',
        height: this.props.cropHeight,
        width: this.props.cropWidth,
        backgroundColor: 'transparent'
        }, this.props.style]}>
        <Image style={{
          position: 'absolute',
          top: this.props.cropTop * -1,
          left: this.props.cropLeft * -1,
          width: this.props.width,
          height: this.props.height
        }}
          source={this.props.source}
          resizeMode={this.props.resizeMode}>
          {this.props.children}
        </Image>
      </View>
    );
  }
};

export default {
  CroppedImage: CroppedImage,
  CroppingView: CroppingView
};
