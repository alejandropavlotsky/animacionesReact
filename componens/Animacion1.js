import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, Text, View} from 'react-native';

const Animacion1 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [animacion]);

  return (
    <Animated.View style={{opacity: animacion}}>
      <Text>
        <Text style={styles.texto}>Animacion 1</Text>;
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion1;
