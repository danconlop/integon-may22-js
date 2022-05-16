$(() => {
  const triggers = {
    D: 'default',
    N: 'narrow',
    L: 'large'
  };

  $(document)
    .keyup((e) => {
      const key = String.fromCharCode(e.which).toUpperCase();
      if (key in triggers) {
        $(`#switcher-${triggers[key]}`).click();
      }
    });



  $('#switcher-default').addClass('selected');

  $('#switcher button')
    .click((e) => {
      const bodyClass = e.target.id.split('-')[1];
      $('body')
        .removeClass()
        .addClass(bodyClass);
      $('#switcher button').removeClass();
      $(e.target)
        .addClass('selected')

      e.stopPropagation();
    });

  $('#switcher-narrow #switcher-large')
    .click(() => {
      $('#switcher').off('clic.collapse');
    });

  $('#switcher')
    .on(('click.collapse'), (e) => {
      $(e.currentTarget)
        .children('button')
        .toggleClass('hidden');
    });

  $('#switcher h3')
    .hover(function () {
      $(this).addClass('hover');
    }, function () {
      $(this).removeClass('hover');
    });

  //$('#switcher').click();

  //When Charles Dickens is clicked, apply the selected style to it.
  $(".author").mousedown(function (e) {
    $(e.currentTarget).toggleClass('selected');
  });

  //When a chapter title (<h3 class="chapter-title">) is double-clicked, toggle the visibility of the chapter text.
  $(".chapter-title").dblclick(function (e) {
    $(e.currentTarget)
      .nextAll('p')
      .toggleClass('hidden');
  });

  // When the user presses the right arrow key, cycle to the next body class. The key code for the right arrow key is 39.

  let counter = 1;

  $(document).keyup((e) => {

    const $body = $('body');
    $body.removeClass();

    if (e.which == 39) {
      switch (counter) {
        case 1:
          $('#switcher-default').click();
          break;
        case 2:
          $('#switcher-narrow').click();
          break;
        case 3:
          $('#switcher-large').click();
          break
      }
    }

    counter == 3 ? counter = 1 : counter++;
  });
});