var TRM = {};
var tempURL = window.location.href.split(':')[0]+'://'+window.location.href.split('http://')[1].split('https://')[0].split('/')[0];

$(function(){
  
  //Variables
  
	var tempURL = window.location.href.split(':')[0]+'://'+window.location.href.split('http://')[1].split('https://')[0].split('/')[0];
	
	var NroPagina = 1;

/* B * A * S * E */
	if (window.PIE) {
		$('.radius').each(function() {
			PIE.attach(this);
		});
	}

	/* Fecha footer*/
	var fecha = new Date();
	var ano =fecha.getFullYear();
	$('#id_year').text(ano);

	/* Menu responsive */

	//se clona el navlist para poder tener mas flexibilidad y control
	$('.nav-list').clone().appendTo('body').insertAfter('footer').addClass('menu-responsive').removeClass('nav-list');

	$('.lang').clone().appendTo('.menu-responsive').insertBefore('.menu-list').wrap('<ul class="wrap-lang"></ul>');
	$('.clon-responsive-1').clone().prependTo('.menu-responsive .menu-list');
	$('.clon-responsive-2').clone().appendTo('.menu-responsive .menu-list');
	function menu_responsive(menu){
		var alto_panta = $(window).height();
		$('.r-overlay').css('height', alto_panta).animate({opacity: 0.8},400);
		$(menu).height(alto_panta).animate({
			width: '200px'
			},{queue:false, duration: 300});
		// $('.nav-mobile').hide();
		setTimeout( function() {
			$('.nav-mobile-close').show();
		},300);
	}

	$('.nav-mobile').click(function(e){
		e.preventDefault();
		menu_responsive('.menu-responsive');
	});


	// funcion  para cerrar menu responsive
	function cerrar_nav() {
		$('.menu-responsive, .submenu-productos').animate({
			width: 0
		}, {queue:false, duration: 300,  complete: function() {
			$('.r-overlay').css('height', '0%').animate({
				opacity: 0
			}, 200);
		}});
		$('.nav-mobile-close').hide();
		// $('.nav-mobile').show();
	};

	//click en boton cerrar y overlay
	$('.w-nav').on('click', '.nav-mobile-close', function(event) {
		event.preventDefault();
		cerrar_nav()
	});
	$('.r-overlay').click(function() {
		cerrar_nav()
		cerrar_submenu()
	});


	//para cerrar el menu responsive en caso hagan resize, o giren la tablet o celular con el menu responsive abierto
		//detectando moviendo de ipad y tablet
	function readDeviceOrientation() {
	    switch (window.orientation) {
	    case 0:
	        break;
	    case 180:
	        break;
	    case -90:
	        break;
	    case 90:
	        break;
	    }
	}
	//detectando tablet, celular o ipad
	dispositivo_movil = $.browser.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))

	if ( dispositivo_movil ) {
			function readDeviceOrientation() {
			    if (Math.abs(window.orientation) === 90) {
			        // Landscape
			      	cerrar_nav();
			      	cerrar_submenu()
			    } else {
			    	// Portrait
			    	cerrar_nav();
			    	cerrar_submenu()
			    }
			}
			window.onorientationchange = readDeviceOrientation;
	}else{
		$(window).resize(function(event) {
			var estadomenu = $('.menu-responsive').width();
			if(estadomenu != 0){
				cerrar_nav()
			}
		});
	};


