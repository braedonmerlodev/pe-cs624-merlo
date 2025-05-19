import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 0,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 180, // Adjusted for 3 per row
    height: 260,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
    paddingTop: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 10 },
        shadowOpacity: 1
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15
      }
    })
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    padding: 8,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 4,
  },
  titleText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 8,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 10,
    color: 'black',
    lineHeight: 12,
  },
  cardThumbnail: {
    transform: [{ scale: 0.2 }]
  },
});

export default styles;