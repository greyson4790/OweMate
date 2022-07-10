import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { InvoicesLandingView } from '../../screens/InvoicesLandingView'
const InvoicesStack = createNativeStackNavigator() as any

export const InvoicesNavigator = () => {
    return (
        <InvoicesStack.Navigator>
            <InvoicesStack.Screen name="Activities Home" component={InvoicesLandingView} /> 
        </InvoicesStack.Navigator>
    )
}