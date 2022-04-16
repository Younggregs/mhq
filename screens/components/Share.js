import React, { Component } from 'react';
import { Share, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base'

export default class SharePopup extends Component {

  onShare = async () => {
    try {
      const result = await Share.share({
        title: this.props.title,
        message: this.props.thread,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return(
        <TouchableOpacity onPress={this.onShare}>
            <Icon name="share" style={{ color: '#fff', fontSize: 40 }} />
        </TouchableOpacity>
    )
  }
}
