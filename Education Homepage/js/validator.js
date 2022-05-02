$(function () {

    $("[jsname=gateway-form]").validate({
        rules: {
            "name": {
                required: true,
            },
            "telephone": {
                required: true,
                max: 10,
            },
            "email": {
                required: true,
            },
            "country-int": {
                required: true,
            },
            "city": {
                required: true,
            }
        },
        messages: {
            "name": {
                required: 'Please enter your name',
                validVal: 'Please enter valid name'
            },
            "telephone": {
                required: 'Please enter your telephone number',
                max: 'Maximum Limit Reached'
            },
            "email": {
                required: 'Please enter your Email address'
            },
            "country-int": {
                required: 'Please enter the preferred country'
            },
            "city": {
                required: 'Please enter your city name'
            }
        }
    });

})
