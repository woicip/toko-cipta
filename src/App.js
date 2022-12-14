import { Routes, Route } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import './App.css';

// Context
import TokoState from './Context/TokoState';

// Components
import Home from './Components/Home/Home';
import PaymentMethod from './Components/PaymentMethod/PaymentMethod';
import CashPayment from './Components/CashPayment/CashPayment';
import BankTransferPayment from './Components/BankTransferPayment/BankTransferPayment';
import PaymentSuccess from './Components/PaymentSuccess/PaymentSuccess';

function App(props){

  return (
    <TokoState>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paymentMethod" element={<PaymentMethod />} />
            <Route path="/cashPayment" element={<CashPayment />} />
            <Route path="/bankTransferPayment" element={<BankTransferPayment />} />
            <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        </Routes>
      </main>
    </TokoState>
  );
}

export default App;
