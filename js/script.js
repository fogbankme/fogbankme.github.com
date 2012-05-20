$(document).ready(function() {
  $('#slides').superslides({
    play: false,
    slide_easing: 'easeInOutCubic',
    slide_speed: 800
  })
});


(function() {

	var data = [
		
		{  
		  aimg: 'img/avatar_laci.jpg',
		  atitle: 'opSys',
		  adescrip: 'King of Ping',
		  bcap: 'One More Tower',
		  bimg: 'img/RW_1_small.jpg',
		  btext: 'Today we began the first step in a new tower installation to extend Ranch WiFis network.',
		  ccap: 'Lowering Rebar Mat #1',
		  cimg: 'img/RW_2_small.jpg',
		  ctext: 'The 10x10 footing will support a 100 foot tower that will be brought to the site in multiple sections.',
		  dcap: 'Lake View',
		  dimg: 'img/RW_3_small.jpg',
		  dtext: 'We prepped the footing making sure we had the proper rebar clearances and stability for the final pour. The view of the lake to the south is awesome!',
		  time: 'February 2012'
		},

	 //  {
		//   aimg: 'img/avatar_laci.jpg',
		//   atitle: 'opSys',
		//   adescrip: 'King of Ping',
		//   bcap: 'One More Tower',
		//   bimg: 'img/RW_4_small.jpg',
		//   btext: 'Today we began the first step in a new tower installation to extend Ranch WiFis network.',
		//   ccap: 'Lowering Rebar Mat #1',
		//   cimg: 'img/RW_5_small.jpg',
		//   ctext: 'The 10x10 footing will support a 100 foot tower that will be brought to the site in multiple sections.',
		//   dcap: 'Lake View',
		//   dimg: 'img/RW_6_small.jpg',
		//   dtext: 'We prepped the footing making sure we had the proper rebar clearances and stability for the final pour. The view of the lake to the south is awesome!',
		//   time: 'March 2012'
		// },

		// {
		//   aimg: 'img/avatar_laci.jpg',
		//   atitle: 'opSys',
		//   adescrip: 'King of Ping',
		//   bcap: 'One More Tower',
		//   bimg: 'img/RW_7_small.jpg',
		//   btext: 'Today we began the first step in a new tower installation to extend Ranch WiFis network.',
		//   ccap: 'Lowering Rebar Mat #1',
		//   cimg: 'img/RW_8_small.jpg',
		//   ctext: 'The 10x10 footing will support a 100 foot tower that will be brought to the site in multiple sections.',
		//   dcap: 'Lake View',
		//   dimg: 'img/RW_9_small.jpg',
		//   dtext: 'We prepped the footing making sure we had the proper rebar clearances and stability for the final pour. The view of the lake to the south is awesome!',
		//   time: 'April 2012'
		// }

	];

	var template = Handlebars.compile($('#template').html() );
	$('ul.thumbnails').append( template(data) );
	
})();



(function() {

$('.modal').modal({
  keyboard: true,
  backdrop: false,
  show: false
})

})();




