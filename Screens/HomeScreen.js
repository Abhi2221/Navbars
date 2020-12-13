import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

const HomeScreen= ( {navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button 
      title="Go to Details"
      onPress= {()=>navigation.navigate("Detail")}></Button>
    </View>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
container:
{ flex: 1, alignItems: 'center', justifyContent: 'center' }
});