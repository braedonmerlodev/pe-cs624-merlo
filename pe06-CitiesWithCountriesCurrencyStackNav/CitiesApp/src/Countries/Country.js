import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

class Country extends React.Component {
  constructor(props) {
    super(props);
    const { country } = props.route.params;
    this.state = {
      name: '',
      info: '',
      facts: country.facts || [],
    };
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  addFact = () => {
    const { updateCountry, country } = this.props.route.params;
    const { name, info, facts } = this.state;

    if (name === '' || info === '') return;

    const fact = { name, info };
    const newFacts = [...facts, fact];

    if (updateCountry) {
      updateCountry({
        ...country,
        facts: newFacts,
      });
    }

    this.setState({ name: '', info: '', facts: newFacts });
  };

  render() {
    const { facts, name, info } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!facts.length && { flex: 1 }]}>
          <View
            style={[
              styles.locationsContainer,
              !facts.length && { flex: 1, justifyContent: 'center' },
            ]}
          >
            {!facts.length && <CenterMessage message="No information about this country!" />}
            {facts.map((fact, index) => (
              <View key={index} style={styles.locationContainer}>
                <Text style={styles.locationName}>{fact.name}</Text>
                <Text style={styles.locationInfo}>{fact.info}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <TextInput
          onChangeText={(val) => this.onChangeText('name', val)}
          placeholder="Country Name"
          value={name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={(val) => this.onChangeText('info', val)}
          placeholder="Country Information"
          value={info}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addFact}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  locationsContainer: {
    paddingBottom: 104,
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0,
  },
  input2: {
    bottom: 52,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
  },
  button: {
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  locationContainer: {
    padding: 10,
    borderBottomColor: colors.primary,
    borderBottomWidth: 2,
  },
  locationName: {
    fontSize: 18,
  },
  locationInfo: {
    color: 'rgba(0, 0, 0, .5)',
  },
});

export default Country;