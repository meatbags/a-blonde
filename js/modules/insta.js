/**
 ** insta.js
 ** - handle the instagram feed
 **/

class Insta {
  constructor() {
    // ajax get instagram feed and inject it into doc
    if (isHome) {
      this.target = $('.grid-instagram__inner');
      this.href = 'https://www.instagram.com/alabamablonde/';
      /*
      TODO: fix
      $.ajax({
        url: this.href,
        type:'GET',
				success: (data) => {
          this.inject(data);
				},
				error: (jqXHR, textStatus, errorThrown) => {
					console.warn(jqXHR, textStatus, errorThrown);
				}
			});
      */
		}
  }

  inject(data) {
    // inject pulled images into page
    var body = '<div id="body-mock">' + data.replace(/^[\s\S]*<body.*?>|<\/body>[\s\S]*$/ig, '') + '</div>';
    var $body = $(body);

    // parse child nodes
    for (var i=0; i<$body[0].children.length; i+=1) {
      var node = $body[0].children[i];

      // parse node text
      if (node.innerHTML.indexOf('window._sharedData') != -1) {
        var text = node.innerHTML.split('=');
        text.shift();

        console.log(text);

        text = text.join('=');

        text = text.replace(/;/g, '');
        var feed = JSON.parse(text);

        console.log(feed);
        /*
        var images = feed.entry_data.ProfilePage[0].user.media.nodes;
        images = images.map(item => item.thumbnail_src);
        // add to doc
        for (let j=0, len=images.length; j<len; ++j) {
          this.target.append(
            $('<div />', {class: 'grid__sixth responsive item'}).append(
              $('<div />', {
                class: 'item__inner clickable',
                html: '<a target="_blank" href="${this.href}"><img src="${images[j]}" /></a>'
              })
            )
          );
        }
        */
      }
    }
  }
}

export { Insta };
