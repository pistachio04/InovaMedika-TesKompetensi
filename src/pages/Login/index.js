import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILLogo} from '../../assets';
import {fonts} from '../../utils/fonts';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils/colors';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo style={styles.logo} />
      <View>
        <Text style={styles.title}>Login</Text>
        <Input label="Email Address" />
        <Gap height={12} />
        <Input label="Password" />
        <Gap height={32} />
        <Button label="Sign In" />
        <Gap height={32} />
      </View>
      <Link
        label="Register"
        size={14}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

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
