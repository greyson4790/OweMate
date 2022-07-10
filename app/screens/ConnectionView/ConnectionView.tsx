import { StyleSheet, View, Text, Button } from 'react-native'
import { COLORS } from '../../settings'

export const ConnectionView = ({ route }: { route: { params: { connection: User } } }) => {
	const connection = route.params.connection
	return (
		<View style={styles.container}>
			<Text style={styles.header}>{connection.username}</Text>
			<Text>{connection.display_name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.blue,
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 20,
	},
	header: {
		color: 'black',
		fontSize: 40,
		textAlign: 'center',
	},
	subHeader: {
		color: 'black',
		fontSize: 30,
	},
	bigText: {
		fontSize: 25
	},
	section: {
		margin: 10,
		padding: 10,
		backgroundColor: 'white',
		width: '80%',
		borderRadius: 10
	}
})