import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DummyDoctor1} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const List = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
    marginRight: 20,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  desc: {
    fontFamily: fonts.primary[500],
    fontSize: 12,
  },
});
