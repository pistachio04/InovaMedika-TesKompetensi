import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DummyDoctor1,
  IconEditProfile,
  IconLogout,
  IconNext,
} from '../../../assets';
import {fonts} from '../../../utils/fonts';
import {colors} from '../../../utils/colors';

const List = ({name, desc, type, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'logout') {
      return <IconLogout />;
    }
    return <IconLogout />;
  };
  return (
    <View style={styles.container}>
      {icon ? <Icon /> : <Image source={DummyDoctor1} style={styles.avatar} />}
      {/* <Image source={DummyDoctor1} style={styles.avatar} /> */}
      <View style={styles.label}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      {type === 'next' && <IconNext />}
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
  },
  label: {
    marginLeft: 20,
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
