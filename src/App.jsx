import { FaCalculator, FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";
import { useState } from 'react';
import './App.css';

function App() {
  const [operator, setOperator] = useState('addition');
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const n1 = parseFloat(number1);
    const n2 = parseFloat(number2);

    let res;

    switch (operator) {
      case 'addition':
        res = n1 + n2;
        break;
      case 'soustraction':
        res = n1 - n2;
        break;
      case 'multiplication':
        res = n1 * n2;
        break;
      case 'division':
        res = n2 !== 0 ? n1 / n2 : 'Impossible (division par 0)';
        break;
      default:
        res = 0;
    }

    setResult(res);
  };

  const renderOperatorIcon = () => {
    switch (operator) {
      case 'addition':
        return <FaPlus />;
      case 'soustraction':
        return <FaMinus />;
      case 'multiplication':
        return <FaTimes />;
      case 'division':
        return <FaDivide />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
    <h1>
      <FaCalculator style={{ marginRight: "8px" }} />
      Calculatrice
    </h1>

    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <label>
          Opération :
          <div className="input-icon">
            {renderOperatorIcon()}
            <select
              value={operator}
              onChange={(e) => setOperator(e.target.value)}
            >
              <option value="addition">+ (addition)</option>
              <option value="soustraction">- (soustraction)</option>
              <option value="multiplication">× (multiplication)</option>
              <option value="division">÷ (division)</option>
            </select>
          </div>
        </label>
      </div>

      <input
        type="number"
        name="number1"
        placeholder="Number 1"
        value={number1}
        onChange={(e) => setNumber1(e.target.value)}
        required
      />

      <input
        type="number"
        name="number2"
        placeholder="Number 2"
        value={number2}
        onChange={(e) => setNumber2(e.target.value)}
        required
      />

      <button type="submit">Valider</button>
    </form>

      {result !== null && (
        <div className="result">
          Résultat : <strong>{result}</strong>
        </div>
      )}
    </div>
  );
}

export default App;