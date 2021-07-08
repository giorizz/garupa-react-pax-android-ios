import 'react-native-gesture-handler';
import "antd/dist/antd.css";

import React from 'react';
import {ThemeProvider} from 'styled-components';

import theme from './global/styles/theme';
import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Routes />
  </ThemeProvider>);

export default App;
