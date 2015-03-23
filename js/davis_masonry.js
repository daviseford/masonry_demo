/**
 * Created by Davis on 3/23/2015.
 */
// JavaScript Document
$(window).load(function() {
    $('#masonryContainer').masonry({
        columnWidth: 100,
        itemSelector: '.item'
    }).imagesLoaded(function() {
        $('masonryContainer').masonry('reload');
    });
    Sticker.init('.sticker');
});