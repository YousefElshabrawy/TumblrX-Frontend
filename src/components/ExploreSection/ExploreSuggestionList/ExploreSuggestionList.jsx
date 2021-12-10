import React from "react";
import styles from "./scss/ExploreSuggestionList.module.scss";
import img from "../../../assets/Images/icons8-chevron-right-60.png";
import img1 from "../../../assets/Images/icons8-chevron-right-60.png";

import ExploreSuggestionListCard from "./ExploreSuggestionListCard";
function ExploreSuggestionList() {
  /**
   * this function handle the click on the arrows on the suggestion list
   * it just scrolls the suggestion list to right or left .
   *
   * @type {function}
   * @param {*} event
   * @returns {void}
   */
  const onArrowClick = (event) => {
    let header = document.querySelector(`.${styles["suggestion-list"]}`);
    let after = document.querySelector(`.${styles["after"]}`);
    console.log(event.target.parentElement);
    if (event.target.parentElement === after) {
      header.scrollLeft += 652;
      console.log("after");
    } else {
      header.scrollLeft -= 652;
      console.log("before");
    }
  };
  return (
    <div className={styles["suggestion-list"]}>
      <div className={styles["before"]} onClick={onArrowClick}>
        <img src={img} alt="" />
      </div>
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />
      <ExploreSuggestionListCard />

      <div className={styles["after"]} onClick={onArrowClick}>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default ExploreSuggestionList;
