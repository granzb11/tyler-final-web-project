/*Menu buttton togglers */
//ToTop Scroll Button
window.onscroll=function(){scrollToTopBtn();}
function scrollToTopBtn()
{
if(document.body.scrollTop>500||document.documentElement>500)
{
document.getElementById("scrollTopId").style.display="block";
}
else{
document.getElementById("scrollTopId").style.display="none";
}
}
function BackToTop()
{
document.body.scrollTop=0;
documentElement.body.scrollTop=0;
}
var menuFlag=0;
function openMenuBar()
{
if(menuFlag==0)
{   
document.getElementById("sideMenuItems").style.width="300px";
document.getElementById("bodyStarts").style.marginLeft="300px";
document.body.style.backgroundColor="rgba(0,0,0,0.4)";

menuFlag=1;
}
else
{
document.getElementById("sideMenuItems").style.width="0";
document.getElementById("bodyStarts").style.marginLeft="0"
document.body.style.backgroundColor="black";
menuFlag=0;
}
  
}

function closeMenuBar()
{
document.getElementById("sideMenuItems").style.width="0";
document.getElementById("bodyStarts").style.marginLeft="0"
document.body.style.backgroundColor="black";
menuFlag=0;
}
