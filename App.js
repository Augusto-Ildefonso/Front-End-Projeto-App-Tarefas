import { StyleSheet } from 'react-native';
import { MainNavigator } from './src/navigators/RootNavigator';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import AuthServices from "./src/services/AuthServices";
import axios from 'axios';

// 172.24.105.16 (USP)
// 192.168.0.12 (Casa)
axios.defaults.baseURL = "http://192.168.0.12:3000/"

axios.interceptors.request.use(
    function (response) {
      return response;
    },
    function (error) {
      if(
          error.response &&
          error.response.status &&
          error.response.status === 404
      ) {
        AuthServices.logoutUser(true);
        navigation.navigate('Login');
      }
      return Promise.reject(error);
    }
)

export default function App() {
  const [loaded, error] = useFonts({
    'Jura-Regular': require('./assets/fonts/Jura-Regular.ttf'),
    'Jura-Bold': require('./assets/fonts/Jura-Bold.ttf'),
  })
  return (
      <MainNavigator initialScreen='TelaLogin'/>
  );
}