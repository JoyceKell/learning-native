import React, {Component} from 'react';
import {Text, TextInput, Button, View} from 'react-native';
import Estilo from '../estilo';
import Numero from './Numero';

export default class Mega extends Component {
  state = {
    qtdNum: this.props.qtdNum,
    numeros: [],
  };

  constructor(props) {
    super(props);
  }

  alterarQtdNum(qtd) {
    this.setState({qtdNum: qtd});
  }

  gerarNumeroNaoContido = nums => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNum)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);

    this.setState({numeros});
    console.warn(this.state);
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map(num => {
      return <Numero num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.grande}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="quantidade de numeros"
          value={this.state.qtdNum}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
