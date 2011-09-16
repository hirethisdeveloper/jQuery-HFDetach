/*
 * jQuery HFDetach v1.0 - http://www.hirethisdeveloper.com/
 *
 * Detaches given object from the DOM until the page scrolltop meets the threshold of the
 * height of the scrollable object.
 * 
 * Example: $("div.footer").hfdetach({'opt_obj': $("div.footerbar"),'zindex': 500 });
 *
 * TERMS OF USE - jQuery HFDetach
 *
 * Open source under the BSD License.
 *
 * Copyright 2011 Phil Pastorek, HireThisDeveloper
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
(function(b){var c={detach:1,thisobject:null,zindex:500,opt_obj:null};var a={init:function(d){if(d){b.extend(c,d)}c.thisobject=$(this);b(window).bind("resize",a.reportPosition);b(window).bind("scroll",a.reportPosition);b(document).bind("load",a.reportPosition);b(window).bind("load",a.reportPosition)},reportPosition:function(){var g=b(window).height();var e=b(document).height();var k=(e-g);var f=b(document).scrollTop();var h=c.thisobject.height();var i=c.opt_obj.height();var d=k-h+i;var j=1;if(f>=d){j=0}c.detach=j;a.run()},run:function(){if(c.detach==1){c.opt_obj.css({position:"fixed",bottom:"0px","z-index":c.zindex})}else{c.opt_obj.css({position:"static",bottom:"auto","z-index":c.zindex})}}};b.fn.hfdetach=function(d){if(a[d]){return a[d].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof d==="object"||!d){return a.init.apply(this,arguments)}else{b.error("Method "+d+" does not exist on jQuery.hfdetach")}}}})(jQuery);

