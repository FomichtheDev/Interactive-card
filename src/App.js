import React from 'react';
import './App.css';
import Form from "./formComponent/Form";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
            <Form/>
        </Layout>
    </div>
  );
}

export default App;
