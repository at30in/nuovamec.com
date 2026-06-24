var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
/*!
 * Version: 1.2 Development
 */




	

var slidebars = function () {
    
    


	/**
	 * Setup
	 */

	// Cache all canvas elements
	var canvas = jQuery( '[data-canvas]' ),

	// Object of Slidebars
	offCanvas = {},

	// Variables, permitted sides and styles
	init = false,
	registered = false,
	sides = [ 'top', 'right', 'bottom', 'left' ],
	styles = [ 'reveal', 'push', 'overlay', 'shift' ],

	/**
	 * Get Animation Properties
	 */

	getAnimationProperties = function ( id ) {
		// Variables
		var elements = jQuery(),
		amount = '0px, 0px',
		duration = parseFloat( offCanvas[ id ].element.css( 'transitionDuration' ), 10 ) * 1000;

		// Elements to animate
		if ( offCanvas[ id ].style === 'reveal' || offCanvas[ id ].style === 'push' || offCanvas[ id ].style === 'shift' ) {
			elements = elements.add( canvas );
		}

		if ( offCanvas[ id ].style === 'push' || offCanvas[ id ].style === 'overlay' || offCanvas[ id ].style === 'shift' ) {
			elements = elements.add( offCanvas[ id ].element );
		}

		// Amount to animate
		if ( offCanvas[ id ].active ) {
			if ( offCanvas[ id ].side === 'top' ) {
				amount = '0px, ' + offCanvas[ id ].element.css( 'height' );
			} else if ( offCanvas[ id ].side === 'right' ) {
				amount = '-' + offCanvas[ id ].element.css( 'width' ) + ', 0px';
			} else if ( offCanvas[ id ].side === 'bottom' ) {
				amount = '0px, -' + offCanvas[ id ].element.css( 'height' );
			} else if ( offCanvas[ id ].side === 'left' ) {
				amount = offCanvas[ id ].element.css( 'width' ) + ', 0px';
			}
		}

		// Return animation properties
		return { 'elements': elements, 'amount': amount, 'duration': duration };
	},

	/**
	 * Slidebars Registration
	 */

	registerSlidebar = function ( id, side, style, element ) {
		// Check if Slidebar is registered
		if ( isRegisteredSlidebar( id ) ) {
			throw "Error registering Slidebar, a Slidebar with id '" + id + "' already exists.";
		}

		// Register the Slidebar
		offCanvas[ id ] = {
			'id': id,
			'side': side,
			'style': style,
			'element': element,
			'active': false
		};
	},

	isRegisteredSlidebar = function ( id ) {
		// Return if Slidebar is registered
		if ( offCanvas.hasOwnProperty( id ) ) {
			return true;
		} else {
			return false;
		}
	};

	/**
	 * Initialization
	 */

	this.init = function ( callback ) {
		// Check if Slidebars has been initialized
		if ( init ) {
			throw "Slidebars has already been initialized.";
		}

		// Loop through and register Slidebars
		if ( ! registered ) {
			jQuery( '[data-off-canvas]' ).each( function () {
				// Get Slidebar parameters
				var parameters = jQuery( this ).data( 'off-canvas' ).split( ' ', 3 );
				//console.log(parameters);
				// Make sure a valid id, side and style are specified
				if ( ! parameters || ! parameters[ 0 ] || sides.indexOf( parameters[ 1 ] ) === -1 || styles.indexOf( parameters[ 2 ] ) === -1 ) {
					throw "Error registering Slidebar, please specifiy a valid id, side and style'.";
				}

				// Register Slidebar
				registerSlidebar( parameters[ 0 ], parameters[ 1 ], parameters[ 2 ], jQuery( this ) );
			} );

			// Set registered variable
			registered = true;
		}

		// Set initialized variable
		init = true;

		// Set CSS
		this.css();

		// Trigger event
		jQuery( events ).trigger( 'init' );

		// Run callback
		if ( typeof callback === 'function' ) {
			callback();
		}
	};

	this.exit = function ( callback ) {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Exit
		var exit = function () {
			// Set init variable
			init = false;

			// Trigger event
			jQuery( events ).trigger( 'exit' );

			// Run callback
			if ( typeof callback === 'function' ) {
				callback();
			}
		};

		// Call exit, close open Slidebar if active
		if ( this.getActiveSlidebar() ) {
			this.close( exit );
		} else {
			exit();
		}
	};

	/**
	 * CSS
	 */

	this.css = function ( callback ) {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Loop through Slidebars to set negative margins
		for ( var id in offCanvas ) {
			// Check if Slidebar is registered
			if ( isRegisteredSlidebar( id ) ) {
				// Calculate offset
				var offset;

				if ( offCanvas[ id ].side === 'top' || offCanvas[ id ].side === 'bottom' ) {
					offset = offCanvas[ id ].element.css( 'height' );
				} else {
					offset = offCanvas[ id ].element.css( 'width' );
				}

				// Apply negative margins
				if ( offCanvas[ id ].style === 'push' || offCanvas[ id ].style === 'overlay' || offCanvas[ id ].style === 'shift' ) {
					offCanvas[ id ].element.css( 'margin-' + offCanvas[ id ].side, '-' + offset );
				}
			}
		}

		// Reposition open Slidebars
		if ( this.getActiveSlidebar() ) {
			this.open( this.getActiveSlidebar() );
		}

		// Trigger event
		jQuery( events ).trigger( 'css' );

		// Run callback
		if ( typeof callback === 'function' ) {
			callback();
		}
	};

	/**
	 * Controls
	 */

	this.open = function ( id, callback ) {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Check if id wasn't passed
		if ( ! id ) {
			throw "You must pass a Slidebar id.";
		}

		// Check if Slidebar is registered
		if ( ! isRegisteredSlidebar( id ) ) {
			throw "Error opening Slidebar, there is no Slidebar with id '" + id + "'.";
		}

		// Open
		var open = function () {
			// Set active state to true
			offCanvas[ id ].active = true;

			// Display the Slidebar
			offCanvas[ id ].element.css( 'display', 'block' );

			// Trigger event
			jQuery( events ).trigger( 'opening', [ offCanvas[ id ].id ] );

			// Get animation properties
			var animationProperties = getAnimationProperties( id );

			// Apply css
			animationProperties.elements.css( {
				'transition-duration': animationProperties.duration + 'ms',
				'transform': 'translate(' + animationProperties.amount + ')'
			} );

			// Transition completed
			setTimeout( function () {
				// Trigger event
				jQuery( events ).trigger( 'opened', [ offCanvas[ id ].id ] );

				// Run callback
				if ( typeof callback === 'function' ) {
					callback();
				}
			}, animationProperties.duration );
		};

		// Call open, close open Slidebar if active
		if ( this.getActiveSlidebar() && this.getActiveSlidebar() !== id ) {
			this.close( open );
		} else {
			open();
		}
	};

	this.close = function ( id, callback ) {
		// Shift callback arguments
		if ( typeof id === 'function' ) {
			callback = id;
			id = null;
		}

		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Check if id was passed but isn't a registered Slidebar
		if ( id && ! isRegisteredSlidebar( id ) ) {
			throw "Error closing Slidebar, there is no Slidebar with id '" + id + "'.";
		}

		// If no id was passed, get the active Slidebar
		if ( ! id ) {
			id = this.getActiveSlidebar();
		}

		// Close a Slidebar
		if ( id && offCanvas[ id ].active ) {
			// Set active state to false
			offCanvas[ id ].active = false;

			// Trigger event
			jQuery( events ).trigger( 'closing', [ offCanvas[ id ].id ] );

			// Get animation properties
			var animationProperties = getAnimationProperties( id );

			// Apply css
			animationProperties.elements.css( 'transform', '' );

			// Transition completetion
			setTimeout( function () {
				// Remove transition duration
				animationProperties.elements.css( 'transition-duration', '' );

				// Hide the Slidebar
				offCanvas[ id ].element.css( 'display', '' );

				// Trigger event
				jQuery( events ).trigger( 'closed', [ offCanvas[ id ].id ] );

				// Run callback
				if ( typeof callback === 'function' ) {
					callback();
				}
			}, animationProperties.duration );
		}
	};

	this.toggle = function ( id, callback ) {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Check if id wasn't passed
		if ( ! id ) {
			throw "You must pass a Slidebar id.";
		}

		// Check if Slidebar is registered
		if ( ! isRegisteredSlidebar( id ) ) {
			throw "Error toggling Slidebar, there is no Slidebar with id '" + id + "'.";
		}

		// Check Slidebar state
		if ( offCanvas[ id ].active ) {
			// It's open, close it
			this.close( id, function () {
				// Run callback
				if ( typeof callback === 'function' ) {
					callback();
				}
			} );
		} else {
			// It's closed, open it
			this.open( id, function () {
				// Run callback
				if ( typeof callback === 'function' ) {
					callback();
				}
			} );
		}
	};

	/**
	 * Active States
	 */

	this.isActive = function () {
		// Return init state
		return init;
	};

	this.isActiveSlidebar = function ( id ) {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Check if id wasn't passed
		if ( ! id ) {
			throw "You must provide a Slidebar id.";
		}

		// Check if Slidebar is registered
		if ( ! isRegisteredSlidebar( id ) ) {
			throw "Error retrieving Slidebar, there is no Slidebar with id '" + id + "'.";
		}

		// Return the active state
		return offCanvas[ id ].active;
	};

	this.getActiveSlidebar = function () {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Variable to return
		var active = false;

		// Loop through Slidebars
		for ( var id in offCanvas ) {
			// Check if Slidebar is registered
			if ( isRegisteredSlidebar( id ) ) {
				// Check if it's active
				if ( offCanvas[ id ].active ) {
					// Set the active id
					active = offCanvas[ id ].id;
					break;
				}
			}
		}
		//console.log(active);
		// Return
		return active;

	};

	this.getSlidebars = function () {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Create an array for the Slidebars
		var slidebarsArray = [];

		// Loop through Slidebars
		for ( var id in offCanvas ) {
			// Check if Slidebar is registered
			if ( isRegisteredSlidebar( id ) ) {
				// Add Slidebar id to array
				slidebarsArray.push( offCanvas[ id ].id );
			}
		}

		// Return
		return slidebarsArray;
	};

	this.getSlidebar = function ( id ) {
		// Check if Slidebars has been initialized
		if ( ! init ) {
			throw "Slidebars hasn't been initialized.";
		}

		// Check if id wasn't passed
		if ( ! id ) {
			throw "You must pass a Slidebar id.";
		}

		// Check if Slidebar is registered
		if ( ! isRegisteredSlidebar( id ) ) {
			throw "Error retrieving Slidebar, there is no Slidebar with id '" + id + "'.";
		}

		// Return the Slidebar's properties
		return offCanvas[ id ];
	};

	/**
	 * Events
	 */

	this.events = {};
	var events = this.events;

	/**
	 * Resizes
	 */

	jQuery( window ).on( 'resize', this.css.bind( this ) );
};
    
    
       
    
    

}

/*
     FILE ARCHIVED ON 13:57:48 Apr 15, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:21:32 Jun 24, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.668
  captures_list: 0.803
  exclusion.robots: 0.095
  exclusion.robots.policy: 0.079
  esindex: 0.012
  cdx.remote: 105.052
  LoadShardBlock: 145.791 (3)
  PetaboxLoader3.datanode: 269.576 (4)
  PetaboxLoader3.resolve: 99.605 (2)
  load_resource: 225.236
*/