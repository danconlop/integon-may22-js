// $(() => {
//   const sizeMap = {
//     'switcher-small': n => n / 1.4,
//     'switcher-large': n => n * 1.4,
//     'switcher-default': () => defaultSize
//   };

//   const $speech = $('div.speech');
//   const defaultSize = parseFloat($speech.css('fontSize'));

//   $('#switcher button')
//     .click((e) => {
//       const num = parseFloat($speech.css('fontSize'));
//       $speech.animate({
//         fontSize: `${sizeMap[e.target.id](num)}px`
//       });
//     });

//   // $('p')
//   //   .eq(1)
//   //   .hide();

//   // $('a.more')
//   //   .click((e) => {
//   //     e.preventDefault();
//   //     $('p')
//   //       .eq(1)
//   //       .slideDown(5000);
//   //     $(e.target)
//   //       .hide();
//   //   });
//   const $firstPara = $('p')
//     .eq(1)
//     .hide();

//   $('a.more')
//     .click((e) => {
//       e.preventDefault();

//       $firstPara.animate({
//         opacity: 'toggle',
//         height: 'toggle'
//       }, 2500);

//       $(e.target)
//         .text(
//           $(e.target).text() === 'read more' ?
//             'read less' : 'read more'
//         );
//     });

//   // animar los P del div.speech 
//   // cuando se dé click a un div.label
//   $slow = 2500;

//   $('div.label')
//     .click((e) => {
//       const $switcher = $(e.target).parent();
//       const paraWidth = $('div.speech p').outerWidth();
//       const switcherWidth = $switcher.outerWidth();

//       // $switcher
//       //   .css('position', 'relative')
//       //   .fadeTo('fast', 0.5)
//       //   .animate(
//       //     { left: paraWidth - switcherWidth },
//       //     { duration: 'slow', queue: false }
//       //   )
//       //   .fadeTo('slow', 1.0)
//       //   .slideUp('slow')
//       //   .css('backgroundColor', '#f00')
//       //   .slideDown('slow');

//       $switcher
//         .css('position', 'relative')
//         .fadeTo('fast', 0.5)
//         .animate(
//           { left: paraWidth - switcherWidth },
//           { duration: 'slow', queue: false }
//         )
//         .fadeTo('slow', 1.0)
//         .slideUp('slow')
//         .queue((next) => {
//           $switcher.css('backgroundColor', '#f00');
//           next();
//         })
//         .slideDown('slow');
//     });


//   $('p')
//     .eq(2)
//     .css('border', '1px solid #333')
//     .click((e) => {
//       $(e.target)
//         .next()
//         .slideDown('slow', () => {
//           $(e.target).slideUp('slow');
//         });
//     });
//   $('p')
//     .eq(3)
//     .css('background-color', '#ccc')
//     // .hide();
//   // Fin de codigo
// });

$(() => {
  // Alter the stylesheet to hide the contents of the page initially. When the page is  loaded, fade in the contents slowly
  // $('body')
  //   .fadeOut(2500);

  // Give each paragraph a yellow background only when the mouse is over it.
  $('p').mouseover(function () {
    $(this).css('background-color', '#FFFF00')
  });
  $('p').mouseout(function () {
    $(this).css('background-color', '')
  });

  /*Make a click on the title (<h2>) and simultaneously fade it to 25 percent opacity
  and grow its left-hand margin to 20px. Then, when this animation is complete,
  fade the speech text to 50 percent opacity.*/
  $('h2').click(function () {
    $(this)
      .fadeTo(2500, 0.25)
      .css('margin-left', '20px')
      .queue((next) => {
        $('.speech').fadeTo(2500, 0.50);
        next();
      })
  });

  /*Here's a challenge for you. React to presses of the arrow keys by smoothly
  moving the switcher box 20 pixels in the corresponding direction. The key codes
  for the arrow keys are: 37 (left), 38 (up), 39 (right), and 40 (down).*/
  $(document).keyup((e) => {
    const $switcher = $('#switcher');
    const left = parseInt($switcher.css('margin-left'));
    const top = parseInt($switcher.css('margin-top'));

    switch (e.which) {
      case 37: // left
        $switcher.animate(
          { 'margin-left': `${left - 20}px` },
        )
        break;
      case 38:
        $switcher.animate(
          { 'margin-top': `${top - 20}px` },
        )
        break;
      case 39: // right
        $switcher.animate(
          { 'margin-left': `${left + 20}px` },
        )
        break;
      case 40:
        $switcher.animate(
          { 'margin-top': `${top + 20}px` },
        )
        break;
    }
  });

});
