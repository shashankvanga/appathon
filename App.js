import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './home';
import DetailsScreen from './details'
import New from './new';
import RegformScreen from './regform'
import { Provider as PaperProvider, TextInput } from 'react-native-paper';
import { LoginScreen } from './loginscreen';
import { theme } from './appstyle';

// export default class App extends React.Component {
//   render() {
//     return (
//         <View style= {styles.container}>
//             <Regform />
//         </View>
//   );
// }}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#fff',
//     paddingLeft: 60,
//     paddingRight: 60,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'StudCo (Student Connect)' }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />

        <Stack.Screen name="New" component={New} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;


// const App = () => {

//   return (
//     <PaperProvider theme={theme}>
//       <LoginScreen/>
//       </PaperProvider>
//   );
// };

