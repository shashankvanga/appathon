import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const New = ({navigation}) => {
    const [text, setText] = useState('')
    return (
        <View style={{flex : 1, justifyContent : 'center', alignItems : 'center'}}>
            <Text>New Page</Text>
            <TextInput
                placeholder="Shashank"
                style={{width: 300, backgroundColor: 'white', height: 50, margin: 10, padding: 10}}
                onChangeText= {(text) => console.log(text)}
            ></TextInput>
            <TextInput
                placeholder="Enter your email id"
                style={{width: 300, backgroundColor: 'white', height: 50, margin: 10, padding: 10}}
                onChangeText= {(text) => console.log(text)}
            ></TextInput>
            <Button onPress = {()=> navigation.navigate('Details')} title= 'Next Screen' ></Button>
        </View>
    );
}

export default New