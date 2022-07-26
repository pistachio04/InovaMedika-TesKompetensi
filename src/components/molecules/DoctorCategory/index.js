import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ILCatHeart,
  ILCatLung,
  ILCatMedicines,
  ILCatTooth,
} from '../../../assets';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const DoctorCategory = ({category}) => {
  const Icon = () => {
    if (category === 'heart') {
      return <ILCatHeart style={styles.illustration} />;
    }
    if (category === 'tooth') {
      return <ILCatTooth style={styles.illustration} />;
    }
    if (category === 'lung') {
      return <ILCatLung style={styles.illustration} />;
    }
    return <ILCatMedicines style={styles.illustration} />;
  };

  return (
    <View style={styles.container}>
      <Icon />
      <Text style={styles.category}>{category}</Text>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 18,
  },
  illustration: {
    height: 32,
    width: 32,
  },
  category: {
    textTransform: 'capitalize',
    color: colors.white,
    fontFamily: fonts.primary[600],
  },
});
