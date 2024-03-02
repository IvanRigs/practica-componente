import './App.css';
import Menu from './components/Menu/Menu'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='menu'>
        <Menu></Menu>
      </div>
      <div className="Card">
        <Card title={"Pikachu"} description={"Pokémon de tipo Eléctrico de la primera generación, número 25 en el Pokédex nacional."}></Card>
        <Card title={"Charmander"} description={"Un pequeño lagarto de fuego con una llama en la punta de su cola. Es el Pokémon inicial de tipo Fuego en la región de Kanto."}></Card>
        <Card title={"Bulbasaur"} description={" Un Pokémon de tipo Planta/Veneno con una planta brotando de su lomo. Es el Pokémon inicial de tipo Planta en la región de Kanto."}></Card>
        <Card title={"Squirtle"} description={"Un pequeño Pokémon tortuga de tipo Agua. Puede lanzar poderosos chorros de agua desde su boca."}></Card>
        <Card title={"Eevee"} description={"Un Pokémon de tipo Normal con la capacidad de evolucionar en múltiples formas, dependiendo de diversos factores."}></Card>
        <Card title={"Mewtwo"} description={"Un Pokémon legendario de tipo Psíquico creado artificialmente mediante experimentación genética. Es uno de los Pokémon más poderosos y temidos."}></Card>
        <Card title={"Gyarados"} description={"Un Pokémon de tipo Agua/Volador conocido por su aspecto intimidante y su capacidad para desatar furiosos ataques. Evoluciona a partir de Magikarp."}></Card>
        <Card title={"Snorlax"} description={"Un Pokémon de tipo Normal conocido por su gran tamaño y su amor por dormir y comer. Puede bloquear caminos enteros cuando está profundamente dormido."}></Card>
      </div>
      </header>
    </div>
  );
}

export default App;
