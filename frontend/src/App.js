// Componente = Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Propriedade = Informações que um componente Pai passa para o componente Filho
// Estado = Informações mantidas pelo componente (Lembrar: imutabilidade)
import React, { useState,useEffect } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() { 
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number" name="latitude" id="latitude" required value={latitude} />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" name="longitude" id="longitude" required value={longitude} />
            </div>
          </div>

        <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54987514?s=460&v=4" alt="Saron"/>
              <div className="user-info">
                <strong>Saron Medeiros Philippi</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Learning React, NodeJS and React Native from @Rocketseat</p>
            <a href="https://github.com/saronph">Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54987514?s=460&v=4" alt="Saron"/>
              <div className="user-info">
                <strong>Saron Medeiros Philippi</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Learning React, NodeJS and React Native from @Rocketseat</p>
            <a href="https://github.com/saronph">Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54987514?s=460&v=4" alt="Saron"/>
              <div className="user-info">
                <strong>Saron Medeiros Philippi</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Learning React, NodeJS and React Native from @Rocketseat</p>
            <a href="https://github.com/saronph">Perfil Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/54987514?s=460&v=4" alt="Saron"/>
              <div className="user-info">
                <strong>Saron Medeiros Philippi</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Learning React, NodeJS and React Native from @Rocketseat</p>
            <a href="https://github.com/saronph">Perfil Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
