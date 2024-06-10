import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicon from '@expo/vector-icons/Ionicons';

export default function TelaModulos() {
    return (
        <View style={estilo.container}>
            <View style={estilo.fundoAzul}>
                <View style={estilo.nomeUsuario}>
                    <View>
                        <Text style={estilo.bemVindo}>Bem vindo,</Text>
                        <Text style={estilo.nome}>Fulano de tal</Text>
                    </View>
                    <View style={estilo.circulo}>
                        <Ionicon name='person' size={25} color={'gray'} />
                    </View>
                </View>

                <View style={estilo.conteudo}>
                    <View style={estilo.opcoes}>
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotao}>Requerimentos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotao}>Notas</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilo.opcoes}>
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotao}>Frequência</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotao}>Avaliações</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={estilo.opcoes}>
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotao}>Financeiro</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={estilo.botao}>
                            <Text style={estilo.textoBotao}>Documentos</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={estilo.logo}>
                    <Image source={require('./assets/logo_senai.png')} />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
    },
    fundoAzul: {
        backgroundColor: '#3850D2',
        height: '100%',
        justifyContent: 'space-between',
    },
    nomeUsuario: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 60,
        marginLeft: 30,
        marginRight: 40,
    },
    circulo: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    bemVindo: {
        color: 'white',
        fontSize: 15,
    },
    nome: {
        color: 'white',
        fontSize: 20,
        fontWeight: '800',
    },
    conteudo: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    opcoes: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
    botao: {
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    textoBotao: {
        color: '#3850D2',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
    },
});
