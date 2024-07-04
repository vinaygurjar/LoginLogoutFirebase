import {Alert, Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import Btn from './Btn';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate('Logout');
        Alert.alert('User Logged In!');
      })
      .catch(error => {
        console.log(error);
        Alert.alert('Login failed. Please check your credentials.');
      });
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
          Login
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
          <Text style={{fontSize: 40, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}  
            onChangeText={txt => setEmail(txt)}  
          />
          <Field 
            placeholder="Password" 
            secureTextEntry={true}
            value={password} 
            onChangeText={txt => setPassword(txt)}             
          />
          <View
            style={{alignItems: 'flex-end', width: '80%', paddingRight: 16, marginBottom: 120}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() =>{
            handleLogin();
            // props.navigation.navigate('Logout');
          }}/>
          <View style={{ display: 'flex', flexDirection: "row", justifyContent: 'center'}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Signup")}>
              <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16}}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
