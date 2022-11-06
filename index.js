/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

AppRegistry.registerComponent(appName, () => App);