/* F * I * N * B * A * S * E */

	$('.item-serv a').each(function(index, val) {
		 if($(this).find('img').length === 0 ){
		 	$(this).find('.cho').addClass('top')
		 }else{
		 	$(this).find('.cho').addClass('bottom')
		 }
	});
	 var count = $('.item-serv .cnt a').length;
	 if(count === 4){
	 	$('.item-serv .cnt a').addClass('wi-4');
	 }
	 if(count === 3){
	 	$('.item-serv .cnt a').addClass('wi-3');
	 	$('.wi-3:nth-child(3)').css("border-right","1px solid #f1f1f1");
	 }
	 if(count === 2){
	 	$('.item-serv .cnt a').addClass('wi-2');
	 }
	 if(count === 1){
	 	$('.item-serv .cnt a').addClass('wi-1');
	 }
	 $('.item-serv .ttl').click(function(event) {
	 	$('.item-serv .toggle').slideToggle();
	 });

	 $(window).resize(function(event) {
	 	$('.item-serv .toggle').removeAttr('style');
	 });
	 var countlis = $('.link-100-info ul').children().length;
	 if(countlis === 2){
	 	$('.link-100-info .item').addClass('dos');
	 	$('.link-100-info .todo-dos').addClass('todo-dos');
	 }else{
	 	$('.link-100-info .item').addClass('uno');
	 	$('.link-100-info .cnt').css("max-width","100%")
	 	$('.link-100-info .todo-uno').addClass('todo-uno');
	 }
	 $('.page-extranet .panel-col2 .ui .ui-item:nth-child(even) .hover').css("left","0");
	 $('.page-extranet .panel-col2 .ui .ui-item:nth-child(odd) .hover').css("right","0");


	 var countitem = $('.page-calidad .link-100-info .item').children().length;
	 if(countitem === 1){
	 	$('.page-calidad .link-100-info .cnt ul').addClass('no-after');
	 }else{
	 	$('.page-calidad .link-100-info .cnt ul').addClass('si-after');
	 }
	 $('.page-noticias .principales .cnt').children().eq(2).addClass('borrar')
	 $('.flecha-bajar[href*=#]').click(function() {
	if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')&& location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
			var targetOffset = $target.offset().top;
			$('html,body').animate({scrollTop: targetOffset}, 1000);
			return false;
			}
		}
	});
	var hijosPanel = $('.panel-col2 .ui').children().length;
	if(hijosPanel % 2 == 0){
		var ultimo = hijosPanel-1 ;
		var penultimo = ultimo -1 ;
		$('.panel-col2 .ui').children().eq(ultimo).css('border', 'none');
		$('.panel-col2 .ui').children().eq(penultimo).css('border', 'none');
	}else{
		var ultimo = hijosPanel-1 ;
		$('.panel-col2 .ui').children().eq(ultimo).css('border', 'none');
	}


//PAGE PRESENCIA GEOGRAFICA
if($('body').hasClass('page-presencia')){
	$('.service-block').click(function(event) {
		event.preventDefault();
		$('.service-block').removeClass('active-service');
		$('.w-dpt').removeClass('active-dpt');
		$('.info-item').css('display', 'none');
		$(this).addClass('active-service')
		var existDpt = $(this).attr('data-departamento');
		if(typeof(existDpt)!==typeof(undefined)){
			//$('.info-item').css('display', 'none');
			$('.point').removeAttr('data-sede');
			var ids = $(this).data('departamento');
			var departamentos = ids.split(',');
			var nDpt = departamentos.length;
			a = 0

			for (var i = 0; i<nDpt; i++){
				var activando = departamentos[a];
				var here = $('#'+activando);
				here.addClass('active-dpt');
				var sedes = $(this).data(activando)
				lastPoint = here.find('.point');
				lastPoint.attr('data-sede', sedes).removeClass('active');
				a++;
			}
			if(lastPoint.length){
				lastPoint.addClass('active');
				var unblockPoint = lastPoint.attr('data-sede');
				var arrayUnblockPoint = unblockPoint.split(',');
				var nUnblock = arrayUnblockPoint.length;
				for(var i = 0; i<nUnblock; i++){
					var blockActual = $('#'+arrayUnblockPoint[i]);
					blockActual.css('display', 'block');
				}
			}

		}
	});
	$('.point').click(function(event) {
		$('.point').removeClass('active');
		$(this).addClass('active');
		$('.info-item').css('display', 'none');
		var takeSedes = $(this).attr('data-sede');
		var arraySedes = takeSedes.split(',');
		var nSedes =  arraySedes.length;
		b=0
		for(var i = 0; i<nSedes; i++){
			var desbloqueando = arraySedes[b];
			var actual = $('#'+desbloqueando);
			actual.css('display', 'block');
			b++;
		}

	});
	$('.service-block:nth-child(1)').click();

	//CLONANDO PARA RESPONSIVE
	$('.w-services-panel').clone().appendTo('.map-alter');
}

