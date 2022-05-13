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

  // $('tr:even').addClass('alt');
  // impar > tr:odd empieza con 0 el conteo
  // $('tr:odd').addClass('alt');

  // $('tr:nth-child(even)').addClass('alt');
  // impar > nth-child empieza con 1
  // $('tr:nth-child(odd)').addClass('alt');

  // $('td:contains(Henry)').addClass('highlight');

  // Form selectors

  $('tr')
    .filter(':even')
    .addClass('alt');

  $('a')
    .filter((i, a) =>
      a.hostname && a.hostname !== location.hostname
    )
    .addClass('external');

  // Puede usarse PREV / NEXT (afecta solo 1 elemento) O NEXTALL / PREVALL (afecta a todos los que le siguen)
  // para incluir el td filtrado se usa .addBack en conjunto con prev/ext o nextall/prevall
  // $('td:contains(Henry)')
  //   .nextAll()
  //   .addBack()
  //   .addClass('highlight');

  // $('td:contains(Henry)')
  //   .parent()
  //   .children()
  //   .addClass('highlight');

  $('td:contains(Henry)') // Find every cell containing "Henry"
    .parent() // Select its parent
    .find('td:eq(1)') // Find the 2nd descendant cell
    .addClass('highlight') // Add the "highlight" class
    .end() // Return to the parent of the cell containing "Henry"
    .find('td:eq(2)') // Find the 3rd descendant cell
    .addClass('highlight'); // Add the "highlight" class

    /*

  // Iterando sobre objetos del DOM
  const eachText = [];
  $('td')
    .each((index, cell) => {
      if (cell.textContent.startsWith('H')) {
        eachText.push(`${index}-${cell.textContent}`);
      }
    });

  console.log('each', eachText);
*/

  // EJERCICIOS
  //Add a class of special to all of the <li> elements at the second level of the nested list
  $('li > ul')
  .children('li')
  .addClass('special');

  //Add a class of year to all the table cells in the third column of a table
  $('td:nth-child(3)')
  .addClass('year');

  //Add the class special to the first table row that has the word Tragedy in it.
  $('td')
  .filter(':contains(Tragedy)')
  .filter(':first')
  .parent()
  .children()
  .addClass('special');

  // Here's a challenge for you. Select all the list items (<li>s) containing a link (<a>).
  // Add the class afterlink to the sibling list items that follow the ones selected.
  $('li:has(> a)')
    .nextAll()
    .addClass('afterlink');

  // Here's another challenge for you. Add the class tragedy to the closest ancestor
  // <ul> of any .pdf link.
   $('a[href$=".pdf"]').closest('ul').addClass('tragedy');

});
