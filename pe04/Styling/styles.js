import { StyleSheet } from 'react-native';

// Add this line to define profileCardColor
const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    backgroundColor: profileCardColor, // This uses the variable
    width: 300,
    height: 400,
    alignItems: 'center',
    padding: 20,
  },
  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default styles;