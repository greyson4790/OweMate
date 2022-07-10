import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AddLandingView } from '../../screens/AddLandingView'
const ActivitiesStack = createNativeStackNavigator() as any

export const EventsNavigator = () => {
    return (
        <ActivitiesStack.Navigator>
            <ActivitiesStack.Screen name="Events Home" component={AddLandingView} />
        </ActivitiesStack.Navigator>
    )
}