import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, Text, View} from 'react-native';

const Animacion2 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 450,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [animacion]);

  return (
    <View>
      <Animated.View
        style={[styles.caja, {width: animacion, height: animacion}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});
export default Animacion2;
