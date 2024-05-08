import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function HomePage() {
	return (
		<View>
			<Text>THIS IS THE HOME PAGE</Text>
			<Link href= '/AboutPage'> Go to About Page </Link>
		</View>
	);
}
