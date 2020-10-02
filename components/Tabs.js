import axios from "axios";

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabsEntryPoint = document.querySelector(".topics");
const tabsMaker = (tab) => {
  let topic = document.createElement("div");
  topic.classList.add("tab");
  topic.textContent = tab;

  return topic;
};

const getTabTopics = () => {
  axios
    .get("https://lambda-times-api.herokuapp.com/topics")
    .then((response) => {
      let tabs = response.data.topics;
      tabs.forEach((tab) => {
        let newTab = tabsMaker(tab);
        tabsEntryPoint.appendChild(newTab);
      });
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};
getTabTopics();
