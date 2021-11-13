import "./App.less";
import api from "./services/api";
import { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import TextBox from "./components/Textbox";

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
    <div className="app">
      <div className="app__header">The Chuck Noris jokes</div>
      <div className="app__container">
        <Dropdown
          categories={categories}
          setChoiceCategory={setChoiceCategory}
          title={"Select the category"}
        />
        <TextBox
          joke={joke.value}
          img={<img src={joke.icon_url} alt="Chuck Norris icon" />}
        />
      </div>
    </div>
  );
}

export default App;
