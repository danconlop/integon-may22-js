$(() => {

  $('#selected-plays > li').addClass('horizontal');

  $('#selected-plays li:not(.horizontal)').addClass('sub-level');

  $('#selected-plays li:not(.sub-level)').addClass('big-letter');

  // ^ -> INICIA CON
  $('a[href^="mailto:"]').addClass('mailto');

  // $ -> FINALIZA CON
  $('a[href$=".pdf"]').addClass('pdflink');

  // ^ -> INICIA CON y * -> CONTIENE EN CUALQUIER PARTE
  // Se pueden combinar los selectores de atributos cada uno en su par de llaves [], [][] funciona como un Y
  // para que se cumpla una condición u otra se utiliza una coma ,
  $('a[href^="http"][href*="henry"]').addClass('henrylink');

});
