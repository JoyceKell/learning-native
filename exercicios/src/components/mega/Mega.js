import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';
import Estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdNum: this.props.qtdNum,
  };

  constructor(props) {
    super(props);
  }

  alterarQtdNum(qtd) {
    this.setState({qtdNum: qtd});
  }

  render() {
    return (
      <>
        <Text style={Estilo.grande}>
          Gerador de Mega-Sena {this.state.qtdNum}
        </Text>
        <TextInput
          keyboardType={'numeric'}
          style={{borderBottomWidth: 1}}
          placeholder="quantidade de numeros"
          value={this.state.qtdNum}
          onChangeText={qtd => this.alterarQtdNum(qtd)}
        />
      </>
    );
  }
}
