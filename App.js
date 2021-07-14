import React, {useState} from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar} from 'react-native-elements';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView>
      {/* <Icon name="check-circle" size={40} backgroundColor="#3b5998" /> */}
      <SearchBar
        placeholder="Type Here..."
        onChangeText={setSearch}
        value={search}
      />
    </SafeAreaView>
  );
};

export default App;
