$(document).ready(function() {
	tinymce.init({ selector:'textarea.editor' });

	// initialize with defaults
	$("#input-id").rating();
	
	// with plugin options
	$("#input-id").rating({min:1, max:10, step:2, size:'lg'});
});