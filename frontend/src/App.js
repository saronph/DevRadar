// Componente = Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade = Informações que um componente Pai passa para o componente Filho
// Estado = Informações mantidas pelo componente (Lembrar: imutabilidade)
import React from 'react';

import './global.css';
import './App.css';

function App() { 
  return (
    <div id="app">
      <aside>

      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
