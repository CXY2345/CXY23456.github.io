window.onload=function(){
	var browse = window.navigator.appName.toLowerCase();
var MyMar;
var speed = 1; //�ٶȣ�Խ��Խ��
var spec = 1; //ÿ�ι����ļ��, Խ�����Խ��
var minOpa = 50; //�˾���Сֵ
var maxOpa = 100; //�˾����ֵ
var spa = 2; //����ͼ���򲹳���ֵ
var w = 0;
spec = (browse.indexOf("microsoft") > -1) ? spec : ((browse.indexOf("opera") > -1) ? spec*10 : spec*20);
function $(e) {return document.getElementById(e);}
function goleft() {$('photos').scrollLeft -= spec;}
function goright() {$('photos').scrollLeft += spec;}
function setOpacity(e, n) {
    if (browse.indexOf("microsoft") > -1) ;
}
$('goleft').style.cursor = 'pointer';
$('goright').style.cursor = 'pointer';
$('mainphoto').onmouseover = function() {setOpacity(this, maxOpa);}
$('mainphoto').onmouseout = function() {setOpacity(this, minOpa);}
$('mainphoto').onclick = function() {location = this.getAttribute('name');}
$('goleft').onmouseover = function() {this.src = 'images/left-arrow2.gif'; MyMar=setInterval(goleft, speed);}
$('goleft').onmouseout = function() {this.src = 'images/left-arrow.gif'; clearInterval(MyMar);}
$('goright').onmouseover = function() {this.src = 'images/right-arrow2.gif'; MyMar=setInterval(goright,speed);}
$('goright').onmouseout = function() {this.src = 'images/right-arrow.gif'; clearInterval(MyMar);}
window.onload = function() {
    setOpacity($('mainphoto'), minOpa);
    var rHtml = '';
    var p = $('showArea').getElementsByTagName('img');
    for (var i=0; i<p.length; i++) {
        w += parseInt(p[i].getAttribute('width')) + spa;
        setOpacity(p[i], minOpa);
        p[i].onclick = function() {location = this.getAttribute('name');}
        p[i].onmouseover = function() {
            setOpacity(this, maxOpa);
            $('mainphoto').src = this.getAttribute('rel');
            $('mainphoto').setAttribute('name', this.getAttribute('name'));
            setOpacity($('mainphoto'), maxOpa);
        }
        p[i].onmouseout = function() {
            setOpacity(this, minOpa);
            setOpacity($('mainphoto'), minOpa);
        }
        rHtml += '<img src="' + p[i].getAttribute('rel') + '" width="0" height="0" alt="" />';
    }
   
    var rLoad = document.createElement("div");
    $('photos').appendChild(rLoad);
    rLoad.style.width = "1px";
    rLoad.style.height = "1px";
    rLoad.style.overflow = "hidden";
    rLoad.innerHTML = rHtml;
}	   
}
