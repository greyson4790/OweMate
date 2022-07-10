import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
const logoImage = require('../../assets/icon.png')
import { useContext } from 'react'
import { COLORS } from '../../settings'
import { UserContext } from '../../../contexts'
const addImage = require('../../assets/add.png')
const sumFun = require('../../assets/SumFun.png')
const events = require('../../assets/Events-icon.png')

export const AddLandingView = ({ navigation }: { navigation: any }) => {
	const { user } = useContext(UserContext)

	return (
		<ScrollView style={styles.scrollContainer}>
			<View style={styles.container}>				
				<Text style={styles.clickSectionText}>Add Invoice or Payment:</Text>		
				
				<TouchableOpacity style={styles.clickSection} onPress={() => navigation.navigate('Create Invoice')}>
					<Image
						source={addImage}
						style={{
							height: 30,
							width: 30,
							marginRight: 20,
						}}/>
					<Text style={styles.clickSectionText}>Add Invoice</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.clickSection} onPress={() => navigation.navigate('Create Payment')}>
					<Image
						source={addImage}
						style={{
							height: 30,
							width: 30,
							marginRight: 20,
						}}/>
					<Text style={styles.clickSectionText}>Add Payment</Text>
				</TouchableOpacity>
					
					{/* <View style={styles.text}>	
						<Image
							source={sumFun}
							style={{
								height:114,
								width:320,
								marginRight: 0,
							
							}}/>
					</View>		 */}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	scrollContainer: {
		flex: 1,
	},
	header: {
		margin: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		width: '100%',	
	},
	text: {
		marginTop: 187,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end',
		width: '100%',
		borderColor: 'black',
		borderWidth: 3,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderBottomWidth: 0,	
	},
	headerText: {
		color: 'white',
		fontSize: 25,
		textAlign: 'left',
	},
	container: {
		flex: 1,
		flexDirection: 'column' ,
		backgroundColor: COLORS.vomitgreen,
		alignItems: 'center',
		justifyContent: 'center',
	},
	clickSection: {
		backgroundColor: COLORS.white,
		width: '80%',
		margin: 20,
		flexDirection: 'row',
		padding: 10,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	clickSectionText: {
		color: 'black',
		fontSize: 35,
		textAlign: 'center',
	},
})
