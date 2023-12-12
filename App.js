/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          position: 'relative',
          backgroundColor: 'green',
        }}>
        <View
          style={{
            borderWidth: 2.6,
            borderColor: 'black',
            borderBottomLeftRadius: 17,
            borderTopRightRadius: 17,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: 'red',
            marginHorizontal: 15,
            marginVertical: 110,
            padding: 2,
            width: 200,
            position: 'relative',
            zIndex: 1,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 30,
              letterSpacing: 2,
              fontWeight: '500',
              fontFamily: 'Nunito Sans Normal',
              textAlign: 'center',
            }}>
            Hello, World!
          </Text>
        </View>
        <View
          style={{
            borderWidth: 2.6,
            borderColor: 'black',
            borderBottomLeftRadius: 17,
            borderTopRightRadius: 17,
            borderTopLeftRadius: 5,
            borderBottomRightRadius: 5,
            backgroundColor: 'orange',
            marginHorizontal: 15,
            marginVertical: 50,
            padding: 2,
            position: 'absolute',
            top: 10,
            left: 20,
            right: 20,
            bottom: 1,
          }}>
          <Text style={{color: 'black'}}>Hello, World2!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
