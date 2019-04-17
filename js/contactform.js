$('#gform').submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: "https://docs.google.com/a/blakedavies.net/forms/d/e/1FAIpQLSfHdHMJePTJ3R5JOtBrH8zdPdX74eXQ8TDFIGjgkbIbGNdpnQ/formResponse",
		data: $(this).serialize(),
		type: "POST",
		dataType: "xml",
		success: function(data) {
			console.log('Submission successful');
		},
		error: function(xhr, status, error) {
			console.log('Submission failed: ' + error);
		}
	});
});

$('#gform').on('submit', function(e) {
	$('#gform *').fadeOut(0);
	$('#contact-box *').fadeOut(0);
	$('#gform').prepend(
		'<div class="thank-you-box"><div><p class="thank-you">Hi, thanks for reaching out! We will get back to you within 24 hours.</p><p class="thank-you">If your issue cannot wait, you can also reach us via our <a href="https://www.facebook.com/Orion-Import-Group-110501569627947/" target="blank">Facebook Page</a> or call 0429-105-580.</p></div></div>'
	);
});