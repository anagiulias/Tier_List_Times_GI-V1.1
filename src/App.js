import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const times = [
    {
      nome: 'Fogo',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Água',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Gelo',
      corPrimaria: '#DEEFE7',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Vento',
      corPrimaria: '#E4F2E7',
      corSecundaria: '#C6E7D4'
    },
    {
      nome: 'Terra',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Planta',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Eletricidade',
      corPrimaria: '#CED7F2',
      corSecundaria: '#7E82D9'
    },
  ]

  const [personagens, setPersonagens] = useState([])

  const aoNovoPersonagemAdicionado = (personagem) => {
    setPersonagens([...personagens, personagem])
  }

  return (
    <div className="App">
      <Banner enderecoImagem='/imagens/banner.png' />
      <Formulario times={times.map(time => time.nome)} aoPersonagemCadastrado={personagem => aoNovoPersonagemAdicionado(personagem)}/>
      
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corDoFundo={time.corPrimaria} 
        corDoCard={time.corSecundaria}
        personagens={personagens.filter(personagem => personagem.time === time.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;
