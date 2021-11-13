import React from "react";
import styles from "./styles.less";

const Dropdown = ({ categories, setChoiceCategory, title }) => {
  /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
  const toggleDropdown = () => {
    document
      .getElementById(`${styles.myDropdown}`)
      .classList.toggle(`${styles.show}`);
  };

  const itemSelected = (e, item) => {
    setChoiceCategory(item);
  };

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={() => toggleDropdown()} className={styles.dropbtn}>
        {title}
      </button>
      <div id="myDropdown" className="dropdown-content">
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
