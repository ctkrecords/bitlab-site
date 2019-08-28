$(function () {
  $(document).scroll(function () {
	  var $nav = $(".fixed-top");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});
});

function cursos_desarrollo(){
	var ce = document.getElementById("curso_estrategia").style.display;
	var cd = document.getElementById("curso_design").style.display;
	var cem = document.getElementById("curso_emprendimiento").style.display;
	var cdp = document.getElementById("curso_design_pay").style.display;
	var cemp = document.getElementById("curso_emprendimiento_pay").style.display;
	if(ce=='block'){
		document.getElementById("curso_estrategia").style.display='none';
		document.getElementById("curso_design").style.display='none';
		document.getElementById("curso_emprendimiento").style.display='none';
		document.getElementById("curso_design_pay").style.display='none';
		document.getElementById("curso_emprendimiento_pay").style.display='none';
	}else{
		document.getElementById("curso_estrategia").style.display='block';
		document.getElementById("curso_design").style.display='block';
		document.getElementById("curso_emprendimiento").style.display='block';
		document.getElementById("curso_design_pay").style.display='block';
		document.getElementById("curso_emprendimiento_pay").style.display='block';
	}
}

function cursos_emprendimiento(){
	console.log("click");
	var cde = document.getElementById("curso_desarrollo").style.display;
	var cd = document.getElementById("curso_design").style.display;
	var cem = document.getElementById("curso_emprendimiento").style.display;
	var cdp = document.getElementById("curso_design_pay").style.display;
	var cemp = document.getElementById("curso_emprendimiento_pay").style.display;
	if(cd=='block'){
		document.getElementById("curso_estrategia").style.display='none';
		document.getElementById("curso_desarrollo").style.display='none';
		document.getElementById("curso_design").style.display='none';
		document.getElementById("curso_design_pay").style.display='none';
	}else{
		document.getElementById("curso_estrategia").style.display='block';
		document.getElementById("curso_design").style.display='block';
		document.getElementById("curso_design_pay").style.display='block';
		document.getElementById("curso_desarrollo").style.display='block';
	}
}