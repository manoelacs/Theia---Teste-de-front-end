import React from "react";
import "./styles.less";

const Dropdown = ({ categories, setChoiceCategory, title }) => {
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  const toggleDropdown = () => {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("icon").classList.toggle("rotateIcon");
  };

  const itemSelected = (e, item) => {
    setChoiceCategory(item);
  };

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown__button")) {
      var dropdowns = document.getElementsByClassName("dropdown__content");

      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
          document.getElementById("icon").classList.toggle("rotateIcon");
        }
      }
    }
  };

  return (
    <div className="dropdown">
      <div className="dropdown__wrapper">
        {title}
        <div className="dropdown__button__container">
          <img
            onClick={() => toggleDropdown()}
            className="dropdown__button"
            id="icon"
            src="icons/down-arrow.png"
            alt="arrow down"
          />
        </div>
      </div>

      <div id="myDropdown" className="dropdown__content">
        {categories.map((item) => {
          return (
            <p onClick={(e) => itemSelected(e, item)} name={item}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default Dropdown;
