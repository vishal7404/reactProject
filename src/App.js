import React from 'react'
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import { useWeb3React } from "@web3-react/core";
import { injected } from "./wallet/Connect"
import web3 from "web3";
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
const App = () => {
  const { active, account, library, activate, deactivate } = useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div>
      {/* <RegisterPage /> */}
      <LoadingSpinner />
    </div>
  )
}

export default App