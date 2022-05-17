$(() => {
  $('div.chapter a[href*="wikipedia"]')
    .attr({
      rel: 'external',
      title: function () {
        return `Learn more about ${$(this).text()} at Wikipedia.`;
      },
      id: index => `wikilink-${index}`
    });

  $('#hide-read')
    .change((e) => {
      if ($(e.target).is(':checked')) {
        $('.chapter p')
          .filter((i, p) => $(p).data('read'))
          .hide();
      } else {
        $('.chapter p').show();
      }
    });

  $('.chapter p')
    .click((e) => {
      const $elm = $(e.target);
      $elm
        .css(
          'textDecoration',
          $elm.data('read') ? 'none' : 'line-through'
        )
        .data('read', !$(e.target).data('read'));
    });

  // Inserta un A href despues de cada p perteneciente a div.chapter
  /*Alter the code that introduces the back to top links, so that the links only appear
    after the fourth paragraph.* Se usó NTH-CHILD */
  $('<a href="#top">back to top</a>')
    .insertAfter('div.chapter p:nth-child(4n)');
  $('<a id="top"></a>')
    .prependTo('body');

  /*
  $('span.footnote')
    .insertBefore('#footer')
    .wrapAll('<ol id="notes"></ol>')
    .wrap('<li></li>');*/
  const $notes = $('<ol id="notes"></ol>')
    .insertBefore('#footer');

  $('span.footnote')
    .each((i, span) => {
      // $(`<sup>${i + 1}</sup>`)
      //   .insertBefore(span);
      $(span)
        .clone()
        .insertBefore(`<sup>${i + 1}</sup>`)
        .appendTo($notes)
        .wrap('<li></li>');
    });

    $('<a href="#top">back to top</a>')
    .insertAfter('div.chapter p:nth-child(4n)');
  $('<a id="top"></a>')
    .prependTo('body')

  /*When a back to top link is clicked on, add a new paragraph after the link
  containing the message You were here. Ensure that the link still works.*/
  $('a[href*="top"]').click(function () {
    $('<p>You were here</p>')
      .insertAfter(this);
  });

  /*When the author's name is clicked, turn it bold (by adding an element, rather
  than manipulating classes or CSS attributes).*/
  $('#f-author').click(() => {
    $('#f-author')
      .wrap('<strong></strong>');
  });
});