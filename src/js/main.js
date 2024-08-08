$(document).ready(function () {
    $('.btn-celular').on('click', function () {
        $('.navcelular').toggleClass('ativo');
        $('.btn-celular').find('i').toggleClass('fa-x');
    });
});
//puxar as classes e ids do html, o $ Ã© um atalho para o jquery, que Ã© uma biblioteca do javascript. ele serve para selecionar elementos do html.
const sections = $('section');
const navItens = $('.navitem');

//agora vamos abrir uma funÃ§Ã£o para scrollar a pÃ¡gina, alternar entre as seÃ§Ãµes e mudar a cor do item do menu.
$(window).on('scroll', function () {
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0) {
        header.css('box-shadow', 'none');
    } else {
        header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
    }
// aqui faz o sublinhado trocar conforme a seÃ§Ã£o que estÃ¡ sendo visualizada
    sections.each(function (i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop + section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false;
        }
    })

    navItens.removeClass('ativo');
    $(navItens[activeSectionIndex]).addClass('ativo');
});