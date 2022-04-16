import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export class Regform extends React.Component {
    render() {

        return (
            <View style={styles.regform}>
                <Text style={styles.header}>Registration</Text>

                <TextInput style={styles.TextInput} placeholder="Full Name"
                underlineColorAndroid={'transparent'} />

                <TextInput style={styles.TextInput} placeholder="Email-ID"
                underlineColorAndroid={'transparent'} />

                <TextInput style={styles.TextInput} placeholder="School District"
                underlineColorAndroid={'transparent'} />

                <TextInput style={styles.TextInput} placeholder="Subject and Topics"
                underlineColorAndroid={'transparent'} />

                <TextInput style={styles.TextInput} placeholder="Guardian Contact Info"
                underlineColorAndroid={'transparent'} />

                <TouchableOpacity onPress = {()=> navigate('Details')} style={styles.button}>
                    <Text style={styles.btntext}>Next Screen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
  
const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 24,
        color: '#00bfff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 1, 
    },
    TextInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#00bfff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#00bfff',
        marginTop: 30,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

export default Regform;
