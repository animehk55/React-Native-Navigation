
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


// import React, {Component} from 'react';
// import { Button, SafeAreaView } from 'react-natve';
// import { StackNavigator } from 'react-native';

// const Home = ({ navigation }) => (
//   <SafeAreaView>
//     <Button 
//       title="Go to details"
//       onPress={() => navigation.navigate('Details')}
//     />
//     <Button 
//       title="Go to model"
//       onPress={() => navigation.navigate('Modal')}
//     />
//   </SafeAreaView>
// );

// const Details = ({ navigation }) => (
//   <SafeAreaView>
//     <Button 
//       title="Go to modal"
//       onPress={() => navigation.navigate('Modal')}
//     />
//   </SafeAreaView>
// );

// const ModalScreen = ({ navigation }) => (
//   <SafeAreaView>
//     <Button 
//       title="Close modal"
//       onPress={() => navigation.goBack(null)}
//     />
//   </SafeAreaView>
// );

// const MainAppStack = StackNavigator({
//   Home: {
//     screen: Home,
//     navigationOpttions: {
//       title: 'Home',
//     },
//   },
//   Details: {
//     screen: Details,
//     navigationOptions: {
//       title: 'Details',
//     },
//   },
// });

// const RootNavigator = StackNavigator({
//   MainApp: {
//     screen: MainAppStack,
//   },
//   Modal: {
//     screen: ModalScreen,
//   },
// },{
//   headerMode: 'none',
//   mode: 'modal'
// })

// export default RootNavigator;