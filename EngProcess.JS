
/*  --  TAB CONTROL  --  */
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="blue";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#ffffff');
console.log(tabButtons);
console.log(tabPanels);

var tabBut=document.querySelectorAll(".tabContainer .tabPanel button");
var tabPan=document.querySelectorAll(".tabContainer  .tabtabPanel");

function showtabPanel(panelId,colorC) {
    tabBut.forEach(function(nod){
        nod.style.backgroundColor="";
        nod.style.color="";
    });
    tabBut[panelId].style.backgroundColor=colorC;
    tabBut[panelId].style.color="blue";
    tabPan.forEach(function(nod){
        nod.style.display="none";
    });
    tabPan[panelId].style.display="block";
    tabPan[panelId].style.backgroundColor=colorC;
}
showtabPanel(0,'#ffffff');