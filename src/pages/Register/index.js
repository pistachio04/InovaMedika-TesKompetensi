import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Button, Gap, Input} from '../../components';
import {ILLogo} from '../../assets';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo style={styles.logo} />
      <Text style={styles.title}>Register</Text>
      <View>
        <Input label="Full Name" />
        <Gap height={12} />
        <Input label="Email Address" />
        <Gap height={12} />
        <Input label="Password" />
        <Gap height={32} />
        <Button label="Continue" onPress={() => navigation.replace('Home')} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 32,
    paddingBottom: 150,
    paddingTop: 100,
    justifyContent: 'space-between',
  },
  logo: {
    height: 100,
    marginBottom: 32,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    marginBottom: 24,
    color: colors.secondary,
    textAlign: 'center',
  },
});
