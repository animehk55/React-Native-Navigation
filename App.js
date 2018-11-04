import React, {Component} from 'react';
import { Button, SafeAreaView } from 'react-natve';
import { StackNavigator } from 'react-native';

const Home = ({ navigation }) => (
  <SafeAreaView>
    <Button 
      title="Go to details"
      onPress={() => navigation.navigate('Details')}
    />
    <Button 
      title="Go to model"
      onPress={() => navigation.navigate('Modal')}
    />
  </SafeAreaView>
);

const Details = ({ navigation }) => (
  <SafeAreaView>
    <Button 
      title="Go to modal"
      onPress={() => null}
    />
  </SafeAreaView>
);

const ModalScreen = () => (
  <SafeAreaView>
    <Button 
      title="Close modal"
      onPress={() => null}
    />
  </SafeAreaView>
);

const MainAppStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOpttions: {
      title: 'Home',
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Details',
    },
  },
});

const RootNavigator = StackNavigator({
  MainApp: {
    screen: MainAppStack,
  },
  Modal: {
    screen: ModalScreen,
  },
},{
  headerMode: 'none',
  mode: 'modal'
})

export default RootNavigator;