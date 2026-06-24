var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function ( $ ) {
	'use strict';

	$( document ).ready( function () {
		$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.addClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.addClass( 'vc-woocommerce-add-to-cart-loading' )
					.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
			}
		} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
			if ( 'undefined' === typeof ($button) ) {
				$button = $( '.vc-gitem-add-to-cart-loading-btn' );
			}
			if ( $button && $button.hasClass( 'vc_gitem-link' ) ) {
				$button
					.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
					.parents( '.vc_grid-item-mini' )
					.removeClass( 'vc-woocommerce-add-to-cart-loading' )
					.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
			}
		} );
	} );
})( window.jQuery );

}

/*
     FILE ARCHIVED ON 13:57:37 Apr 15, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:21:31 Jun 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.498
  captures_list: 0.603
  exclusion.robots: 0.086
  exclusion.robots.policy: 0.073
  esindex: 0.01
  cdx.remote: 86.678
  LoadShardBlock: 157.976 (3)
  PetaboxLoader3.resolve: 118.341 (4)
  PetaboxLoader3.datanode: 142.931 (4)
  load_resource: 123.66
*/