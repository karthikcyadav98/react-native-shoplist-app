import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';

import Header from './src/Header';
import Shoplist from './src/Shoplist';
import Additem from './src/Additem';

const App = () => {
  const [items, setItems] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Shoplist" />
      <Additem items={items} setItems={setItems} />
      <Shoplist items={items} setItems={setItems} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
