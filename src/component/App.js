import React from 'react';
import Welcome from '../component/pages/welcome'
import { UserProvider } from '../component/user';

function App() {

  const user = { name: 'Tania', loggedIn: true }
  const arry = [
    { name: "saroj", age: 19 },
    { name: "sandeep", age: 24 },
    { name: "raju", age: 23 },
    { name: "pappu", age: 12 },
    { name: "ajeet", age: 23 },
    { name: "sachin", age: 12 },
  ]

  return (
    <UserProvider value={user}>
      <div className="App">
        <h1>welcome to react app</h1>
        <Welcome />
      </div>
    </UserProvider>
  );
}np

export default App;
