
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

var ifmProcessList=[
    "https://www.lucidchart.com/documents/view/9be7c6f1-b7a1-4c59-8fe7-3a6cb0354a6f/0",
    "https://www.lucidchart.com/documents/view/883d75f6-6228-4136-9d47-5c5e016a7baf/0",
];

var pdfProcessList=[
    "****.pdf",
    "****.pdf",
];

var titleProcessList=[
    "Delphi Technologies Business Processes : TAF.",
    "Delphi Technologies Business Processes : OTAF.",
    "Delphi Technologies Business Processes : LVAF.",
    "Delphi Technologies Business Processes : OTAF.",
    "Delphi Technologies Business Processes : OTAF.",
    "Delphi Technologies Business Processes : OTAF.",
];

function ifmArray(procId) {
    document.getElementById("mainTitle").innerHTML=titleProcessList[procId];    
}

function ifmArray(procId) {
    document.getElementById("mainTitle").innerHTML=titleProcessList[procId];    
}