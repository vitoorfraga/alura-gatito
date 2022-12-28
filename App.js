import 'intl';
import 'intl/locale-data/jsonp/pt-BR'
import TelaPadrao from './src/componentes/TelaPadrao';

import Rotas from './src/Rotas'
import Reactotron from 'reactotron-react-native';


export default function App() {
  return (
      <TelaPadrao>
        <Rotas />
      </TelaPadrao>
  );
}