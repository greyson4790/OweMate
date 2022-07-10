import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useContext } from 'react'
import { COLORS } from '../../settings'
import { UserContext } from '../../../contexts'
import { ZacButton } from '../../components/ZacButton'

export const ConnectionsView = ({ navigation }: { navigation: any }) => {
	const { user } = useContext(UserContext)
	return (
		<ScrollView contentContainerStyle={{ alignItems: 'center' }} style={styles.container}>
			<Text style={styles.header}>My Connections:</Text>
			{user?.connections.map((connection, i) => {
				return (
					<TouchableOpacity key={i} style={styles.friendSection} onPress={() => navigation.navigate('Friend', { connection: connection })}>
						<Text style={styles.friendSectionHeader}>{connection.contact_username}</Text>
						<Text style={styles.friendSectionText}>{connection.contact.display_name}</Text>
					</TouchableOpacity>					
				)
			})}
			{user?.connections.length===0 && (<>
				<Text>
					You don't have any friends, RIP.
				</Text>
			</>)}
		</ScrollView>		
	)
}

const styles = StyleSheet.create({
	header: {
		margin: 20,
		fontSize: 40,
		textAlign: 'center',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.lighterblue,
		width: '100%',
		padding: 20,
		overflow: 'scroll',
	},
	friendSection: {
		backgroundColor: 'white',
		width: '80%',
		margin: 20,
		padding: 10,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	friendSectionHeader: {
		color: 'black',
		fontSize: 20,
		textAlign: 'center',
	},
	friendSectionText: {
		color: 'grey',
		fontSize: 15,
		textAlign: 'center',
	},
})