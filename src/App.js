import "./App.css";
import api from "./services/api";
import { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [categories, setCategories] = useState([]);
  const [choiceCategory, setChoiceCategory] = useState("animal");
  const [joke, setJoke] = useState({});
  console.log(choiceCategory, joke);

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get(`random?category=${choiceCategory}`)
      .then((response) => setJoke(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [choiceCategory]);

  console.log(categories);

  return (
    <div className="App">
      <div>Selecione uma categoria</div>
      <Dropdown categories={categories} setChoiceCategory={setChoiceCategory} />
      <img src={joke.icon_url} alt="" />
      <div>{joke.value}</div>
    </div>
  );
}

export default App;
