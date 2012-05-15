// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */


/*
jquery.animate-enhanced plugin v0.91
---
http://github.com/benbarnett/jQuery-Animate-Enhanced
http://benbarnett.net
@benpbarnett
---
Copyright (c) 2012 Ben Barnett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
---
Extends jQuery.animate() to automatically use CSS3 transformations where applicable.
Tested with jQuery 1.3.2+

Supports -moz-transition, -webkit-transition, -o-transition, transition

Targetted properties (for now):
	- left
	- top
	- opacity
	- width
	- height

Usage (exactly the same as it would be normally):

	jQuery(element).animate({left: 200},  500, function() {
		// callback
	});

Changelog:
	0.91 (2/4/2012):
		- Merge Pull Request #74 - Unit Management

	0.90 (7/3/2012):
		- Adding public $.toggleDisabledByDefault() feature to disable entire plugin by default (Issue #73)

	0.89 (24/1/2012):
		- Adding 'avoidCSSTransitions' property. Set to true to disable entire plugin. (Issue #47)

	0.88 (24/1/2012):
		- Fix Issue #67 for HighchartsJS compatibility

	0.87 (24/1/2012):
		- Fix Issue #66 selfCSSData.original is undefined

	0.86 (9/1/2012):
		- Strict JS fix for undefined variable

	0.85 (20/12/2011):
		- Merge Pull request #57 from Kronuz
		- Codebase cleaned and now passes jshint.
		- Fixed a few bugs (it now saves and restores the original css transition properties).
		- fadeOut() is fixed, it wasn't restoring the opacity after hiding it.

	0.80 (13/09/2011):
		- Issue #28 - Report $(el).is(':animated') fix

	0.79 (06/09/2011):
		- Issue #42 - Right negative position animation: please see issue notes on Github.

	0.78 (02/09/2011):
		- Issue #18 - jQuery/$ reference joys

	0.77 (02/09/2011):
		- Adding feature on Github issue #44 - Use 3D Transitions by default

	0.76 (28/06/2011):
		- Fixing issue #37 - fixed stop() method (with gotoEnd == false)

	0.75 (15/06/2011):
		- Fixing issue #35 to pass actual object back as context for callback

	0.74 (28/05/2011):
		- Fixing issue #29 to play nice with 1.6+

	0.73 (05/03/2011):
		- Merged Pull Request #26: Fixed issue with fadeOut() / "hide" shortcut

	0.72 (05/03/2011):
		- Merged Pull Request #23: Added Penner equation approximations from Matthew Lein's Ceaser, and added failsafe fallbacks

	0.71 (05/03/2011):
		- Merged Pull Request #24: Changes translation object to integers instead of strings to fix relative values bug with leaveTransforms = true

	0.70 (17/03/2011):
		- Merged Pull Request from amlw-nyt to add bottom/right handling

	0.68 (15/02/2011):
		- width/height fixes & queue issues resolved.

	0.67 (15/02/2011):
		- Code cleanups & file size improvements for compression.

	0.66 (15/02/2011):
		- Zero second fadeOut(), fadeIn() fixes

	0.65 (01/02/2011):
		- Callbacks with queue() support refactored to support element arrays

	0.64 (27/01/2011):
		- BUGFIX #13: .slideUp(), .slideToggle(), .slideDown() bugfixes in Webkit

	0.63 (12/01/2011):
		- BUGFIX #11: callbacks not firing when new value == old value

	0.62 (10/01/2011):
		- BUGFIX #11: queue is not a function issue fixed

	0.61 (10/01/2011):
		- BUGFIX #10: Negative positions converting to positive

	0.60 (06/01/2011):
		- Animate function rewrite in accordance with new queue system
		- BUGFIX #8: Left/top position values always assumed relative rather than absolute
		- BUGFIX #9: animation as last item in a chain - the chain is ignored?
		- BUGFIX: width/height CSS3 transformation with left/top working

	0.55 (22/12/2010):
		- isEmptyObject function for <jQuery 1.4 (requires 1.3.2)

	0.54a (22/12/2010):
		- License changed to MIT (http://www.opensource.org/licenses/mit-license.php)

	0.54 (22/12/2010):
		- Removed silly check for 'jQuery UI' bailouts. Sorry.
		- Scoping issues fixed - Issue #4: $(this) should give you a reference to the selector being animated.. per jquery's core animation funciton.

	0.53 (17/11/2010):
		- New $.translate() method to easily calculate current transformed translation
		- Repeater callback bug fix for leaveTransforms:true (was constantly appending properties)

	0.52 (16/11/2010):
		- leaveTransforms: true bug fixes
		- 'Applying' user callback function to retain 'this' context

	0.51 (08/11/2010):
		- Bailing out with jQuery UI. This is only so the plugin plays nice with others and is TEMPORARY.

	0.50 (08/11/2010):
		- Support for $.fn.stop()
		- Fewer jQuery.fn entries to preserve namespace
		- All references $ converted to jQuery
		- jsDoc Toolkit style commenting for docs (coming soon)

	0.49 (19/10/2010):
		- Handling of 'undefined' errors for secondary CSS objects
		- Support to enhance 'width' and 'height' properties (except shortcuts involving jQuery.fx.step, e.g slideToggle)
		- Bugfix: Positioning when using avoidTransforms: true (thanks Ralf Santbergen reports)
		- Bugfix: Callbacks and Scope issues

	0.48 (13/10/2010):
		- Checks for 3d support before applying

	0.47 (12/10/2010);
		- Compatible with .fadeIn(), .fadeOut()
		- Use shortcuts, no duration for jQuery default or "fast" and "slow"
		- Clean up callback event listeners on complete (preventing multiple callbacks)

	0.46 (07/10/2010);
		- Compatible with .slideUp(), .slideDown(), .slideToggle()

	0.45 (06/10/2010):
		- 'Zero' position bug fix (was originally translating by 0 zero pixels, i.e. no movement)

	0.4 (05/10/2010):
		- Iterate over multiple elements and store transforms in jQuery.data per element
		- Include support for relative values (+= / -=)
		- Better unit sanitization
		- Performance tweaks
		- Fix for optional callback function (was required)
		- Applies data[translateX] and data[translateY] to elements for easy access
		- Added 'easeInOutQuint' easing function for CSS transitions (requires jQuery UI for JS anims)
		- Less need for leaveTransforms = true due to better position detections
*/

