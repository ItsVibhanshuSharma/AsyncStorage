import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

const App = () => {
  const [user, setUser] = useState('');

  const setData = async () => {
    await AsyncStorage.setItem('my-key', 'ishu Sharma');
  };

  const removeData = async () => {
    await AsyncStorage.removeItem('my-key');
    setUser('');
  };
  const getData = async () => {
    const name = await AsyncStorage.getItem('my-key');
    setUser(name);
    console.log(name);
  };

  return (
    <View>
      <Text>Hello : {user} </Text>

      <View style={{margin: 10}}>
        <Button title="setData" onPress={() => setData()} />
        <Button title="GetData" onPress={() => getData()} />
        <Button title="Remove Data" onPress={() => removeData()} />
      </View>
    </View>
  );
};

export default App;
