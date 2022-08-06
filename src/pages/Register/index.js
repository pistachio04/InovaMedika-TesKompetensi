import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {Button, Gap, Input, Loading} from '../../components';
import {ILLogo} from '../../assets';
import {storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onSignUp = () => {
    console.log(form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');
        //menyimpan data ke db
        const data = {
          fullName: form.fullName,
          email: form.email,
        };
        Fire.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);
        // simpan ke localstorage
        storeData('user', data);
        navigation.navigate('Login');
        console.log('register success: ', success);
      })
      .catch(error => {
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
            <Text style={styles.title}>Register</Text>
            <View>
              <Input
                label="Full Name"
                value={form.fullName}
                onChangeText={value => setForm('fullName', value)}
              />
              <Gap height={12} />
              <Input
                label="Email Address"
                value={form.email}
                onChangeText={value => setForm('email', value)}
              />
              <Gap height={12} />
              <Input
                label="Password"
                value={form.password}
                onChangeText={value => setForm('password', value)}
                secureTextEntry
              />
              <Gap height={32} />
              <Button label="Sign Up" onPress={onSignUp} />
            </View>
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Register;

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
    marginBottom: 32,
    marginTop: 100,
  },
  title: {
    fontFamily: fonts.primary[700],
    fontSize: 24,
    marginBottom: 24,
    color: colors.secondary,
    textAlign: 'center',
  },
});
