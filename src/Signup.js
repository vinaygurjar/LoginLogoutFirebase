import {Text, TouchableOpacity, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, { useState } from 'react';
import Background from './Background';
import {darkGreen} from './Constants';
import Field from './Field';
import Btn from './Btn';

const Signup = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () =>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
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
            marginTop: 20,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 19,
            marginBottom: 20,
            fontWeight: 'bold',
          }}>
          Create a new account
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 400,
            borderTopLeftRadius: 130,
            paddingTop: 50,
            alignItems: 'center',
          }}>
          <Field 
            placeholder="First Name" 
            keyboardType={'text'}
          />
          <Field 
            placeholder="Last Name"
            keyboardType={'text'} 
          />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
            value={email}  
            onChangeText={txt => setEmail(txt)}
          />
          <Field 
            placeholder="Contact Number" 
            keyboardType={'numeric'} 
          />
          <Field 
            placeholder="Password" 
            secureTextEntry={true} 
            value={password}  
            onChangeText={txt => setPassword(txt)}
          />
          <Field 
            placeholder="Confirm Password" 
            secureTextEntry={true} 
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '80%',
              paddingRight: 16
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>
              By signing in, you agree to our {''}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 14}}>
              Terms & Conditions
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              width: '80%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{color: 'grey', fontSize: 14}}>
              and {''}
            </Text>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 14}}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              handleSignup();
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Signup;
