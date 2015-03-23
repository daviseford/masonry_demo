// JavaScript Document
$('document').ready(function() {
    var options = {
        videoId: 'VFS-vTtTqew',
        start: 1,
        ratio: 4/3 // usually either 4/3 or 16/9 -- tweak as needed
    };
    $('#wrapper').tubular(options);
});

$(window).load(function() {
        $('#container').masonry({
            columnWidth: 84,
            itemSelector: '.item'
        }).imagesLoaded(function() {
            $('#container').masonry('reload');
        });

    Sticker.init('.sticker');
});