//PAGE FIN PRESENCIA GEOGRAFICA
	var columna = 1;
	var AnchoPantalla = $(document).width();
	function tamano(AnchoPantalla){
		if(AnchoPantalla > 1324)
			columna = 6
		else if(AnchoPantalla > 1045)
			columna = 5
		else if(AnchoPantalla > 795)
			columna = 4
		else if(AnchoPantalla > 525)
			columna = 3
		else if(AnchoPantalla <= 530 & AnchoPantalla >= 465)
			columna = 2
		else
			columna = 1
	}
	tamano(AnchoPantalla)
   
	convertir()
	$(window).resize(function(event) {
		var AnchoPantalla = $(window).width();
		tamano(AnchoPantalla);
		convertir()
	});

	//PAGE-HISTORIA
	//var columna = 6;
	function convertir(){
      
      	
      
		var countHijos = $('.content-list').children().length - 1; //21
		var entran = countHijos / columna; // 3
		var entran = parseInt(entran); // 3
		var aumentar = ((entran + 1) * columna)-countHijos;
		var func = (aumentar / columna)*100;

		if(columna == 1){
			$('.content-list .liunico').css('display', 'none');
		}else{
			$('.content-list .liunico').css("width", func +"%");
			if(countHijos % columna == 0){
				$('.content-list .liunico').css('display', 'none');
			}else{
				$('.content-list .liunico').css('display', 'block')
			}
		}

	}

	// HEADER ABSOLUTE / FIXED when focus inputs



	function headerfixed(){
		// $(document).on('focusin','input, textarea', function(){
		//     $('.header').addClass('header-absolute');
		// })
		// .on('focusout','input, textarea', function(){
		//     $('.header').removeClass('header-absolute');
		// });
		$(':input').focus(function(){
			 $('.header').addClass('header-absolute');
			 $('.w-nav').css('position', 'absolute');
		});
		$(':input').blur(function(){
			 $('.header').removeClass('header-absolute');
			 $('.w-nav').css('position', 'fixed');
		});
	};

	// dispositivo_ios = $.browser.device = (/iphone|ipad|ipod|/i.test(navigator.userAgent.toLowerCase()))

	if ( dispositivo_movil ) {
		headerfixed();
	};


	var documentt = $(document).width();
	var windoww = $(window).width();
  
  	//Tabs Responsabilidad Social
  
 	 $('section.s-tabs .link-tab').click(function(e){
          e.preventDefault();
          $('section.s-tabs .link-tab').removeClass('active');
          $(this).addClass('active');
          var id = $(this).data('id');
          $('.tab-content .w-tab-content-item').removeClass('active');
          $(id).addClass('active');
		});

  
  //Estilos Formulario Contáctenos
  if($('body').hasClass('page-contactanos')){
    
     if($(".fieldLine").length != 0){

  			debugger;
  			$(".DivContentForm").addClass("form");
			
			var divP1 =  $(".ul-inputs");
            var divP2 =  $(".w-form");
  			var divP3 =  $(".w-buttons");
            
                                  
            var div1  = $(".fieldLine")[0];
			$("div[data-field-name='Nombre']").addClass("radius li-inputs");		
              
            var div2  = $(".fieldLine")[1];
			$("div[data-field-name='Empresa']").addClass("radius li-inputs");		
              
            var div3  = $(".fieldLine")[2];
            $("div[data-field-name='NombreCompleto']").addClass("radius li-inputs");
  			$("input[id='Email']").clone().insertAfter("input[id='Email']").prev().remove();
  			$("input[id='Email']").attr("placeholder","E-mail");
  			//$("input[id='Email']").attr("type","mail");
			
            var div4  = $(".fieldLine")[3];
            $("div[data-field-name='TelCel']").addClass("radius li-inputs");		
              
            var div5  = $(".fieldLine")[4];
            $("div[data-field-name='Mensaje']").addClass("radius li-inputs w-textarea");
  			$("textarea[id='Mensaje']").attr("placeholder","Mensaje");
  			$("textarea[id='Mensaje']").attr("maxlength","300");
			
            divP1.append(div1);
            divP1.append(div2);
            divP1.append(div3);  
			divP1.append(div4);
			divP1.append(div5);
			
			divP2.append(divP1);
			
			//agregando texto
			var node = $(document.createElement('p'));
			node.addClass("instruction");
    		node.text("*Todos los campos son obligatorios.");
						
			divP2.append(node);
  
  			var divFormulario = $(".DivContentForm");
            divFormulario.append(divP2);
  			////
  			
  			//Estilo boton
  			$(".DivContentForm input[name='submit']").remove();
            var btnContactar =  $(document.createElement('BUTTON'));
  			btnContactar.text("Contactar");
            btnContactar.addClass("accion");
    		//btnContactar.attr("type","submit");
  			btnContactar.attr("name","submit");
  			btnContactar.attr("value","Contactar");
  			  			
  			divP3.append(btnContactar);
  
  			divP2.append(divP3);
                         
            
            $(".DivContentForm label").css("display", "none");
     }
  }
  ////////////
  	
  
   
  //Estilos Formulario Trabaja con nosotros
  if($('body').hasClass('page-trabaja')){
  
  //$(".DivContentForm").addClass("form");
			
			var divP1 =  document.createElement("DIV");
            var divP2 =  document.createElement("DIV");
  			var divP3 =  document.createElement("DIV");
            
    		var divPS1 =  document.createElement("DIV");
    		
            divP1.className = "ul-inputs";
            divP2.className = "w-form";
  			divP3.className = "w-buttons";
    
    		divPS1.className = "w-miti";
                       
            var div1  = $(".fieldLine")[0];
			$("div[data-field-name='Nombre']").addClass("radius li-inputs miti");		
              
            
            var div2  = $(".fieldLine")[1];
            $("div[data-field-name='NombreCompleto']").addClass("radius li-inputs miti");
  			$("input[id='NombreCompleto']").clone().insertAfter("input[id='NombreCompleto']").prev().remove();
  			$("input[id='NombreCompleto']").attr("placeholder","E-mail");
  			//$("input[id='Email']").attr("type","mail");
    
			
    		var div3  = $(".fieldLine")[2];
            $("div[data-field-name='TelCel']").addClass("radius li-inputs miti");	
    
    		
            var div4  = $(".fieldLine")[3];
			$("div[data-field-name='AdjuntaCV']").addClass("radius li-inputs miti w-buton-general");		
    		
    		var nodeFile = document.createElement("span");
			nodeFile.className="txt radius";
    		var textnodeFile = document.createTextNode("Adjunta tu C.V");
			nodeFile.appendChild(textnodeFile);
            div4.appendChild(nodeFile);    		
    		$(div4).find("input")[0].className ="ii";
    			          
            var div5  = $(".fieldLine")[4];
            $("div[data-field-name='Mensaje']").addClass("radius li-inputs w-textarea");
  			$("textarea[id='Mensaje']").attr("placeholder","Mensaje");
  			$("textarea[id='Mensaje']").attr("maxlength","300");
			
    
            divPS1.appendChild(div1);
            divPS1.appendChild(div2);
            divPS1.appendChild(div3);  
			divPS1.appendChild(div4);
    
			divP1.appendChild(divPS1);
    		divP1.appendChild(div5);
			
			divP2.appendChild(divP1);
			
			//agregando texto
			var node = document.createElement("p");
			node.className="instruction";
			var textnode = document.createTextNode("*Todos los campos son obligatorios.");
			node.appendChild(textnode);
			
			divP2.appendChild(node);
  
  			var divFormulario = $(".DivContentForm");
            divFormulario[0].appendChild(divP2);
  			////
  			
  			//Estilo boton
  			$(".DivContentForm input[name='submit']").remove();
            var btnContactar =  document.createElement("BUTTON");
  			var Valor = document.createTextNode("Enviar Registro");
            btnContactar.className = "accion";
  			//btnContactar.type="submit";
  			btnContactar.name="submit";
  			btnContactar.value="Enviar Registro";
  			btnContactar.appendChild(Valor);
  			
  			divP3.appendChild(btnContactar);
  
  			divP2.appendChild(divP3);
                          
            
            $(".DivContentForm label").css("display", "none");
  }
  	
  
  
  //cargar Noticias
  
  if($('body').hasClass('page-noticias')){
  CargarNoticias()
  }
  
  function CargarNoticias()
  {
    $.ajax({ 
		            url:tempURL+"/ModuloTramarsa/CargarNoticias?NroPagina=" + NroPagina,
		            headers: { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val() },
		            data: '', 
		            success: function(data){ 
		             
      					$(".page-noticias .list").prepend(data);
                  
                  	
        			}
        		});
  }
  
  $("div.pager .item-pager-cnt").click(function(e){
          e.preventDefault();
          $("div.pager .item-pager-cnt").removeClass("active");
          $(this).addClass("active");
  		  $("section.list > article").remove();
  		  NroPagina=$(".item-pager-cnt.active").text();
  		  CargarNoticias()
          //var id = $(this).data('id');
          //$('.tab-content .w-tab-content-item').removeClass('active');
          //$(id).addClass('active');
		});

 	$("div.pager .right.icon-right2").click(function(e){
          e.preventDefault();
      	  
      		$("div.pager .item-pager-cnt").each(function (i){
              		
              if($(this).hasClass("active"))
              {
                if(i!=$("div.pager .item-pager-cnt").length-1)
                {
                	$(this).removeClass("active");
                  	$(this).parent().next().children().addClass("active");
                  	$("section.list > article").remove();
  		  			NroPagina=$(this).parent().next().text();
  		  			CargarNoticias()
                  
                }
              }
              		
      	});
    });
      
      $("div.pager .left.icon-left2").click(function(e){
          
        	e.preventDefault();
      	  
      		$("div.pager .item-pager-cnt").each(function (i){
              		
              if($(this).hasClass("active"))
              {
                if(i!=0)
                {
                	$(this).removeClass("active");
                  	$(this).parent().prev().children().addClass("active");
                  	$("section.list > article").remove();
  		  			NroPagina=$(this).parent().prev().text();
  		  			CargarNoticias()
                  
                }
              }
              		
      	});
      }); 

	//CargarOtrasNoticias
	
	if($('body').hasClass('page-noticias-detalle')){
  		CargarOtrasNoticias()
  }
  
  function CargarOtrasNoticias()
  {
    var idNoticia=$("#idBeneficio").text();
    var Categoria=$("#Categoria").text();
    
    $.ajax({ 
		            url:tempURL+"/ModuloTramarsa/CargarNoticiasRelacionadas?idNoticia=" + idNoticia + "&Categoria=" + Categoria,
      	            headers: { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val() },
		            data: '', 
		            success: function(data){ 
		             
      					$(".page-noticias-detalle .mas-noticias .list").append(data);
                  
                  	
        			}
        		});
  }
  
  
  TRM = $.extend({
    
    init: function()
    {
      
    },
  
    formResult: function(iframe,idCanalNotificacion,idContenidoNotificacion, idContenidoNotificacionAdmin)  {
                  
            try {
                        if (iframe.contentDocument.body.innerHTML !== null)
                        {
                            if (iframe.contentDocument.body.innerHTML.length > 0) {
                                if (iframe.contentDocument.body.innerHTML.split('Submetido com sucesso. Obrigado!').length > 1) {

                                  
                                  $(".contacts-form").hide();
                                  $(".contacts-form-msg").show();
                                  setTimeout(function(){
                                      
                                      $(".contacts-form-msg").hide();
                                      $(".contacts-form").show();
                                      location.reload();
                                  }, 5000);
                                  
                  					var $span = $($("#postTarget")[0].contentDocument.documentElement).find("span");
  									var idcanal= $span.data('channel');
  									var idcontenido= $span.data('content');
                                  	var idcanalNotifica= idCanalNotificacion;
  									var idcontenidoNotifica= idContenidoNotificacion;
                                  	var idcontenidoNotificaAdmin = idContenidoNotificacionAdmin; 
                 
                                    $.ajax({ 
                                        url:tempURL+"/ModuloTramarsa/EnviarCorreo?idCanalContenido="+idcanal+"&idContenido=" +idcontenido + "&idCanalNotificaciones="+idcanalNotifica+"&idContenidoNotificaciones="+idcontenidoNotifica+"&rutaFrondEnd="+tempURL+"&rutabeneficio="+"",
                                        headers: { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val() },
                                        params: null,
                                        data: '', 
                                       // async: false, 
                                        success: function(data){ 
                                          
                                        } 
                                    
                                      }); 
                              
                               	$.ajax({ 
                                        url:tempURL+"/ModuloTramarsa/EnviarCorreo?idCanalContenido="+idcanal+"&idContenido=" +idcontenido + "&idCanalNotificaciones="+idcanalNotifica+"&idContenidoNotificaciones="+idcontenidoNotificaAdmin+"&rutaFrondEnd="+tempURL+"&rutabeneficio="+"",
                                        headers: { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val() },
                                        params: null,
                                        data: '', 
                                       // async: false, 
                                        success: function(data){ 
                                          
                                        } 
                                    
                                      }); 
              						
              						
              
                                }
                                else {

                                }
                                 
                                  
                            }
                          }
                          else
                          {
                            $('.DivContentForm')[0].reset();
                          }
            }
            catch (everything) {
            }
        },

	formResultContactaAsesor: function(iframe,idCanalNotificacion,idContenidoNotificacion, idContenidoNotificacionAdmin)  {
                  
            try {
                        if (iframe.contentDocument.body.innerHTML !== null)
                        {
                            if (iframe.contentDocument.body.innerHTML.length > 0) {
                                if (iframe.contentDocument.body.innerHTML.split('Submetido com sucesso. Obrigado!').length > 1) {

                                                                    
                                  $(".block-info-white").hide();
                                  $(".formfancy").hide();
                                  $(".mensajeSatisfactorio").show();
                                  $("#fancybox-content").slideDown( 3000, function() { $(this).height(406)});
                                  
                                                                   
                  					var $span = $($("#postTarget")[0].contentDocument.documentElement).find("span");
  									var idcanal= $span.data('channel');
  									var idcontenido= $span.data('content');
                                  	var idcanalNotifica= idCanalNotificacion;
  									var idcontenidoNotifica= idContenidoNotificacion;
                                  	var idcontenidoNotificaAdmin = idContenidoNotificacionAdmin;
                 
                                    $.ajax({ 
                                        url:tempURL+"/ModuloTramarsa/EnviarCorreo?idCanalContenido="+idcanal+"&idContenido=" +idcontenido + "&idCanalNotificaciones="+idcanalNotifica+"&idContenidoNotificaciones="+idcontenidoNotifica+"&rutaFrondEnd="+tempURL+"&rutabeneficio="+"",
                                        headers: { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val() },
                                        params: null,
                                        data: '', 
                                       // async: false, 
                                        success: function(data){ 
                                          
                                        } 
                                    
                                      }); 
              						
                             	 $.ajax({ 
                                        url:tempURL+"/ModuloTramarsa/EnviarCorreo?idCanalContenido="+idcanal+"&idContenido=" +idcontenido + "&idCanalNotificaciones="+idcanalNotifica+"&idContenidoNotificaciones="+idcontenidoNotificaAdmin+"&rutaFrondEnd="+tempURL+"&rutabeneficio="+"",
                                        headers: { __RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val() },
                                        params: null,
                                        data: '', 
                                       // async: false, 
                                        success: function(data){ 
                                          
                                        } 
                                    
                                      }); 
              
                                }
                                else {

                                }
                                 
                                  
                            }
                          }
                          else
                          {
                            $('.DivContentForm')[0].reset();
                          }
            }
            catch (everything) {
            }
        }
                 
	}, TRM);

	$(function() {
		TRM.init();
	});
});
