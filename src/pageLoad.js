/*
  - function that loads initial page with sidebar
  - needs to check for local storage 
  - starts on inbox page
*/
import createHeader from "./UI/header";
import createSidebar from "./UI/sidebar";
import createMain from "./UI/main";

function initialLoad() {
  createHeader();
  createSidebar();
  createMain();
}

export default initialLoad;
