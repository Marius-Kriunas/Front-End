'use strict';
var clickCounter = 0;


$(document).ready(function() {


    // 1.
    $('.navigation li').on('click', function() {

        $('.navigation li').removeClass('active');
        $(this).addClass('active');

        var text = $(this).find('a').text();
        alert(text);

        if(text == 'Home') {

            $.ajax({
                type: "GET",
                dataType: 'json',
                url: "http://viktoraslava.lt/pamokos/jquery-practical-03/home.json",
                success: function(data, status) {
                    // 1. variantas
                    // Sukuriame elementus
                    var h1 = $('<h1>'),
                        h3 = $('<h3>');


                    // Įdedame duomenis iš data į h1 elementą
                    h1.text(data.title);
                    h3.text(data.description);

                    // 2. variantas
                    // var html = '<h1>' + data.title + '</h1>' +
                    //            '<h3>' + data.description + '</h3>' +
                    //            '<button id="js-button" class="button">testas</button>';

                    $('section.intro .text').html('').append(h1).append(h3);
                }
            })

        } else if(text == 'About us') {

            $.ajax({
                type: "GET",
                dataType: 'json',
                url: "http://viktoraslava.lt/pamokos/jquery-practical-03/about.jso",
                error: function(status) {
                    // Erroram
                    console.log(status);
                },
                success: function(data, status) {

                    var h1 = $('<h1>'),
                        p = $('<p>'),
                        button = $('<button id="js-team" class="button">');


                    h1.text(data.title);
                    p.text(data.description);
                    button.text('See our team');

                    $('section.intro .text').html('').append(h1).append(p).append(button);

                    $("#js-team").on('click', function() {
                        $('html, body').animate({
                            scrollTop: $(".team").offset().top
                        }, 1000);
                    });
                }
            })

        } else if(text == 'Social') {

            // HTML'o gavimo pavyzdys
            $.ajax({
                type: "GET",
                dataType: 'html',
                url: "http://viktoraslava.lt/",
                success: function(data, status) {
                    console.log(data);
                }
            })


        }

    });

    // 2.
    $("#js-scroll").on('click', function() {
        $('html, body').animate({
            scrollTop: $(".team").offset().top
        }, 1000);
    });

    // 3.
    $('.member i').on('click', function() {
        // 6.
        clickCounter++;

        var memberCount = $('.member').length;

        if(memberCount == clickCounter) {
            $('section.team').animate({
                height: 0,
                opacity: 0,
                padding: 0
            }, 1000, function() {
                $(this).remove();
            })
        }
        // end of 6.

        $(this).parent().animate({
            opacity: 0
        }, 500, function() {
            $(this).addClass('hidden');
        });


    });

    // 4.
    $('#follow').on('click', function() {
        $('.instagram').toggleClass('small');
    })

    // 5.
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();

        $('section.contact').animate({
            height: 0,
            opacity: 0,
            padding: 0
        }, 1000, function() {
            $(this).remove();
        })

    });

    $('#js-open-menu').click(function() {

        $('.navigation .menu').toggleClass('animated');

    });

});
