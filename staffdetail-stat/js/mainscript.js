$(function() {


	$('a.home').click(function() {
		$('a.home').toggleClass('active');
	});
	$('a.graph').click(function() {
		$('a.graph').toggleClass('active');
		$('ul#drop1').slideToggle('hidden');
		$('a.graph div.fa').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
	});
	$('a.speaker').click(function() {
		$('a.speaker').toggleClass('active');
		$('ul#drop2').slideToggle('slow');
		$('a.speaker div.fa').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
	});
	$('a.rectangle').click(function() {
		$('a.rectangle').toggleClass('active');
		$('ul#drop3').slideToggle('slow');
		$('a.rectangle div.fa').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
	});
	$('a.news-paper').click(function() {
		$('a.news-paper').toggleClass('active');
		$('ul#drop4').slideToggle('slow');
		$('a.news-paper div.fa').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
	});
	$('a.graph-1').click(function() {
		$('a.graph-1').toggleClass('active');
		$('ul#drop5').slideToggle('slow');
		$('a.graph-1 div.fa').toggleClass('fa-caret-right').toggleClass('fa-caret-down');
	});

	$('input.date').datepicker({dateFormat:'dd/mm/yy'});

	$('#companies').scombobox();




})