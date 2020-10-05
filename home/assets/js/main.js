(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile)
			$body.addClass('is-touch');

	// Forms.
		var $form = $('form');

		// Auto-resizing textareas.
			$form.find('textarea').each(function() {

				var $this = $(this),
					$wrapper = $('<div class="textarea-wrapper"></div>'),
					$submits = $this.find('input[type="submit"]');

				$this
					.wrap($wrapper)
					.attr('rows', 1)
					.css('overflow', 'hidden')
					.css('resize', 'none')
					.on('keydown', function(event) {

						if (event.keyCode == 13
						&&	event.ctrlKey) {

							event.preventDefault();
							event.stopPropagation();

							$(this).blur();

						}

					})
					.on('blur focus', function() {
						$this.val($.trim($this.val()));
					})
					.on('input blur focus --init', function() {

						$wrapper
							.css('height', $this.height());

						$this
							.css('height', 'auto')
							.css('height', $this.prop('scrollHeight') + 'px');

					})
					.on('keyup', function(event) {

						if (event.keyCode == 9)
							$this
								.select();

					})
					.triggerHandler('--init');

				// Fix.
					if (browser.name == 'ie'
					||	browser.mobile)
						$this
							.css('max-height', '10em')
							.css('overflow-y', 'auto');

			});

	// Menu.
		var $menu = $('#menu');

		$menu.wrapInner('<div class="inner"></div>');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {
				event.stopPropagation();
			})
			.on('click', 'a', function(event) {

				var href = $(this).attr('href');

				event.preventDefault();
				event.stopPropagation();

				// Hide.
					$menu._hide();

				// Redirect.
					if (href == '#menu')
						return;

					window.setTimeout(function() {
						window.location.href = href;
					}, 350);

			})
			.append('<a class="close" href="#menu">Close</a>');

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('click', function(event) {

				// Hide.
					$menu._hide();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);


// Update variable as user scrolls page
window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

// Football Modal
let footballModalBtn = document.getElementById("football-modal-trigger")
let footballModal = document.getElementById("football-modal")
let footballCloseBtn = document.getElementById("football-close-btn")

footballModalBtn.onclick = function(){
  footballModal.style.display = "block"
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

footballCloseBtn.onclick = function(){
  footballModal.style.display = "none"
	const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.onclick = function(e){
  if(e.target == footballModal){
    footballModal.style.display = "none"
		const body = document.body;
	  const scrollY = body.style.top;
	  body.style.position = '';
	  body.style.top = '';
	  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}

// Likewise Modal
let lwModalBtn = document.getElementById("lw-modal-trigger")
let lwModal = document.getElementById("lw-modal")
let lwCloseBtn = document.getElementById("lw-close-btn")

lwModalBtn.onclick = function(){
  lwModal.style.display = "block"
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

lwCloseBtn.onclick = function(){
  lwModal.style.display = "none"
	const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.onclick = function(e){
  if(e.target == lwModal){
    lwModal.style.display = "none"
		const body = document.body;
	  const scrollY = body.style.top;
	  body.style.position = '';
	  body.style.top = '';
	  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}

// CoRisk Modal
let crModalBtn = document.getElementById("cr-modal-trigger")
let crModal = document.getElementById("cr-modal")
let crCloseBtn = document.getElementById("cr-close-btn")

crModalBtn.onclick = function(){
  crModal.style.display = "block"
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

crCloseBtn.onclick = function(){
  crModal.style.display = "none"
	const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.onclick = function(e){
  if(e.target == crModal){
    crModal.style.display = "none"
		const body = document.body;
	  const scrollY = body.style.top;
	  body.style.position = '';
	  body.style.top = '';
	  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}

// Econ Research Modal
let econModalBtn = document.getElementById("econ-modal-trigger")
let econModal = document.getElementById("econ-modal")
let econCloseBtn = document.getElementById("econ-close-btn")

econModalBtn.onclick = function(){
  econModal.style.display = "block"
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

econCloseBtn.onclick = function(){
  econModal.style.display = "none"
	const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.onclick = function(e){
  if(e.target == econModal){
    econModal.style.display = "none"
		const body = document.body;
	  const scrollY = body.style.top;
	  body.style.position = '';
	  body.style.top = '';
	  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}

// HFA Modal
let hfaModalBtn = document.getElementById("hfa-modal-trigger")
let hfaModal = document.getElementById("hfa-modal")
let hfaCloseBtn = document.getElementById("hfa-close-btn")

hfaModalBtn.onclick = function(){
  hfaModal.style.display = "block"
	const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}`;
}

hfaCloseBtn.onclick = function(){
  hfaModal.style.display = "none"
	const body = document.body;
  const scrollY = body.style.top;
  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);
}

window.onclick = function(e){
  if(e.target == hfaModal){
    hfaModal.style.display = "none"
		const body = document.body;
	  const scrollY = body.style.top;
	  body.style.position = '';
	  body.style.top = '';
	  window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}
