import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

var Change_Visitors_text=document.querySelector(".visitors");
var visitCounts=localStorage.getItem("page_view");

if (visitCounts)
{
    visitCount=Number(visitCounts)+1;
    localStorage.getItem("page_view",visitCounts);

}
else{
    visitCounts=1;
    localStorage.getItem("page_view",visitCounts);
}

Change_Visitors_text.innerHTML="Visitors:",visitCounts;