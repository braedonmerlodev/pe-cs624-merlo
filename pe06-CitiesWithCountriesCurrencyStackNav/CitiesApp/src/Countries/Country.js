import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

class Country extends React.Component {
  state = {
    name: this.props.route.params.country.name,
    currency: this.props.route.params.country.currency.code,
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSave = () => {
    const { updateCountry, country } = this.props.route.params;
    const { name, currency } = this.state;
    if (name && currency && updateCountry) {
      updateCountry({
        ...country,
        name,
        currency: { code: currency }
      });
      this.props.navigation.goBack();
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[{ flex: 1 }]}>
          <View
            style={[
              styles.locationsContainer,
              { flex: 1, justifyContent: 'center' },
            ]}
          >
            <Text style={styles.header}>Edit Country</Text>
            <Text style={styles.label}>Country Name</Text>
            <Text style={styles.value}>{this.state.name}</Text>
            <Text style={styles.label}>Currency</Text>
            <Text style={styles.value}>{this.state.currency}</Text>
          </View>
        </ScrollView>
        <TextInput
          onChangeText={val => this.onChangeText('name', val)}
          placeholder="Country name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor="white"
        />
        <TextInput
          onChangeText={val => this.onChangeText('currency', val)}
          placeholder="Currency"
          value={this.state.currency}
          style={[styles.input, styles.input2]}
          placeholderTextColor="white"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleSave}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
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
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    alignSelf: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: colors.primary,
    marginTop: 10,
  },
  value: {
    fontSize: 18,
    color: '#222',
    marginBottom: 10,
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
});

export default Country;