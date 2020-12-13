import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Animated,
} from 'react-native';

const DetailScreen= ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
        <Button 
        title="Go to Home"
        onPress= {()=>navigation.navigate("Home")}></Button>
        <Button 
        title="Go to Details again"
        onPress= {()=>navigation.push("Detail")}></Button>
       <Button 
        title="Go to First"
        onPress= {()=>navigation.popToTop()}></Button>
      </View>
    );
  }
export default DetailScreen;
const styles = StyleSheet.create({
    container:
    { flex: 1, alignItems: 'center', justifyContent: 'center' }
    });  