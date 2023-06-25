import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
// import Rodape from './componentes/Rodape';
import { IPersonagem } from './compartilhado/interfaces/IPersonagem';

function App() {

  const times = [
    {
      nome: 'Pyro',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Cryo',
      corPrimaria: '#DEEFE7',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Anemo',
      corPrimaria: '#E4F2E7',
      corSecundaria: '#C6E7D4'
    },
    {
      nome: 'Geo',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Hydro',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Dendro',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Electro',
      corPrimaria: '#CED7F2',
      corSecundaria: '#7E82D9'
    },
  ]

  const [personagens, setPersonagens] = useState<IPersonagem[]>([])

  const aoNovoPersonagemAdicionado = (personagem: IPersonagem) => {
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
    </div>
  );
}

export default App;
