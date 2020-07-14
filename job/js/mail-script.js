    // -------   Mail Send ajax

    $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('#primary-btn'); // submit button
        var alert = $('#alert-msg'); // alert div for show alert message
        var form2 = $('#myForm1'); // contact form
        var submit2 = $('#primary-btn1'); // submit button
        var alert2 = $('#alert-msg1'); // alert div for show alert message
        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: '/res', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    submit.html('Đăng Ký....');
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
        form2.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: '/login', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert2.fadeOut();
                    submit2.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert2.html(data).fadeIn(); // fade in response data
                    submit2.html('Đăng Nhập');
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });