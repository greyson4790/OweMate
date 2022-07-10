import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ConnectionsView } from '../../screens/ConnectionsView'
import { ConnectionView } from '../../screens/ConnectionView'
const ActivitiesStack = createNativeStackNavigator() as any

export const FriendsNavigator = () => {
    return (
        <ActivitiesStack.Navigator>
            <ActivitiesStack.Screen name="All Friends" component={ConnectionsView} />     
            <ActivitiesStack.Screen name="Friend" component={ConnectionView} />     
    </ActivitiesStack.Navigator>
    )
}