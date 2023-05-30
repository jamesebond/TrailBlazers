import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CountryFlags = ({ visitedCountries }) => {

  return (
    <View style={styles.container}>
      {visitedCountries.map((country) => 
        <View key={country.name} style={styles.flagContainer}>
          <View
            style={
              country.visits >= 10
                ? styles.embellishmentGold
                : country.visits >= 5
                ? styles.embellishmentSilver
                : country.visits >= 1
                ? styles.embellishmentBronze
                : null
            }>
            <Image
              source={country.flag}
              style={styles.flag}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.visits}>{country.visits}</Text>
        </View>

      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flagContainer: {
    width: '15%',
    margin: 10,
    alignItems: 'center',
  },
  flag: {
    width: 60,
    height: 60,
  },
  embellishmentGold: {
    borderRadius: 30,
    borderColor: 'gold',
    borderWidth: 3,
  },
  embellishmentSilver: {
    borderRadius: 30,
    borderColor: 'silver',
    borderWidth: 2,
  },
  embellishmentBronze: {
    borderRadius: 30,
    borderColor: 'peru',
    borderWidth: 1,
  },
  visits: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default CountryFlags;