//more javascript from http://cfan.net.cn
var disappeardelay=50  //menu disappear speed onMouseout (in miliseconds)
var enableanchorlink=0 //Enable or disable the anchor link when clicked on? (1=e, 0=d)
var hidemenu_onclick=1 //hide menu when user clicks within menu? (1=yes, 0=no)

/////No further editting needed

var ie5=document.all
var ns6=document.getElementById&&!document.all

function getposOffset(what, offsettype){
var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
var parentEl=what.offsetParent;
while (parentEl!=null){
totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
parentEl=parentEl.offsetParent;
}
return totaloffset;
}

function showhide(obj, e, visible, hidden){
if (ie5||ns6)
dropmenuobj.style.left=dropmenuobj.style.top=-500
if (e.type=="click" && obj.visibility==hidden || e.type=="mouseover")
obj.visibility=visible
else if (e.type=="click")
obj.visibility=hidden
}

function iecompattest(){
return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(obj, whichedge){
var edgeoffset=0
if (whichedge=="rightedge"){
var windowedge=ie5 && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
dropmenuobj.contentmeasure=dropmenuobj.offsetWidth
if (windowedge-dropmenuobj.x < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure-obj.offsetWidth
}
else{
var windowedge=ie5 && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
dropmenuobj.contentmeasure=dropmenuobj.offsetHeight
if (windowedge-dropmenuobj.y < dropmenuobj.contentmeasure)
edgeoffset=dropmenuobj.contentmeasure+obj.offsetHeight
}
return edgeoffset
}

function dropdownmenu(obj, e, dropmenuID){
if (window.event) event.cancelBubble=true
else if (e.stopPropagation) e.stopPropagation()
if (typeof dropmenuobj!="undefined") //hide previous menu
dropmenuobj.style.visibility="hidden"
clearhidemenu()
if (ie5||ns6){
obj.onmouseout=delayhidemenu
dropmenuobj=document.getElementById(dropmenuID)
if (hidemenu_onclick) dropmenuobj.onclick=function(){dropmenuobj.style.visibility='hidden'}
dropmenuobj.onmouseover=function(){
	clearhidemenu();
	obj.parentNode.className="current";
}
dropmenuobj.onmouseout=ie5? function(){ obj.parentNode.className="";dynamichide(event)} : function(event){ obj.parentNode.className="";dynamichide(event)}
showhide(dropmenuobj.style, e, "visible", "hidden")
dropmenuobj.x=getposOffset(obj, "left")
dropmenuobj.y=getposOffset(obj, "top")
dropmenuobj.style.left=dropmenuobj.x-clearbrowseredge(obj, "rightedge")+"px"
dropmenuobj.style.top=dropmenuobj.y-clearbrowseredge(obj, "bottomedge")+obj.offsetHeight+"px"
}
return clickreturnvalue()
}

function clickreturnvalue(){
if ((ie5||ns6) && !enableanchorlink) return false
else return true
}

function contains_ns6(a, b) {
while (b.parentNode)
if ((b = b.parentNode) == a)
return true;
return false;
}

function dynamichide(e){
if (ie5&&!dropmenuobj.contains(e.toElement))
delayhidemenu()
else if (ns6&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
delayhidemenu()
}

function delayhidemenu(){
delayhide=setTimeout("dropmenuobj.style.visibility='hidden'",disappeardelay)
}

function clearhidemenu(){
if (typeof delayhide!="undefined")
clearTimeout(delayhide)
}

function Checkthisfrom(){
var obj=document.myform;
if (obj.Name.value =="")
	{
	alert("Please file in you Name!");
	obj.Name.focus();
	return false;
	}
if (obj.Address1.value=="")	
    {
	alert("Please file in Address1!");
	obj.Address1.focus();
	return false;
	}
if (obj.Address2.value=="")	
    {
	alert("Please file in Address1!");
	obj.Address2.focus();
	return false;
	}
if (obj.City.value=="")	
    {
	alert("Please file in City!");
	obj.City.focus();
	return false;
	}
if (obj.State.value=="")	
    {
	alert("Please file in State!");
	obj.State.focus();
	return false;
	}
if (obj.Post_Code.value=="")	
    {
	alert("Please file in Post Code!");
	obj.Post_Code.focus();
	return false;
	}
if (obj.Country.value=="")	
    {
	alert("Please file in Country!");
	obj.Country.focus();
	return false;
	}
if (obj.Phone.value=="")	
    {
	alert("Please file in Phone!");
	obj.Phone.focus();
	return false;
	}
if (obj.Fax.value=="")	
    {
	alert("Please file in Fax!");
	obj.Fax.focus();
	return false;
	}
var strText=obj.Email.value;
strReg=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/i;                
r=strText.search(strReg);
if (obj.Email.value =="")
	{
	alert("Please file in Email!");
	obj.Email.focus();
	return false;
	}
if(r==-1)
    {
    alert("Email Format Error!");   
	obj.Email.focus();
	return false;
    }
if (obj.words.value=="")	
    {
	alert("Please file in words!");
	obj.words.focus();
	return false;
	}
}