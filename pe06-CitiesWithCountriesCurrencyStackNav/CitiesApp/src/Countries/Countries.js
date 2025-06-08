import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

function Countries({ countries = [] }) {
  return (
    <ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
      <View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
        {!countries.length && <CenterMessage message="No saved countries!" />}
        {countries.map((item, index) => (
          <View style={styles.countryContainer} key={index}>
            <Text style={styles.country}>{item.name}</Text>
            <Text style={styles.currency}>{item.currency}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  countryContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  country: {
    fontSize: 18,
  },
  currency: {
    color: 'rgba(0, 0, 0, .5)',
  },
});

export default Countries;