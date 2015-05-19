
i=0;
var images_js=new Array(); //new Array() - obiavili NOVII massiv
images_js[0]="slider/1.jpg";
images_js[1]="slider/2.jpg";
images_js[2]="slider/3.jpg";
images_js[3]="slider/4.jpg";
images_js[4]="slider/5.jpg";

function f1() {
i++;
if(i==images_js.length){i=0;} //images_js.length - svoistvo dlini massiva

document.images[0].src=images_js[i];

setTimeout('f1();', 6000);
}

/*function change(input)
	    {
   input.value =   input.value != 'stop' ?  'stop' : 'continue'
	    }

function f2() {
if(document.form12.b_stop.value=="stop"){
document.form12.b_start.disabled=false;
clearTimeout(id14);
	
	
}
else {
document.form12.b_start.disabled=false;
document.form12.b_stop.value="stop";
}




}*/
