import React from 'react';
import {SafeAreaView, Text, StyleSheet, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Header = ({title}) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </SafeAreaView>
  );
};

// Header.defaultProps = {
//   title: 'Shoplist'
// }

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#FFC207',
    justifyContent: 'center',
  },

  text: {
    color: 'black',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
