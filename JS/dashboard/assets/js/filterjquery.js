$(() => {
    $('#Clear')
        .addClass('btn-outline-primary');

    $('#filters button')
        .click(function () {
            const bodyClass = this.id;
            $(`#authorsTBody > tr`)
                .addClass('d-none')
                .find(`p:contains(${bodyClass})`)
                .parent()
                .parent()
                .removeClass('d-none');

            $('#filters button')
                .removeClass('btn-outline-secondary')
                .removeClass('btn-outline-primary');
            $(this)
                .addClass('btn-outline-primary');
        });

    $('#Clear')
        .click(function () {
            $(`#authorsTBody > tr`)
                .removeClass('d-none')
                once = true;
        });
});