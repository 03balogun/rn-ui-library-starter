import * as React from 'react';
import {Platform, StatusBar, View} from 'react-native';

import StorybookUIRoot from './.ondevice/Storybook';

export default () => (
  <View
    style={{
      flex: 1,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }}>
    <StorybookUIRoot />
  </View>
);
