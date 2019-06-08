import React, {Component} from 'react';
import { StyleSheet, Text, View, Picker, TouchableOpacity, Alert } from 'react-native';
import { Input, ContTitle } from './styles';

export default class App extends Component {
  state = {
    valor: 0,
    moeda: '',
    convertido: 0,
    simb: ''
  }

  _Convert = () => {
    let moeda = this.state.moeda;
    let valor = this.state.valor;

    if (moeda === '') {
      Alert.alert('Atenção!','Selecione uma moeda para conversão');
    }

    if (moeda === 'dolar') {
      let d = valor * 4;
      this.setState({
        convertido: d,
        simb: 'R$'
      });
    }

    if (moeda === 'real') {
      let d = valor / 4;
      this.setState({
        convertido: d,
        simb: '$'
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ContTitle>
          <Text style={styles.welcome}>Conversor de moedas</Text>
        </ContTitle>

          <Input
            keyboardType="numeric"
            placeholder="Valor"
            onChangeText={(valor) => this.setState({valor: valor})}
          />

          <Picker
            selectedValue={this.state.moeda}
            style={{height: 50, width: 350}}
            onValueChange={(itemValue) =>
              this.setState({moeda: itemValue})
            }>
            <Picker.Item label="Selecione uma moeda" value="" />
            <Picker.Item label="Real" value="real" />
            <Picker.Item label="Dolar" value="dolar" />
          </Picker>

          <TouchableOpacity 
            onPressIn={this._Convert}
            style={{
              backgroundColor: '#1E90FF',
              borderRadius: 10,
              width: 360,
              height: 40
              }}>
            <Text style={styles.textBtn}>Converter</Text>
          </TouchableOpacity>

          <Text style={styles.textValue}>{this.state.simb}{this.state.convertido}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom: 300
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
    color: "white"
  },
  textBtn: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
    color: "white"
  },
  textValue: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
