import logo from './logo.svg';
import './App.css';
import Servico from './components/Servico';

function App() {
  return (
    <div className="App">
      
      <div>
        <header>
          <nav class="navbar bg-light">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={logo} alt="Logo" width="40" height="34" class="d-inline-block align-text-top" />
                Cadastro de Serviços
              </a>
            </div>
          </nav>
        </header>

        <div className="container-sm">
          <Servico/>
        </div>



      </div>

    </div>
  );
}

export default App;
