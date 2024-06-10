import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaCadastro from "./TelaCadastro";
import TelaLogin from "./Telalogin";
import TelaModulos from "./TelaModulos";



const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Modulos">
          <Stack.Screen name="Tela Cadastro" component={TelaCadastro} options={{headerShown:false}}/>
          <Stack.Screen name="Tela Login" component={TelaLogin} options={{headerShown:false}}/>
          <Stack.Screen name="Tela Modulos" component={TelaModulos} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}