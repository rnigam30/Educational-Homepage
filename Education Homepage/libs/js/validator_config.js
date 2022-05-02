$.validator.setDefaults({
    errorClass: 'error-text',
    success: "valid",
    highlight: function () {
        return false
    },
    errorPlacement: function (errorLabel, element) {

        var regex = /radio|checkbox/g;

        if (regex.test(element.attr("type"))) {

            element.parents(".radio-button-parent").append(errorLabel);

        } else {

            errorLabel.insertAfter(element);
        }
    }
});

$.validator.addMethod("max", function (value, element, param) {

    if ($(element).val().length > param) {

        var newVal = $(element).val().slice(0, param);

        $(element).val(newVal);

        return false

    } else {

        return true

    }
});

$.validator.addMethod("wordCount", function (value, element, param) {

    if (value.split(' ').length > param) {

        return false;

    } else {

        return value.split(' ').length <= param, true;

    }

});


