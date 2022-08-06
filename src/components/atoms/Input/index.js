import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const Input = ({label, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () => {
    setBorder(colors.primary);
  };
  const onBlurForm = () => {
    setBorder(colors.border);
  };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input(border)}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
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
  input: border => ({
    backgroundColor: colors.white,
    borderRadius: 5,
    borderWidth: 1,
    height: 45,
    borderColor: border,
  }),
});
