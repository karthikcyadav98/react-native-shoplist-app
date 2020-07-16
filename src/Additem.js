import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Additem = ({items, setItems}) => {
  const [text, setText] = useState('');

  const addItem = () => {
    if (text !== '') {
      const itemLen = items.length;
      setText('');
      setItems(prevItems => {
        return [...prevItems, {id: itemLen + 1, text}];
      });
    } else {
      Alert.alert('ERROR', 'Please enter an item', {text: 'OK'});
    }
  };
  return (
    <SafeAreaView>
      <TextInput
        value={text}
        placeholder="Additem"
        style={styles.input}
        keyboardType="default"
        onChangeText={text => setText(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem()}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={17} /> Add
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Additem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  btn: {
    backgroundColor: '#F8E872',
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});
