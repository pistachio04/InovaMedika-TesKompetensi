import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ILLogo} from '../../assets';
import {fonts} from '../../utils/fonts';
import {Button, Gap, Input, Link, Loading} from '../../components';
import {colors} from '../../utils/colors';
import {storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const [loading, setLoading] = useState(false);

  const signIn = () => {
    console.log('form: ', form);
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(res => {
        console.log('success: ', res);
        setLoading(false);
        //simpan ke db
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user: ', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('Home');
            }
          });
      })
      .catch(error => {
        console.log('error: ', error);
        setLoading(false);
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white,
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ILLogo style={styles.logo} />
            <View>
              <Text style={styles.title}>Login</Text>
              <Input
                label="Email Address"
                value={form.email}
                onChangeText={value => setForm('email', value)}
              />
              <Gap height={12} />
              <Input
                label="Password"
                value={form.password}
                secureTextEntry
                onChangeText={value => setForm('password', value)}
              />
              <Gap height={32} />
              <Button label="Sign In" onPress={signIn} />
              <Gap height={32} />
            </View>
            <Link
              label="Register"
              size={14}
              align="center"
              onPress={() => navigation.navigate('Register')}
            />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    // backgroundColor: 'white',
    marginHorizontal: 32,
    // marginBottom: 150,
    // marginTop: 100,
    justifyContent: 'space-between',
  },
  logo: {
    height: 100,
    marginTop: 100,
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