(function(jQuery, originalAnimateMethod, originalStopMethod) {

	// ----------
	// Plugin variables
	// ----------
	var	cssTransitionProperties = ['top', 'right', 'bottom', 'left', 'opacity', 'height', 'width'],
		directions = ['top', 'right', 'bottom', 'left'],
		cssPrefixes = ['', '-webkit-', '-moz-', '-o-'],
		pluginOptions = ['avoidTransforms', 'useTranslate3d', 'leaveTransforms'],
		rfxnum = /^([+-]=)?([\d+-.]+)(.*)$/,
		rupper = /([A-Z])/g,
		defaultEnhanceData = {
			secondary: {},
			meta: {
				top : 0,
				right : 0,
				bottom : 0,
				left : 0
			}
		},
		valUnit = 'px',

		DATA_KEY = 'jQe',
		CUBIC_BEZIER_OPEN = 'cubic-bezier(',
		CUBIC_BEZIER_CLOSE = ')',

		originalAnimatedFilter = null,
		pluginDisabledDefault = false;


	// ----------
	// Check if this browser supports CSS3 transitions
	// ----------
	var thisBody = document.body || document.documentElement,
		thisStyle = thisBody.style,
		transitionEndEvent = (thisStyle.WebkitTransition !== undefined) ? 'webkitTransitionEnd' : (thisStyle.OTransition !== undefined) ? 'oTransitionEnd' : 'transitionend',
		cssTransitionsSupported = thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.OTransition !== undefined || thisStyle.transition !== undefined,
		has3D = ('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix()),
		use3DByDefault = has3D;



	// ----------
	// Extended :animated filter
	// ----------
	if ( jQuery.expr && jQuery.expr.filters ) {
		originalAnimatedFilter = jQuery.expr.filters.animated;
		jQuery.expr.filters.animated = function(elem) {
			return jQuery(elem).data('events') && jQuery(elem).data('events')[transitionEndEvent] ? true : originalAnimatedFilter.call(this, elem);
		};
	}


	/**
		@private
		@name _getUnit
		@function
		@description Return unit value ("px", "%", "em" for re-use correct one when translating)
		@param {variant} [val] Target value
	*/
	function _getUnit(val){
		return val.match(/\D+$/);
	}


	/**
		@private
		@name _interpretValue
		@function
		@description Interpret value ("px", "+=" and "-=" sanitisation)
		@param {object} [element] The Element for current CSS analysis
		@param {variant} [val] Target value
		@param {string} [prop] The property we're looking at
		@param {boolean} [isTransform] Is this a CSS3 transform?
	*/
	function _interpretValue(e, val, prop, isTransform) {
		// this is a nasty fix, but we check for prop == 'd' to see if we're dealing with SVG, and abort
		if (prop == "d") return;
		
		var parts = rfxnum.exec(val),
			start = e.css(prop) === 'auto' ? 0 : e.css(prop),
			cleanCSSStart = typeof start == 'string' ? _cleanValue(start) : start,
			cleanTarget = typeof val == 'string' ? _cleanValue(val) : val,
			cleanStart = isTransform === true ? 0 : cleanCSSStart,
			hidden = e.is(':hidden'),
			translation = e.translation();

		if (prop == 'left') cleanStart = parseInt(cleanCSSStart, 10) + translation.x;
		if (prop == 'right') cleanStart = parseInt(cleanCSSStart, 10) + translation.x;
		if (prop == 'top') cleanStart = parseInt(cleanCSSStart, 10) + translation.y;
		if (prop == 'bottom') cleanStart = parseInt(cleanCSSStart, 10) + translation.y;

		// deal with shortcuts
		if (!parts && val == 'show') {
			cleanStart = 1;
			if (hidden) e.css({'display':'block', 'opacity': 0});
		} else if (!parts && val == "hide") {
			cleanStart = 0;
		}

		if (parts) {
			var end = parseFloat(parts[2]);

			// If a +=/-= token was provided, we're doing a relative animation
			if (parts[1]) end = ((parts[1] === '-=' ? -1 : 1) * end) + parseInt(cleanStart, 10);
			return end;
		} else {
			return cleanStart;
		}
	}

	/**
		@private
		@name _getTranslation
		@function
		@description Make a translate or translate3d string
		@param {integer} [x]
		@param {integer} [y]
		@param {boolean} [use3D] Use translate3d if available?
	*/
	function _getTranslation(x, y, use3D) {
		return ((use3D === true || (use3DByDefault === true && use3D !== false)) && has3D) ? 'translate3d(' + x + 'px, ' + y + 'px, 0)' : 'translate(' + x + 'px,' + y + 'px)';
	}


	/**
		@private
		@name _applyCSSTransition
		@function
		@description Build up the CSS object
		@param {object} [e] Element
		@param {string} [property] Property we're dealing with
		@param {integer} [duration] Duration
		@param {string} [easing] Easing function
		@param {variant} [value] String/integer for target value
		@param {boolean} [isTransform] Is this a CSS transformation?
		@param {boolean} [isTranslatable] Is this a CSS translation?
		@param {boolean} [use3D] Use translate3d if available?
	*/
	function _applyCSSTransition(e, property, duration, easing, value, isTransform, isTranslatable, use3D) {
		var eCSSData = e.data(DATA_KEY),
			enhanceData = eCSSData && !_isEmptyObject(eCSSData) ? eCSSData : jQuery.extend(true, {}, defaultEnhanceData),
			offsetPosition = value,
			isDirection = jQuery.inArray(property, directions) > -1;

		if (isDirection) {
			var meta = enhanceData.meta,
				cleanPropertyValue = _cleanValue(e.css(property)) || 0,
				stashedProperty = property + '_o';

			offsetPosition = value - cleanPropertyValue;

			meta[property] = offsetPosition;
			meta[stashedProperty] = e.css(property) == 'auto' ? 0 + offsetPosition : cleanPropertyValue + offsetPosition || 0;
			enhanceData.meta = meta;

			// fix 0 issue (transition by 0 = nothing)
			if (isTranslatable && offsetPosition === 0) {
				offsetPosition = 0 - meta[stashedProperty];
				meta[property] = offsetPosition;
				meta[stashedProperty] = 0;
			}
		}

		// reapply data and return
		return e.data(DATA_KEY, _applyCSSWithPrefix(e, enhanceData, property, duration, easing, offsetPosition, isTransform, isTranslatable, use3D));
	}

	/**
		@private
		@name _applyCSSWithPrefix
		@function
		@description Helper function to build up CSS properties using the various prefixes
		@param {object} [cssProperties] Current CSS object to merge with
		@param {string} [property]
		@param {integer} [duration]
		@param {string} [easing]
		@param {variant} [value]
		@param {boolean} [isTransform] Is this a CSS transformation?
		@param {boolean} [isTranslatable] Is this a CSS translation?
		@param {boolean} [use3D] Use translate3d if available?
	*/
	function _applyCSSWithPrefix(e, cssProperties, property, duration, easing, value, isTransform, isTranslatable, use3D) {
		var saveOriginal = false,
			transform = isTransform === true && isTranslatable === true;

		cssProperties = cssProperties || {};
		if (!cssProperties.original) {
			cssProperties.original = {};
			saveOriginal = true;
		}
		cssProperties.properties = cssProperties.properties || {};
		cssProperties.secondary = cssProperties.secondary || {};

		var meta = cssProperties.meta,
			original = cssProperties.original,
			properties = cssProperties.properties,
			secondary = cssProperties.secondary;

		for (var i = cssPrefixes.length - 1; i >= 0; i--) {
			var tp = cssPrefixes[i] + 'transition-property',
				td = cssPrefixes[i] + 'transition-duration',
				tf = cssPrefixes[i] + 'transition-timing-function';

			property = (transform ? cssPrefixes[i] + 'transform' : property);

			if (saveOriginal) {
				original[tp] = e.css(tp) || '';
				original[td] = e.css(td) || '';
				original[tf] = e.css(tf) || '';
			}

			secondary[property] = transform ? _getTranslation(meta.left, meta.top, use3D) : value;

			properties[tp] = (properties[tp] ? properties[tp] + ',' : '') + property;
			properties[td] = (properties[td] ? properties[td] + ',' : '') + duration + 'ms';
			properties[tf] = (properties[tf] ? properties[tf] + ',' : '') + easing;
		}

		return cssProperties;
	}

	/**
		@private
		@name _isBoxShortcut
		@function
		@description Shortcut to detect if we need to step away from slideToggle, CSS accelerated transitions (to come later with fx.step support)
		@param {object} [prop]
	*/
	function _isBoxShortcut(prop) {
		for (var property in prop) {
			if ((property == 'width' || property == 'height') && (prop[property] == 'show' || prop[property] == 'hide' || prop[property] == 'toggle')) {
				return true;
			}
		}
		return false;
	}


	/**
		@private
		@name _isEmptyObject
		@function
		@description Check if object is empty (<1.4 compatibility)
		@param {object} [obj]
	*/
	function _isEmptyObject(obj) {
		for (var i in obj) {
			return false;
		}
		return true;
	}


	/**
		@private
		@name _cleanValue
		@function
		@description Remove 'px' and other artifacts
		@param {variant} [val]
	*/
	function _cleanValue(val) {
		valUnit = _getUnit(val);
		return parseFloat(val.replace(/px/i, ''));
	}


	/**
		@private
		@name _appropriateProperty
		@function
		@description Function to check if property should be handled by plugin
		@param {string} [prop]
		@param {variant} [value]
	*/
	function _appropriateProperty(prop, value, element) {
		var is = jQuery.inArray(prop, cssTransitionProperties) > -1;
		if ((prop == 'width' || prop == 'height') && (value === parseFloat(element.css(prop)))) is = false;
		return is;
	}


	jQuery.extend({
		/**
			@public
			@name toggle3DByDefault
			@function
			@description Toggle for plugin settings to automatically use translate3d (where available). Usage: $.toggle3DByDefault
		*/
		toggle3DByDefault: function() {
			return use3DByDefault = !use3DByDefault;
		},
		
		
		/**
			@public
			@name toggleEnabledByDefault
			@function
			@description Toggle the plugin to be disabled by default (can be overridden per animation with avoidCSSTransitions)
		*/
		toggleDisabledByDefault: function() {
			return pluginDisabledDefault = !pluginDisabledDefault;
		}
	});


	/**
		@public
		@name translation
		@function
		@description Get current X and Y translations
	*/
	jQuery.fn.translation = function() {
		if (!this[0]) {
			return null;
		}

		var	elem = this[0],
			cStyle = window.getComputedStyle(elem, null),
			translation = {
				x: 0,
				y: 0
			};

		if (cStyle) {
			for (var i = cssPrefixes.length - 1; i >= 0; i--) {
				var transform = cStyle.getPropertyValue(cssPrefixes[i] + 'transform');
				if (transform && (/matrix/i).test(transform)) {
					var explodedMatrix = transform.replace(/^matrix\(/i, '').split(/, |\)$/g);
					translation = {
						x: parseInt(explodedMatrix[4], 10),
						y: parseInt(explodedMatrix[5], 10)
					};

					break;
				}
			}
		}

		return translation;
	};



	/**
		@public
		@name jQuery.fn.animate
		@function
		@description The enhanced jQuery.animate function
		@param {string} [property]
		@param {string} [speed]
		@param {string} [easing]
		@param {function} [callback]
	*/
	jQuery.fn.animate = function(prop, speed, easing, callback) {
		prop = prop || {};
		var isTranslatable = !(typeof prop['bottom'] !== 'undefined' || typeof prop['right'] !== 'undefined'),
			optall = jQuery.speed(speed, easing, callback),
			elements = this,
			callbackQueue = 0,
			propertyCallback = function() {
				callbackQueue--;
				if (callbackQueue === 0) {
					// we're done, trigger the user callback
					if (typeof optall.complete === 'function') {
						optall.complete.apply(elements[0], arguments);
					}
				}
			},
			bypassPlugin = (typeof prop['avoidCSSTransitions'] !== 'undefined') ? prop['avoidCSSTransitions'] : pluginDisabledDefault;

		if (bypassPlugin === true || !cssTransitionsSupported || _isEmptyObject(prop) || _isBoxShortcut(prop) || optall.duration <= 0 || (jQuery.fn.animate.defaults.avoidTransforms === true && prop['avoidTransforms'] !== false)) {
			return originalAnimateMethod.apply(this, arguments);
		}

		return this[ optall.queue === true ? 'queue' : 'each' ](function() {
			var self = jQuery(this),
				opt = jQuery.extend({}, optall),
				cssCallback = function() {
					var selfCSSData = self.data(DATA_KEY) || { original: {} },
						restore = {};

					// convert translations to left & top for layout
					if (prop.leaveTransforms !== true) {
						for (var i = cssPrefixes.length - 1; i >= 0; i--) {
							restore[cssPrefixes[i] + 'transform'] = '';
						}
						if (isTranslatable && typeof selfCSSData.meta !== 'undefined') {
							for (var j = 0, dir; (dir = directions[j]); ++j) {
								restore[dir] = selfCSSData.meta[dir + '_o'] + valUnit;
							}
						}
					}

					// remove transition timing functions
					self.
						unbind(transitionEndEvent).
						css(selfCSSData.original).
						css(restore).
						data(DATA_KEY, null);

					// if we used the fadeOut shortcut make sure elements are display:none
					if (prop.opacity === 'hide') {
						self.css({'display': 'none', 'opacity': ''});
					}

					// run the main callback function
					propertyCallback.call(self);
				},
				easings = {
					bounce: CUBIC_BEZIER_OPEN + '0.0, 0.35, .5, 1.3' + CUBIC_BEZIER_CLOSE,
					linear: 'linear',
					swing: 'ease-in-out',

					// Penner equation approximations from Matthew Lein's Ceaser: http://matthewlein.com/ceaser/
					easeInQuad:     CUBIC_BEZIER_OPEN + '0.550, 0.085, 0.680, 0.530' + CUBIC_BEZIER_CLOSE,
					easeInCubic:    CUBIC_BEZIER_OPEN + '0.550, 0.055, 0.675, 0.190' + CUBIC_BEZIER_CLOSE,
					easeInQuart:    CUBIC_BEZIER_OPEN + '0.895, 0.030, 0.685, 0.220' + CUBIC_BEZIER_CLOSE,
					easeInQuint:    CUBIC_BEZIER_OPEN + '0.755, 0.050, 0.855, 0.060' + CUBIC_BEZIER_CLOSE,
					easeInSine:     CUBIC_BEZIER_OPEN + '0.470, 0.000, 0.745, 0.715' + CUBIC_BEZIER_CLOSE,
					easeInExpo:     CUBIC_BEZIER_OPEN + '0.950, 0.050, 0.795, 0.035' + CUBIC_BEZIER_CLOSE,
					easeInCirc:     CUBIC_BEZIER_OPEN + '0.600, 0.040, 0.980, 0.335' + CUBIC_BEZIER_CLOSE,
					easeInBack:     CUBIC_BEZIER_OPEN + '0.600, -0.280, 0.735, 0.045' + CUBIC_BEZIER_CLOSE,
					easeOutQuad:    CUBIC_BEZIER_OPEN + '0.250, 0.460, 0.450, 0.940' + CUBIC_BEZIER_CLOSE,
					easeOutCubic:   CUBIC_BEZIER_OPEN + '0.215, 0.610, 0.355, 1.000' + CUBIC_BEZIER_CLOSE,
					easeOutQuart:   CUBIC_BEZIER_OPEN + '0.165, 0.840, 0.440, 1.000' + CUBIC_BEZIER_CLOSE,
					easeOutQuint:   CUBIC_BEZIER_OPEN + '0.230, 1.000, 0.320, 1.000' + CUBIC_BEZIER_CLOSE,
					easeOutSine:    CUBIC_BEZIER_OPEN + '0.390, 0.575, 0.565, 1.000' + CUBIC_BEZIER_CLOSE,
					easeOutExpo:    CUBIC_BEZIER_OPEN + '0.190, 1.000, 0.220, 1.000' + CUBIC_BEZIER_CLOSE,
					easeOutCirc:    CUBIC_BEZIER_OPEN + '0.075, 0.820, 0.165, 1.000' + CUBIC_BEZIER_CLOSE,
					easeOutBack:    CUBIC_BEZIER_OPEN + '0.175, 0.885, 0.320, 1.275' + CUBIC_BEZIER_CLOSE,
					easeInOutQuad:  CUBIC_BEZIER_OPEN + '0.455, 0.030, 0.515, 0.955' + CUBIC_BEZIER_CLOSE,
					easeInOutCubic: CUBIC_BEZIER_OPEN + '0.645, 0.045, 0.355, 1.000' + CUBIC_BEZIER_CLOSE,
					easeInOutQuart: CUBIC_BEZIER_OPEN + '0.770, 0.000, 0.175, 1.000' + CUBIC_BEZIER_CLOSE,
					easeInOutQuint: CUBIC_BEZIER_OPEN + '0.860, 0.000, 0.070, 1.000' + CUBIC_BEZIER_CLOSE,
					easeInOutSine:  CUBIC_BEZIER_OPEN + '0.445, 0.050, 0.550, 0.950' + CUBIC_BEZIER_CLOSE,
					easeInOutExpo:  CUBIC_BEZIER_OPEN + '1.000, 0.000, 0.000, 1.000' + CUBIC_BEZIER_CLOSE,
					easeInOutCirc:  CUBIC_BEZIER_OPEN + '0.785, 0.135, 0.150, 0.860' + CUBIC_BEZIER_CLOSE,
					easeInOutBack:  CUBIC_BEZIER_OPEN + '0.680, -0.550, 0.265, 1.550' + CUBIC_BEZIER_CLOSE
				},
				domProperties = {},
				cssEasing = easings[opt.easing || 'swing'] ? easings[opt.easing || 'swing'] : opt.easing || 'swing';

			// seperate out the properties for the relevant animation functions
			for (var p in prop) {
				if (jQuery.inArray(p, pluginOptions) === -1) {
					var isDirection = jQuery.inArray(p, directions) > -1,
						cleanVal = _interpretValue(self, prop[p], p, (isDirection && prop.avoidTransforms !== true));

					if (prop.avoidTransforms !== true && _appropriateProperty(p, cleanVal, self)) {
						_applyCSSTransition(
							self,
							p,
							opt.duration,
							cssEasing,
							isDirection && prop.avoidTransforms === true ? cleanVal + valUnit : cleanVal,
							isDirection && prop.avoidTransforms !== true,
							isTranslatable,
							prop.useTranslate3d === true);

					}
					else {
						domProperties[p] = prop[p];
					}
				}
			}

			self.unbind(transitionEndEvent);

			var selfCSSData = self.data(DATA_KEY);

			if (selfCSSData && !_isEmptyObject(selfCSSData) && !_isEmptyObject(selfCSSData.secondary)) {
				callbackQueue++;

				self.css(selfCSSData.properties);

				// store in a var to avoid any timing issues, depending on animation duration
				var secondary = selfCSSData.secondary;

				// has to be done in a timeout to ensure transition properties are set
				setTimeout(function() {
					self.bind(transitionEndEvent, cssCallback).css(secondary);
				});
			}
			else {
				// it won't get fired otherwise
				opt.queue = false;
			}

			// fire up DOM based animations
			if (!_isEmptyObject(domProperties)) {
				callbackQueue++;
				originalAnimateMethod.apply(self, [domProperties, {
					duration: opt.duration,
					easing: jQuery.easing[opt.easing] ? opt.easing : (jQuery.easing.swing ? 'swing' : 'linear'),
					complete: propertyCallback,
					queue: opt.queue
				}]);
			}

			// strict JS compliance
			return true;
		});
	};

    jQuery.fn.animate.defaults = {};


	/**
		@public
		@name jQuery.fn.stop
		@function
		@description The enhanced jQuery.stop function (resets transforms to left/top)
		@param {boolean} [clearQueue]
		@param {boolean} [gotoEnd]
		@param {boolean} [leaveTransforms] Leave transforms/translations as they are? Default: false (reset translations to calculated explicit left/top props)
	*/
	jQuery.fn.stop = function(clearQueue, gotoEnd, leaveTransforms) {
		if (!cssTransitionsSupported) return originalStopMethod.apply(this, [clearQueue, gotoEnd]);

		// clear the queue?
		if (clearQueue) this.queue([]);

		// route to appropriate stop methods
		this.each(function() {
			var self = jQuery(this),
				selfCSSData = self.data(DATA_KEY);

			// is this a CSS transition?
			if (selfCSSData && !_isEmptyObject(selfCSSData)) {
				var i, restore = {};

				if (gotoEnd) {
					// grab end state properties
					restore = selfCSSData.secondary;

					if (!leaveTransforms && typeof selfCSSData.meta['left_o'] !== undefined || typeof selfCSSData.meta['top_o'] !== undefined) {
						restore['left'] = typeof selfCSSData.meta['left_o'] !== undefined ? selfCSSData.meta['left_o'] : 'auto';
						restore['top'] = typeof selfCSSData.meta['top_o'] !== undefined ? selfCSSData.meta['top_o'] : 'auto';

						// remove the transformations
						for (i = cssPrefixes.length - 1; i >= 0; i--) {
							restore[cssPrefixes[i]+'transform'] = '';
						}
					}
				} else if (!_isEmptyObject(selfCSSData.secondary)) {
					var cStyle = window.getComputedStyle(self[0], null);
					if (cStyle) {
						// grab current properties
						for (var prop in selfCSSData.secondary) {
							if(selfCSSData.secondary.hasOwnProperty(prop)) {
								prop = prop.replace(rupper, '-$1').toLowerCase();
								restore[prop] = cStyle.getPropertyValue(prop);

								// is this a matrix property? extract left and top and apply
								if (!leaveTransforms && (/matrix/i).test(restore[prop])) {
									var explodedMatrix = restore[prop].replace(/^matrix\(/i, '').split(/, |\)$/g);

									// apply the explicit left/top props
									restore['left'] = (parseFloat(explodedMatrix[4]) + parseFloat(self.css('left')) + valUnit) || 'auto';
									restore['top'] = (parseFloat(explodedMatrix[5]) + parseFloat(self.css('top')) + valUnit) || 'auto';

									// remove the transformations
									for (i = cssPrefixes.length - 1; i >= 0; i--) {
										restore[cssPrefixes[i]+'transform'] = '';
									}
								}
							}
						}
					}
				}

				// remove transition timing functions
				self.
					unbind(transitionEndEvent).
					css(selfCSSData.original).
					css(restore).
					data(DATA_KEY, null);
			}
			else {
				// dom transition
				originalStopMethod.apply(self, [clearQueue, gotoEnd]);
			}
		});

		return this;
	};
})(jQuery, jQuery.fn.animate, jQuery.fn.stop);


/*
  Superslides 0.3.0
  Fullscreen slideshow plugin for jQuery
  by Nic Aitch @nicinabox
  http://nicinabox.github.com/superslides/
*/

(function() {
  var $;

  $ = jQuery;

  $.fn.superslides = function(options) {
    var $children, $container, $control, $nav, $this, adjust_image_position, adjust_slides_size, animate, animating, current, first_load, height, is_mobile, load_image, next, play, play_interval, prev, size, start, stop, width;
    options = $.extend({
      delay: 5000,
      play: false,
      slide_speed: 'normal',
      slide_easing: 'linear',
      nav_class: 'slides-navigation',
      container_class: 'slides-container'
    }, options);
    $("." + options.container_class, this).wrap('<div class="slides-control" />');
    $this = this;
    $control = $('.slides-control', $this);
    $container = $("." + options.container_class);
    $children = $container.children();
    $nav = $("." + options.nav_class);
    size = $children.length;
    width = window.innerWidth || document.documentElement.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight;
    current = 0;
    prev = 0;
    next = 0;
    first_load = true;
    play_interval = 0;
    animating = false;
    is_mobile = navigator.userAgent.match(/ipad|iphone/i);
    start = function() {
      animate((first_load ? 0 : "next"));
      return play();
    };
    stop = function() {
      return clearInterval(play_interval);
    };
    play = function() {
      if (options.play) {
        if (play_interval) stop();
        return play_interval = setInterval(function() {
          return animate((first_load ? 0 : "next"));
        }, options.delay);
      }
    };
    load_image = function($img, callback) {
      var image;
      image = new Image();
      return $img.load(function() {
        if (typeof callback === 'function') callback(this);
        return this;
      });
    };
    adjust_image_position = function($img) {
      if (!($img.data('original-height') && $img.data('original-width'))) {
        load_image($img, function(image) {
          $img.data('original-height', image.height).removeAttr('height');
          $img.data('original-width', image.width).removeAttr('width');
          return adjust_image_position($img);
        });
      }
      if (height < $img.data('original-height')) {
        $img.css({
          top: -($img.data('original-height') - height) / 2
        });
      }
      if (width < $img.data('original-width')) {
        $img.css({
          left: -($img.data('original-width') - width) / 2
        });
      } else {
        $img.css({
          left: 0
        });
      }
      if ($img.data('original-height') && $img.data('original-width')) {
        return $this.trigger('slides.image_adjusted');
      }
    };
    adjust_slides_size = function($el) {
      $el.each(function(i) {
        $(this).width(width).height(height).css({
          left: width
        });
        return adjust_image_position($('img', this));
      });
      return $this.trigger('slides.sized');
    };
    animate = function(direction) {
      var position;
      if (!animating) {
        prev = current;
        animating = true;
        switch (direction) {
          case 'next':
            position = width * 2;
            direction = -position;
            next = current + 1;
            if (size === next) next = 0;
            break;
          case 'prev':
            position = 0;
            direction = 0;
            next = current - 1;
            if (next === -1) next = size - 1;
            break;
          default:
            prev = -1;
            next = direction;
        }
        current = next;
        $children.removeClass('current');
        $children.eq(current).css({
          left: position,
          display: 'block'
        });
        return $control.animate({
          useTranslate3d: (is_mobile ? true : false),
          left: direction
        }, options.slide_speed, options.slide_easing, function() {
          $control.css({
            left: -width
          });
          $children.eq(next).css({
            left: width,
            zIndex: 2
          });
          $children.eq(prev).css({
            left: width,
            display: 'none',
            zIndex: 0
          });
          $children.eq(current).addClass('current');
          if (first_load) {
            $container.fadeIn('fast');
            $this.trigger('slides.initialized');
            first_load = false;
          }
          animating = false;
          return $this.trigger('slides.animated');
        });
      }
    };
    return this.each(function() {
      $control.css({
        position: 'relative',
        width: width * 3,
        height: height,
        left: -width
      });
      $container.hide();
      $children.css({
        display: 'none',
        position: 'absolute',
        overflow: 'hidden',
        top: 0,
        left: width,
        zIndex: 0
      });
      $('#page2').css({
        overflow: 'scroll' //custum hack
      });      
      adjust_slides_size($children);
      $(window).resize(function(e) {
        width = window.innerWidth || document.documentElement.clientWidth;
        height = window.innerHeight || document.documentElement.clientHeight;
        adjust_slides_size($children);
        return $control.width(width * 3).css({
          left: -width,
          height: height
        });
      });
      $('a', $nav).click(function(e) {
        e.preventDefault();
        stop();
        if ($(this).hasClass('next')) {
          return animate('next');
        } else {
          return animate('prev');
        }
      });
      $this.on('slides.start', function(e) {
        return start();
      });
      $this.on('slides.stop', function(e) {
        return stop();
      });
      $this.on('slides.play', function(e) {
        return play();
      });
      $this.on('slides.next', function(e) {
        stop();
        return animate('next');
      });
      $this.on('slides.prev', function(e) {
        stop();
        return animate('prev');
      });
      return $this.trigger('slides.start');
    });
  };

}).call(this);
