import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function TelaLogin({ navigation }) {
    const [senhaOculta, setSenhaOculta] = useState(true);
    const [usuarioDigitado, setUsuarioDigitado] = useState("");
    const [senhaDigitada, setSenhaDigitada] = useState("");

    function fazerLogin() {
        if (usuarioDigitado === "Aluno" && senhaDigitada === "1234") {
            navigation.navigate("Tela Modulos");
        } else {
            Alert.alert("Aviso", "Usuário e/ou senha incorretos!");
        }
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.fonteLogin}>Login</Text>
            <TextInput
                label="Usuário"
                value={usuarioDigitado}
                onChangeText={text => setUsuarioDigitado(text)}
                style={estilos.input}
                mode="outlined"
            />
            <TextInput
                label="Senha"
                value={senhaDigitada}
                onChangeText={text => setSenhaDigitada(text)}
                secureTextEntry={senhaOculta}
                style={estilos.input}
                mode="outlined"
            />
            <TouchableOpacity style={estilos.botao} onPress={fazerLogin}>
                <Text style={estilos.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert("Cadastro", "Redirecionar para a página de cadastro")}>
                <Text style={estilos.textoCadastro}>Não tenho conta</Text>
            </TouchableOpacity>
            <Image source={require('./assets/logo_senai.png')} style={estilos.Imagem}></Image>

            <StatusBar style="auto" />
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3B3DBF",
        padding: 20,
    },
    fonteLogin: {
        color: 'white',
        fontSize: 30,
        marginBottom: 100
    },
    input: {
        width: "100%",
        marginBottom: 40,
        backgroundColor: "white",
    },
    botao: {
        backgroundColor: "#5A67D8",
        width: "100%",
        borderRadius: 8,
        padding: 20,
        alignItems: "center",
        marginBottom: 10,
    },
    botaoTexto: {
        color: "white",
        fontSize: 16,
    },
    textoCadastro: {
        color: "white",
        fontSize: 14,
    },
    Imagem:{
        width: 200,
        height: 200, 
        resizeMode: 'contain'
    }
});
