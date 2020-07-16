import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Shoplist = ({items, setItems}) => {
  const deletedItems = itemId => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== itemId);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={items}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <View style={styles.listView}>
              <Text style={styles.listText}>{item.text}</Text>
              <TouchableOpacity
                onPress={() => {
                  deletedItems(item.id);
                }}>
                <Icon name="remove" size={20} color="firebrick" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Shoplist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listText: {
    fontSize: 18,
  },
});
