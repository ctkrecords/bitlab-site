$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});


function cursos_desarrollo(){
	console.log("click");
	var cde = document.getElementById("curso_desarrollo").style.display;
	var ce = document.getElementById("curso_estrategia").style.display;
	var cd = document.getElementById("curso_design").style.display;
	var cem = document.getElementById("curso_emprendimiento").style.display;
	var cdp = document.getElementById("curso_design_pay").style.display;
	var cemp = document.getElementById("curso_emprendimiento_pay").style.display;
	if((ce && cd && cem && cdp && cemp)=='block'){
		document.getElementById("curso_estrategia").style.display='none';
		document.getElementById("curso_design").style.display='none';
		document.getElementById("curso_emprendimiento").style.display='none';
		document.getElementById("curso_design_pay").style.display='none';
		document.getElementById("curso_emprendimiento_pay").style.display='none';
		document.getElementById("curso_desarrollo").style.display='block';
	}else{
		document.getElementById("curso_estrategia").style.display='block';
		document.getElementById("curso_design").style.display='block';
		document.getElementById("curso_emprendimiento").style.display='block';
		document.getElementById("curso_design_pay").style.display='block';
		document.getElementById("curso_emprendimiento_pay").style.display='block';
	}
}

function cursos_emprendimiento(){
	var cde = document.getElementById("curso_desarrollo").style.display;
	var cd = document.getElementById("curso_design").style.display;
	var ce = document.getElementById("curso_estrategia").style.display;
	var cem = document.getElementById("curso_emprendimiento").style.display;
	var cdp = document.getElementById("curso_design_pay").style.display;
	var cemp = document.getElementById("curso_emprendimiento_pay").style.display;
	if((ce && cd  && cdp && cde)=='block'){
		document.getElementById("curso_estrategia").style.display='none';
		document.getElementById("curso_desarrollo").style.display='none';
		document.getElementById("curso_design").style.display='none';
		document.getElementById("curso_design_pay").style.display='none';
		document.getElementById("curso_emprendimiento_pay").style.display='block';
		document.getElementById("curso_emprendimiento").style.display='block';
	}else{
		document.getElementById("curso_estrategia").style.display='block';
		document.getElementById("curso_design").style.display='block';
		document.getElementById("curso_design_pay").style.display='block';
		document.getElementById("curso_desarrollo").style.display='block';
	}
}

function cursos_estrategia(){
	var cde = document.getElementById("curso_desarrollo").style.display;
	var ce = document.getElementById("curso_estrategia").style.display;
	var cd = document.getElementById("curso_design").style.display;
	var cem = document.getElementById("curso_emprendimiento").style.display;
	var cdp = document.getElementById("curso_design_pay").style.display;
	var cemp = document.getElementById("curso_emprendimiento_pay").style.display;
	if((cde && cd && cem && cdp && cemp)=='block'){
		document.getElementById("curso_estrategia").style.display='block';
		document.getElementById("curso_design").style.display='none';
		document.getElementById("curso_emprendimiento").style.display='none';
		document.getElementById("curso_design_pay").style.display='none';
		document.getElementById("curso_emprendimiento_pay").style.display='none';
		document.getElementById("curso_desarrollo").style.display='none';
	}else{
		document.getElementById("curso_desarrollo").style.display='block';
		document.getElementById("curso_design").style.display='block';
		document.getElementById("curso_emprendimiento").style.display='block';
		document.getElementById("curso_design_pay").style.display='block';
		document.getElementById("curso_emprendimiento_pay").style.display='block';
	}
}

function cursos_design(){
	var cde = document.getElementById("curso_desarrollo").style.display;
	var cd = document.getElementById("curso_design").style.display;
	var ce = document.getElementById("curso_estrategia").style.display;
	var cem = document.getElementById("curso_emprendimiento").style.display;
	var cdp = document.getElementById("curso_design_pay").style.display;
	var cemp = document.getElementById("curso_emprendimiento_pay").style.display;
	if((cde && ce  && cem && cemp)=='block'){
		document.getElementById("curso_estrategia").style.display='none';
		document.getElementById("curso_desarrollo").style.display='none';
		document.getElementById("curso_design").style.display='block';
		document.getElementById("curso_design_pay").style.display='block';
		document.getElementById("curso_emprendimiento_pay").style.display='none';
		document.getElementById("curso_emprendimiento").style.display='none';
	}else{
		document.getElementById("curso_estrategia").style.display='block';
		document.getElementById("curso_emprendimiento").style.display='block';
		document.getElementById("curso_emprendimiento_pay").style.display='block';
		document.getElementById("curso_desarrollo").style.display='block';
	}
}