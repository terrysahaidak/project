import React from 'react'
import {View} from 'react-native'
import {AppRegistry} from 'react-native'
import GitterMobile from './app/index.js'

global.CURRENT_VERSION = 'v0.5.2'

AppRegistry.registerComponent('GitterMobile', () => GitterMobile);
