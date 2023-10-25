import Card from './components/cards/cards';
import Panel from './components/Panel/Panel';
import Fun from './components/function/Fun';
import './App.css';

function App() {
  const nome = 'Neymar'
  const url = "https://via.placeholder.com/150"

  return (
    <div className='conteiner-cards'>
      <Card url={url} nome={"Enzo"} profissao={"Análista de Dados"} sobre={"Eu muito legal e gosto muito de programar, tenho 20 anos, sou paulista e Palmeirense, posso fazer o front e backend, Python, Java, JavaScript, React, Node, TypeScript são algumas das linguagens que sei, umas bem e outras nem tanto"}/>
      <Panel/>
      <Fun/>
    </div>
  );
}

export default App;
