import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {DummyUser} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.fullName}>Hi, Sigid!</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 100 / 2,
    marginRight: 20,
  },
  fullName: {
    fontFamily: fonts.primary[700],
    fontSize: 18,
    color: colors.text.primary,
  },
});
