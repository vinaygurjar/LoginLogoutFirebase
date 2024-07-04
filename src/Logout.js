import { View, Text } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import Background from './Background';
import {darkGreen} from './Constants';
import Btn from './Btn';

const Logout = (props) => {
    const handleLogout = () =>{
      auth()
      .signOut()
      .then(() => console.log('User signed out!'));
    }
  return (
  <Background>
    <View style={{alignItems: 'center', width: 400}}>
      <Text
        style={{
          color: 'white',
          fontSize: 64,
          fontWeight: 'bold',
          marginVertical: '10',
        }}>
        Profile
      </Text>
      <View
        style={{
          backgroundColor: 'white',
          height: 700,
          width: 400,
          borderTopLeftRadius: 130,
          paddingTop: 100,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: darkGreen, fontWeight: 'bold'}}>
          Welcome To Your Profile!
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Login Successfully!
        </Text>
        <Btn textColor='white' bgColor= {darkGreen} btnLabel="Logout" Press={() =>{
          handleLogout();
          props.navigation.navigate('Home');
        }}/>
      </View>
    </View>
  </Background>
  )
}

export default Logout