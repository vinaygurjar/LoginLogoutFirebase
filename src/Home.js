import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './Background'
import Btn from './Btn'
import { darkGreen, green } from './Constants'

const Home = (props) => {
  return (
    <Background>
      <View style={{ marginHorizontal: 40, marginVertical: 100}}>
      <Text style={{ color: 'white', fontSize: 64}}>Let's start</Text>
      <Text style={{ color: 'white', fontSize: 64, marginBottom: 40}}>Coding</Text>
      <Btn bgColor={green} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate('Login')}/>
      <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press={() => props.navigation.navigate('Signup')}/>
      </View>
    </Background>
  )
}

export default Home

const styles = StyleSheet.create({})