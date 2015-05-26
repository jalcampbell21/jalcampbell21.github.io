/*THE CACHE OBJECT*/

var cache = {
	"http://cdn.morguefile.com/imageData/public/files/m/mabo06/preview/fldr_2012_07_02/file3611341262531.jpg": {
		"$img": jQuery object,
		"isLoading": false
	},
	"http://cdn.morguefile.com/imageData/public/files/h/hotblack/preview/fldr_2008_11_02/file00089355730.jpg": {
		"$img": jQuery object,
		"isLoading": false
	},
	"http://cdn.morguefile.com/imageData/public/files/m/mensatic/preview/fldr_2012_07_19/file9471342745578.jpg": {
		"$img": jQuery object,
		"isLoading": false
	}
}

var request;
var $current;
var cache = {};
var $frame = $('#photo-viewer');
var $thumbs = $('.thumb');

function crossfade($img) {
	if ($current) {
		$current.stop().fadeOut('slow');
	}

	$img.css ({
		marginLeft: -$img.width() / 2,
		marginTop: -$img.height() / 2,
	});

	$img.stop().fadeTo('slow', 1);

	$current = $img;

}

$(document).on('click', '.thumb', function(e) {
	var $img;
	var src = this.href;
	request = src;

	e.preventDefault();

	$thumbs.removeClass('active');
	$(this).addCalss('active');

	if (cache.hasOwnProperty(src)) {
		if cache[src].isLoading === false) {
		crossfade(cache[src].$img);
		}
	} else {
		$img = $('<img/>');
		cache[src] = {
			$img: $img,
			isLoading: true
		};

		$img.on('load', function() {
			$img.hide();

			$frame.removeClass('is-loading').append($img);
			cache[src].isLoading = false;
			if (request === src) {
				crossfade($img);
			}
		});

		$frame.addClass('is-Loading');

		$img.attr({
			'src': src,
			'alt': this.title || ''
		});
	}
});

$('.thumb').eq(0).click();











