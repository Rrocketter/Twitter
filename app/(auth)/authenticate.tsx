import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import { useGlobalSearchParams } from 'expo-router'
import { authenticate } from '../../lib/api/auth'

const SignIn = () => {
  const [code, setCode] = useState('')
  const { email } = useGlobalSearchParams()

  const onSignin = async () => {
    if (typeof email !== 'string') { return }
    try {
        const response = await authenticate({ email, emailToken: code })
        console.log(response)
    } catch (e) {
        Alert.alert('Error',"Emai Code doesn't Match")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Confirm your email & account</Text>
      
      <TextInput placeholder="Email" style={styles.input} onChangeText={setCode}/>

      <Pressable style={styles.button} onPress={onSignin}>
        <Text style={styles.buttonText}>Cconfirm</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: 'center',
      padding: 24,
    },
    label: {
      fontSize: 24,
      marginVertical: 5,
      color: 'gray',
    },
    error: {
      marginVertical: 5,
      color: 'red',
    },
    input: {
      borderColor: 'gray',
      borderWidth: StyleSheet.hairlineWidth,
      padding: 10,
      fontSize: 20,
      marginVertical: 5,
      borderRadius: 10,
    },
    button: {
      backgroundColor: '#050A12',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      marginVertical: 5,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

export default SignIn