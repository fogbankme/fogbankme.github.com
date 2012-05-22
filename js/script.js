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
		  bhref: '#thumb1',
		  blink: 'thumb1',
		  ccap: 'Lowering Rebar Mat #1',
		  cimg: 'img/RW_2_small.jpg',
		  ctext: 'The 10x10 footing will support a 100 foot tower that will be brought to the site in multiple sections.',
		  chref: '#thumb2',
		  clink: 'thumb2',
		  dcap: 'Lake View',
		  dimg: 'img/RW_3_small.jpg',
		  dtext: 'We prepped the footing making sure we had the proper rebar clearances and stability for the final pour. The view of the lake to the south is awesome!',
		  dhref: '#thumb3',
		  dlink: 'thumb3',
		  time: 'February 2012'
		},

	  {
		  aimg: 'img/avatar_laci.jpg',
		  atitle: 'opSys',
		  adescrip: 'King of Ping',
		  bcap: 'Final Inspection',
		  bimg: 'img/RW_4_small.jpg',
		  btext: 'MacHammer looks worried as three concrete trucks switchback up the mountain. Our anchor bolt jig is in place and with a few taps of the hammer, everything get level and square.',
		  bhref: '#thumb4',
		  blink: 'thumb4',
		  ccap: 'Pour Baby Pour',
		  cimg: 'img/RW_5_small.jpg',
		  ctext: '4 yards of concrete are delivered. MacHammer vibrates the concrete for an even spread.',
		  chref: '#thumb5',
		  clink: 'thumb5',
		  dcap: 'Finshed Pad',
		  dimg: 'img/RW_6_small.jpg',
		  dtext: 'Our slab is finished and will now need to sit and cure.  Thankfully, rain and cold temperatures will help make the concrete cure slower and stronger.  Again, a race against the setting sun.',
		  dhref: '#thumb6',
		  dlink: 'thumb6',
		  time: 'March 2012'
		},

		{
		  aimg: 'img/avatar_laci.jpg',
		  atitle: 'opSys',
		  adescrip: 'King of Ping',
		  bcap: 'Ben Ready!',
		  bimg: 'img/RW_7_small.jpg',
		  btext: 'The tower sections are delivered and the crane arrives. Hope the anchor bolts line up :)',
		  bhref: '#thumb7',
		  blink: 'thumb7',
		  ccap: 'Tower Mating',
		  cimg: 'img/RW_8_small.jpg',
		  ctext: 'Human-crane Interaction',
		  chref: '#thumb8',
		  clink: 'thumb8',
		  dcap: 'Finished Tower',
		  dimg: 'img/RW_9_small.jpg',
		  dtext: 'Tower is UP!  Now, we need to get our equipment up and broadcasting. Rest and repeat.',
		  dhref: '#thumb9',
		  dlink: 'thumb9',
		  time: 'April 2012'
		}

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
