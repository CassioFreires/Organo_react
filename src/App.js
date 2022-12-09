
import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario/Formulario';
import Rodape from './components/Rodape/Rodape';
import Time from './components/Time/Time';


function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8FFFF',
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: 'E9FFE3',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]
  const [colaboradores, setColaboradores] = useState([]);

  const novoColaboradorAdd = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      
      <Formulario
        times={times.map((item) => item.nome)}
        colaboradorCadastrador={colaborador => novoColaboradorAdd(colaborador)}
      />

      {
        times.map((item) =>
          <Time
            key={item.nome}
            nome={item.nome}
            corPrimaria={item.corPrimaria}
            corSecundaria={item.corSecundaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === item.nome)}

          />)
      }
      <Rodape />
    </div>
  );
}

export default App;
