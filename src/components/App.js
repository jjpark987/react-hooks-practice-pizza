import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [form, setForm] = useState({
    topping: "",
    size: "Small",
    vegetarian: false
  })
  const [currentPizza, setCurrentPizza] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(d => setPizzas(d))
  }, [])

  function handleEditClick(pizza) {
    setForm({
      topping: pizza.topping,
      size: pizza.size,
      vegetarian: pizza.vegetarian
    })
    setCurrentPizza(pizza)
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:3001/pizzas/${currentPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topping: form.topping,
        size: form.size,
        vegetarian: form.vegetarian
      })
    })
    .then(r => r.json())
    .then(d => setPizzas(pizzas.map(pizza => {
      if(pizza.id === currentPizza.id) {
        return {
          topping: form.topping,
          size: form.size,
          vegetarian: form.vegetarian
        } 
      } else {
        return pizza
      }
    })))
  }

  return (
    <>
      <Header />
      <PizzaForm form={form} onSetForm={setForm} onHandleSubmit={handleSubmit} />
      <PizzaList pizzas={pizzas} onHandleEditClick={handleEditClick} />
    </>
  );
}

export default App;
