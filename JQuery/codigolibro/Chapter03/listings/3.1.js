$(() => {
  $('#switcher-default')
    .addClass('selected');
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
    .on(('click.collapse'),(e) => {
      $(e.currentTarget)
        .children('button')
        .toggleClass('hidden');
    });

  $('#switcher-default')
    .addClass('selected');
  $('#switcher button')
    .click((e) => {
      const bodyClass = e.target.id.split('-')[1];
      $('body')
        .removeClass()
        .addClass(bodyClass);
      $(e.target)
        .addClass('selected')
        .removeClass('selected');
      e.stopPropagation();
    });
});