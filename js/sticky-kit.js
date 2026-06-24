var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");

/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/

(function(){var a,b;a=this.jQuery||window.jQuery,b=a(window),a.fn.stick_in_parent=function(c){var d,e,f,g,h,i,j,k,l,m,n;for(null==c&&(c={}),n=c.sticky_class,h=c.inner_scrolling,m=c.recalc_every,l=c.parent,k=c.offset_top,j=c.spacer,e=c.bottoming,null==k&&(k=30),null==l&&(l=void 0),null==h&&(h=!0),null==n&&(n="is_stuck"),d=a(document),null==e&&(e=!0),f=function(c,f,g,i,o,p,q,r){var s,t,u,v,w,x,y,z,A,B,C,D;if(!c.data("sticky_kit")){if(c.data("sticky_kit",!0),w=d.height(),y=c.parent(),null!=l&&(y=y.closest(l)),!y.length)throw"failed to find stick parent";if(s=u=!1,(C=null!=j?j&&c.closest(j):a("<div />"))&&C.css("position",c.css("")),z=function(){var a,b,e;if(!r&&(w=d.height(),a=parseInt(y.css("border-top-width"),10),b=parseInt(y.css("padding-top"),10),f=parseInt(y.css("padding-bottom"),10),g=y.offset().top+a+b,i=y.height(),u&&(s=u=!1,null==j&&(c.insertAfter(C),C.detach()),c.css({position:"",top:"",width:"",bottom:""}).removeClass(n),e=!0),o=c.offset().top-(parseInt(c.css("margin-top"),10)||0)-k,p=c.outerHeight(!0),q=c.css("float"),C&&C.css({width:c.outerWidth(!0),height:p,display:c.css("display"),"vertical-align":c.css("vertical-align"),float:q}),e))return D()},z(),p!==i)return v=void 0,x=k,B=m,D=function(){var a,l,t,A;if(!r&&(t=!1,null!=B&&0>=--B&&(B=m,z(),t=!0),t||d.height()===w||z(),t=b.scrollTop(),null!=v&&(l=t-v),v=t,u?(e&&(A=t+p+x>i+g,s&&!A&&(s=!1,c.css({position:"fixed",bottom:"",top:x}).trigger("sticky_kit:unbottom"))),t<o&&(u=!1,x=k,null==j&&("left"!==q&&"right"!==q||c.insertAfter(C),C.detach()),a={position:"",width:"",top:""},c.css(a).removeClass(n).trigger("sticky_kit:unstick")),h&&(a=b.height(),p+k>a&&!s&&(x-=l,x=Math.max(a-p,x),x=Math.min(k,x),u&&c.css({top:x+"px"})))):t>o&&(u=!0,a={position:"fixed",top:x},a.width="border-box"===c.css("box-sizing")?c.outerWidth()+"px":c.width()+"px",c.css(a).addClass(n),null==j&&(c.after(C),"left"!==q&&"right"!==q||C.append(c)),c.trigger("sticky_kit:stick")),u&&e&&(null==A&&(A=t+p+x>i+g),!s&&A)))return s=!0,"static"===y.css("position")&&y.css({position:"relative"}),c.css({position:"absolute",bottom:f,top:"auto"}).trigger("sticky_kit:bottom")},A=function(){return z(),D()},t=function(){if(r=!0,b.off("touchmove",D),b.off("scroll",D),b.off("resize",A),a(document.body).off("sticky_kit:recalc",A),c.off("sticky_kit:detach",t),c.removeData("sticky_kit"),c.css({position:"",bottom:"",top:"",width:""}),y.position("position",""),u)return null==j&&("left"!==q&&"right"!==q||c.insertAfter(C),C.remove()),c.removeClass(n)},b.on("touchmove",D),b.on("scroll",D),b.on("resize",A),a(document.body).on("sticky_kit:recalc",A),c.on("sticky_kit:detach",t),setTimeout(D,0)}},g=0,i=this.length;g<i;g++)c=this[g],f(a(c));return this}}).call(this);


}

/*
     FILE ARCHIVED ON 13:57:46 Apr 15, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:21:27 Jun 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.841
  captures_list: 0.947
  exclusion.robots: 0.109
  exclusion.robots.policy: 0.092
  esindex: 0.019
  cdx.remote: 317.276
  LoadShardBlock: 99.068 (3)
  PetaboxLoader3.datanode: 81.554 (4)
  load_resource: 129.387
*/