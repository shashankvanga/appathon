import React from 'react';
import { View, Button, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Details = () => {
//     return (
//         <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
//             <Text>Home View</Text>
//         </View>
//     )
// }

function DetailsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <TextInput
                placeholder="School District"
                style={{width: 300, backgroundColor: 'white', height: 50, margin: 10, padding: 10}}
                onChangeText= {(text) => console.log(text)}
            ></TextInput>
        <TextInput
                placeholder="Subject and Topics"
                style={{width: 300, backgroundColor: 'white', height: 50, margin: 10, padding: 10}}
                onChangeText= {(text) => console.log(text)}
            ></TextInput>
        <TextInput
                placeholder="Guardian Contact Info"
                style={{width: 300, backgroundColor: 'white', height: 50, margin: 10, padding: 10}}
                onChangeText= {(text) => console.log(text)}
            ></TextInput>
        <TextInput
                placeholder="Univeristy/High School (if registering to be a tutor)"
                style={{width: 300, backgroundColor: 'white', height: 50, margin: 10, padding: 10}}
                onChangeText= {(text) => console.log(text)}
            ></TextInput>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        
      </View>
    );
  }

export default DetailsScreen;