import logo from './logo.svg';
import './App.css';
import holberton_logo from './holberton_logo.jpg'
import { getFullYear, getFooterCopy } from './utils';

function App() {
    return (
        <>
            <div className="App-header">
                <img src={holberton_logo} />
                <h1>School dashboard</h1>
            </div>
            <div className="App-body">
                <p>Login to access the full dashboard</p>
                <form>
                    <label>Email:
                        <input type="email"></input>
                    </label>
                    <label>password:
                        <input type="password"></input>
                    </label>
                    <button>OK</button>
                </form>
            </div>
            <div className="App-footer">
                <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
            </div>
        </>
    );
}

export default App;
