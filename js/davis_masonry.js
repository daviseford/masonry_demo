/**
 * Created by Davis on 3/23/2015.
 */
// JavaScript Document

window.onload = function() {
	var container = document.querySelector('#masonryContainer');
	var msnry = new Masonry( container, {
  columnWidth: 100,
  itemSelector: '.item'
});
imagesLoaded( container, function() {
  msnry.layout();
});
}
