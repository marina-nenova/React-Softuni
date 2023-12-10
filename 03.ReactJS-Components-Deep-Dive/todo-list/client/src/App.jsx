import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoList from "./components/TodoList";


function App() {
  return (
    <>
      <Header></Header>
      

      {/* <!-- Main content --> */}
      <main className="main">
        <TodoList></TodoList>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
