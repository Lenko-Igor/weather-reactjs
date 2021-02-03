import React, {useState} from 'react'
import ListCitys from './components/ListCitys.js'
import Content from './components/Content.js'
import Context from './context.js'
import Header from './components/Header.js'

function App() {
  const PLACES = [
      { name: "Минск",   cityID: "625144"},
      { name: "Гомель",  cityID: "627907"},
      { name: "Брест",   cityID: "629634"},
      { name: "Гродно",  cityID: "627904"},
      { name: "Витебск", cityID: "620127"},
      { name: "Могилев", cityID: "625665"},
  ]

  const [activePlace, setActivPlace] = useState(0)
  
  function removeContent(index){
    setActivPlace(index)
  }


  return (
    <Context.Provider value={{removeContent, activePlace}}>
      <div className="container">
        <Header />
        <div className='wrapper'>
          <ListCitys citys={PLACES}/>
          <Content city={PLACES[activePlace].name}
                   cityID={PLACES[activePlace].cityID}
                   key={activePlace}
          />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
