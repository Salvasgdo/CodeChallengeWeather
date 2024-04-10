import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function SearchBarComponent({onSearch}) {
  const [text, setText] = useState('');

  const handleChangeText = (searchText) => {
    setText(searchText);
    onSearch(searchText);
  };

  const handleClear = () => {
    setText('');
    onSearch('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search a city, airport or terminal ..."
        value={text}
        onChangeText={handleChangeText}
      />
      <TouchableOpacity
        style={styles.iconButton}
        onPress={handleClear}
        disabled={!text}>
        <Image
          source={
            text
              ? require('../assets/icons/close.png')
              : require('../assets/icons/search.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
