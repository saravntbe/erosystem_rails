(function(){
	var header = $('header.header');
	var heading1 = $("h1.he1");
	var snum = $("div.snum ");
	var oor = $("div.oor ");
	$(window).on('scroll',function(){
		var pagePoss = pageYOffset;
		if(pagePoss>=40){
			header.removeClass("header").addClass("header1");
			heading1.removeClass("he1").addClass("he2");
			snum.removeClass("snum").addClass("snum1");
			oor.removeClass("oor").addClass("oor1");
		}else {
			header.removeClass("header1").addClass("header");
			heading1.removeClass("he2").addClass("he1");
			snum.removeClass("snum1").addClass("snum");
			oor.removeClass("oor1").addClass("oor");
		}
	});



	$('form.ejax').on('submit',function(e){
		e.preventDefault();
		var that = $(this),
			url = that.attr('action'),
			type = that.attr('method');
			$('.good').addClass("delivered").html("<span>Sending</span>");
			
			var data = $('.ejax').serialize();
			$('form').each(function() {
            this.reset();
        	});
			$.ajax({
				url: url,
				type: type,
				data: data,
				success:function(response){
					//console.log(response);
					$('.delivered').addClass("sendfull").html(response);
					// console.log(data);
				},
				error:function(){
					console.log(e);
				}
			});
			$('.good').removeClass("sendfull");
		return false;
		
	});
	
})();
