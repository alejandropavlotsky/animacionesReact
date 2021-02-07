import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, Text, View} from 'react-native';

const Animacion3 = () => {
  const [animacion] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [animacion]);

  return (
    <View>
      <Text>
        <Animated.Text style={[styles.texto, {fontSize: animacion}]}>
          Animacion 3
        </Animated.Text>
        ;
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});
export default Animacion3;
