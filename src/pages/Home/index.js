import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DoctorCategory, Gap, HomeProfile, List} from '../../components';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
      <Gap height={32} />
      <Text style={styles.welcome}>Let's find your doctor!</Text>
      <Text style={styles.sectionLabel}>Category Doctor</Text>
      <View style={styles.wrapperScroll}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.category}>
          <DoctorCategory category="heart" />
          <DoctorCategory category="lung" />
          <DoctorCategory category="tooth" />
          <DoctorCategory category="medices" />
        </ScrollView>
      </View>
      <Gap height={24} />
      <Text style={styles.sectionLabel}>Recomended Doctor</Text>
      <List name="Alexander Jannie" desc="Heart Specialist" />
      <List name="Alexander Jannie" desc="Lung Specialist" />
      <List name="Alexander Jannie" desc="Tooth Specialist" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  welcome: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.primary,
    marginBottom: 20,
  },
  category: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  wrapperScroll: {
    marginHorizontal: -20,
  },
  sectionLabel: {
    fontFamily: fonts.primary[700],
    fontSize: 16,
    color: colors.text.primary,
    marginBottom: 12,
  },
});
