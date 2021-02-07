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
import Animacion2 from './componens/Animacion2';
import Animacion3 from './componens/Animacion3';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        {/* <Animacion1 /> */}
        {/* <Animacion2 /> */}
        <Animacion3 />
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
