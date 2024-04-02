/*
  - function that loads initial page with sidebar
  - needs to check for local storage 
  - starts on inbox page
*/
//import createHeader from "./UI/header";
import sidebar from "./UI/sidebar";
import main from "./UI/main";

function initialLoad() {
  //localStorage.clear();
  sidebar;
  main;
}

export default initialLoad;
