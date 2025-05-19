import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import update from 'immutability-helper'; 
import { Platform, Image, Text, View, TouchableHighlight, ScrollView } from 'react-native'; 
import styles from './styles';

const userImage = require('./assets/images/user.png');

// Helper function to chunk array into rows of 2
function chunkArray(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description: 'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Jane Smith',
    occupation: 'UI/UX Designer',
    description: 'Jane creates beautiful and user-friendly interfaces for mobile apps.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Carlos Ruiz',
    occupation: 'Backend Engineer',
    description: 'Carlos specializes in building robust APIs and scalable backend systems.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Priya Patel',
    occupation: 'Project Manager',
    description: 'Priya ensures projects are delivered on time and within scope.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Liu Wei',
    occupation: 'QA Analyst',
    description: 'Liu is passionate about software quality and automated testing.',
    showThumbnail: true
  },
  {
    image: userImage,
    name: 'Fatima Al-Farsi',
    occupation: 'DevOps Engineer',
    description: 'Fatima automates deployments and manages cloud infrastructure.',
    showThumbnail: true
  }
];

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];
  if (showThumbnail) {  
    containerStyles.push(styles.cardThumbnail);
  }
  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image source={image} style={styles.cardImage} />
        </View>
        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      data: data
    }
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, {[index]: {showThumbnail: {$set: showThumbnail}}})
    });
  };
  
  render() {
    // Group cards into rows of 2
    const rows = chunkArray(this.state.data, 2);

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {rows.map((row, rowIndex) => (
          <View
            key={rowIndex}
            style={{ flexDirection: 'row', justifyContent: 'center', width: '100%' }}
          >
            {row.map((item, colIndex) => (
              <ProfileCard
                key={'card-' + (rowIndex * 2 + colIndex)}
                image={item.image}
                name={item.name}
                occupation={item.occupation}
                description={item.description}
                onPress={() => this.handleProfileCardPress(rowIndex * 2 + colIndex)}
                showThumbnail={item.showThumbnail}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    );
  }
}