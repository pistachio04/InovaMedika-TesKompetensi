import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts} from '../../../utils/fonts';

const Link = ({align, size, label, onPress}) => {
  return (
    <TouchableOpacity>
      <Text style={styles.text(align, size)} onPress={onPress}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (align, size) => ({
    fontFamily: fonts.primary[500],
    fontSize: size,
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
