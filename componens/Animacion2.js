import React, {useState, useEffect} from 'react';
import {StyleSheet, Animated, Text, View} from 'react-native';

const Animacion2 = () => {
  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animacion, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [animacion]);

  return (
    <View>
      <Animated.View
        style={[
          styles.caja,
          {transform: [{scaleX: animacion}, {scaleY: animacion}]},
        ]}></Animated.View>
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
