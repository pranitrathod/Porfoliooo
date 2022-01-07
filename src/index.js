import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

var Change_Visitors_text=document.querySelector(".visitors");
var visitCounts=localStorage.getItem('on_load_counter');

if(visitCounts==null){
  
    visitCounts=0;
}
visitCounts++;

localStorage.setItem('on_load_counter',visitCounts);

Change_Visitors_text.innerHTML="Visitors : "+visitCounts;