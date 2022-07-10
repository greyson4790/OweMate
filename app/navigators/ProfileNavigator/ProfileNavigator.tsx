import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ProfileView } from '../../screens/ProfileView'
const ActivitiesStack = createNativeStackNavigator() as any

export const ProfileNavigator = () => {
    return (
        <ActivitiesStack.Navigator>
            <ActivitiesStack.Screen name="Your Profile" component={ProfileView} />
    </ActivitiesStack.Navigator>
    )
}