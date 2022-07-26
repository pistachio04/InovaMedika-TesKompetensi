import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.border} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    marginBottom: 8,
    color: colors.text.secondary,
  },
  border: {
    backgroundColor: colors.white,
    borderColor: colors.border,
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
  },
});
