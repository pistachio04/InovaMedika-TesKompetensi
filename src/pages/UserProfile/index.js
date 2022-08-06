import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
import {List} from '../../components';

const UserProfile = () => {
  return (
    <View style={styles.page}>
      <Text>Profil Avatar Here</Text>
      <List icon="edit-profile" name="Edit Profile" desc="Edit your profile" />
      <List icon="edit-profile" name="Logout" desc="Lorem ipsum dolor" />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
});
