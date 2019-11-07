$('form')
		.submit(
				function(e) {
					e.preventDefault();
					if (validform() === true) {

						let $photo = $("#photo");
						let formData = new FormData;

						formData.append('photo', $photo.prop('files')[0]);
						formData.append('name', $('#name').val());
						formData.append('surname', $('#surname').val());
						formData.append('age', $('#age').val());

						$
								.ajax({
									url : 'register',
									data : formData,
									processData : false,
									contentType : false,
									type : 'POST',
									success : function(student) {
										$('form').hide();
										$('div.show_photo')
												.html(
														'<h1>Registered student</h1>' +
														'<h2>First name - '+ student.name + '</h2>' +
														'<h2>Last name - '+ student.surname	+ '</h2>' + 
														'<h3>Age - '+ student.age + ' years</h3>' +
														'<h4>Students foto<h4>' +
														'<img src=""width="300" height="300" /> ');

										$('img').attr(
												"src",
												'data:image/png;base64,'
														+ student.base64Image);
										$('div.show_photo').show();
									}
								});

					}

				});

function validform() {

	let a = document.forms["my-form"]["name"].value;
	let b = document.forms["my-form"]["surname"].value;
	let c = document.forms["my-form"]["age"].value;
	let d = document.forms["my-form"]["photo"].value;

	if (a == null || a == "") {
		alert("Please enter your name");
		return false;
	} else if (b == null || b == "") {
		alert("Please enter your surname");
		return false;
	} else if (c == null || c == "") {
		alert("Please enter your age");
		return false;
	} else if (d == null || d == "") {
		alert("Please load your photo");
		return false;
	}
	return true;

}