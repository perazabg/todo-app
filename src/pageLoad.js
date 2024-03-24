/*
  - function that loads initial page with sidebar
  - needs to check for local storage 
  - starts on inbox page
*/
import createHeader from "./header";
import createSidebar from "./sidebar";
import createMain from "./main";

function initialLoad() {
  createHeader();
  createSidebar();
  createMain();
}

export default initialLoad;
