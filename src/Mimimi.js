import React, { Component } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';

export default class Mimimi extends Component {
    constructor(props) {
        super(props);
        this.state = { frase: '', mimimi: '' };
        this.atualizar = this.atualizar.bind(this);
        this.gerarMimimi = this.gerarMimimi.bind(this);

    }

    atualizar(frase) {
        let s = this.state;
        s.frase = frase.toUpperCase();
        s.mimimi = this.gerarMimimi(frase);
        this.setState(s);

    }

    gerarMimimi(t) {
        let frase = t.toLowerCase();

        frase = frase.replace(/(a|á|à|ã|â)/g, 'i');
        frase = frase.replace(/(e|é|è|ê)/g, 'i');
        frase = frase.replace(/(i|í|ì|î)/g, 'i');
        frase = frase.replace(/(o|ó|ò|ô)/g, 'i');
        frase = frase.replace(/(u|ú|ù|û)/g, 'i');

        return frase.toUpperCase();
    }

    render() {
        return (
            <View style={st.body}>
                <Text style={st.title}>Gerador de Mimimi</Text>
                <View style={st.inputArea}>
                    <TextInput style={st.input} placeholder="Digite algo" onChangeText={this.atualizar} />
                </View>
                <View>
                    <Text style={st.texto}>{this.state.frase}</Text>
                    <Image style={st.img} source={require('./images/mimimi.jpg')} />
                    <Text style={[st.texto, st.mimimi]}>{this.state.mimimi}</Text>
                </View>
            </View>
        );
    }
}


const st = StyleSheet.create({
    body: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: 'lightgray'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: 'gray',
        marginBottom: 5
    },
    inputArea: {
        alignSelf: 'stretch'
    },
    input: {
        textAlign: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        fontSize: 20,
        height: 30,
        backgroundColor: '#dedede',
        color: 'gray',
        marginBottom: 40
    },
    img: {
        marginTop: -40,
        zIndex: 0

    },
    texto: {
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
        zIndex: 1,
        fontWeight: 'bold',
        padding: 10
    },
    mimimi: {
        marginTop: -6
    }

});

