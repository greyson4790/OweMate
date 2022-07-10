import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeView } from '../../screens/HomeView'
const ActivitiesStack = createNativeStackNavigator() as any

export const HomeNavigator = () => {
    return (
        <ActivitiesStack.Navigator>
            <ActivitiesStack.Screen name="Home page" component={HomeView} />   
    </ActivitiesStack.Navigator> 
    )
}