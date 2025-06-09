import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CenterMessage from '../components/CenterMessage';
import { colors } from '../theme';

const exampleCountries = [
	{
		name: 'United States',
		currency: { code: 'USD', used: true },
	},
	{
		name: 'Germany',
		currency: { code: 'EUR', used: true },
	},
	{
		name: 'France',
		currency: { code: 'EUR', used: true },
	},
	{
		name: 'Japan',
		currency: { code: 'JPY', used: true },
	},
	{
		name: 'United Kingdom',
		currency: { code: 'GBP', used: true },
	},
	{
		name: 'China',
		currency: { code: 'CNY', used: true },
	},
	{
		name: 'Switzerland',
		currency: { code: 'CHF', used: true },
	},
	{
		name: 'Canada',
		currency: { code: 'CAD', used: true },
	},
	{
		name: 'Australia',
		currency: { code: 'AUD', used: true },
	},
	{
		name: 'India',
		currency: { code: 'INR', used: true },
	},
];

function Countries({ countries = exampleCountries }) {
	return (
		<ScrollView contentContainerStyle={[!countries.length && { flex: 1 }]}>
			<View style={[!countries.length && { justifyContent: 'center', flex: 1 }]}>
				{!countries.length && <CenterMessage message="No saved countries!" />}
				{countries.map((item, index) => (
					<View style={styles.countryContainer} key={index}>
						<Text style={styles.country}>{item.name}</Text>
            <Text style={styles.currency}>
              {item.currency.code} ({item.currency.code === 'USD' ? 'used' : 'not used'})
            </Text>
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