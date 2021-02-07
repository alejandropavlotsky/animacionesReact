import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Animacion1 from './componens/Animacion1';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion1 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100,
  },
});

export default App;
