import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label} onPress={onPress}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button.primary.background,
    paddingVertical: 10,
    borderRadius: 5,
  },
  label: {
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
});
