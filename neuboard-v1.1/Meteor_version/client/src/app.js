App = function() {

    $(function() {
        widgetToggle();
        widgetClose();
        widgetFlip();
    });

    var widgetToggle = function() {
        $(document).on('click', '.actions > .fa-chevron-down, .actions > .fa-chevron-up', function() {
            $(this).parent().parent().next().slideToggle("fast"), $(this).toggleClass("fa-chevron-down fa-chevron-up")
        });
    };

    var widgetClose = function() {
        $(document).on('click', '.actions > .fa-times', function() {
            $(this).parent().parent().parent().fadeOut()
        });
    };

    var widgetFlip = function() {
        $(document).on('click', ".actions > .fa-cog", function() {
            $(this).closest('.flip-wrapper').toggleClass('flipped')
        });
    };

    var formWizard = function() {
        $('#myWizard').wizard()
    }

    


    // var navToggleSub = function() {
    //     var subMenu = $('.sidebar .nav');
    //     $(subMenu).navgoco({
    //         caretHtml: false,
    //         accordion: true
    //     });

    // };

    

    var dateRangePicker = function() {
        $('.reportdate').daterangepicker({
            format: 'YYYY-MM-DD',
            startDate: '2014-01-01',
            endDate: '2014-06-30'
        });
    };


    //tooltips
    var tooltips = function() {
        $('.tooltip-wrapper').tooltip({
            selector: "[data-toggle=tooltip]",
            container: "body"
        })
    };

    //Sliders
    var sliders = function($selector) {
        $selector.slider()
    };

    var nestedSortable = function() {
        var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.val(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.val('JSON browser support required for this demo.');
            }
        };

        // activate Nestable for list 1
        $('#nestable').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // activate Nestable for list 2
        $('#nestable2').nestable({
                group: 1
            })
            .on('change', updateOutput);

        // output initial serialised data
        updateOutput($('#nestable').data('output', $('#nestable-output')));
        updateOutput($('#nestable2').data('output', $('#nestable2-output')));

        $('#nestable-menu').on('click', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });
    };


    var formValidation = function() {
        $('#form').validate({
            rules: {
                input1: {
                    required: true
                },
                input2: {
                    minlength: 5,
                    required: true
                },
                input3: {
                    maxlength: 5,
                    required: true
                },
                input4: {
                    required: true,
                    minlength: 4,
                    maxlength: 8
                },
                input5: {
                    required: true,
                    min: 5
                },
                input6: {
                    required: true,
                    range: [5, 50]
                },
                input7: {
                    minlength: 5
                },
                input8: {
                    required: true,
                    minlength: 5,
                    equalTo: "#input7"
                },
                input9: {
                    required: true,
                    email: true
                },
                input10: {
                    required: true,
                    url: true
                },
                input11: {
                    required: true,
                    digits: true
                },
                input12: {
                    required: true,
                    phoneUS: true
                },
                input13: {
                    required: true,
                    minlength: 5
                }
            },
            highlight: function(element) {
                $(element).closest('.form-group').removeClass('success').addClass('error');
            },
            success: function(element) {
                element.text('OK!').addClass('valid')
                    .closest('.form-group').removeClass('error').addClass('success');
            }
        });
    }

    // TODO: Add Meteor PreLoader

    var spinStart = function(spinOn) {
        var spinFull = $('<div class="preloader"><div class="iconWrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div></div>');
        var spinInner = $('<div class="preloader preloader-inner"><div class="iconWrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div></div>');
        if (spinOn === undefined) {
            $('body').prepend(spinFull);
        } else {
            $(spinOn).prepend(spinInner);
        };

    };

    var spinStop = function() {
        $('.preloader').remove();
    };

    var maskInputs = function($selector) {
        $selector.each(function() {
            var mask = $(this).data('mask');
            $(this).mask(mask);
        });
    }

    var customCheckbox = function($selector) {
        $selector.iCheck({
            checkboxClass: 'icheckbox_flat',
            radioClass: 'iradio_flat'
        });
    }

    //return functions
    return {
        customCheckbox: customCheckbox,
        dateRangePicker: dateRangePicker,
        nestedSortable: nestedSortable,
        formValidation: formValidation,
        formWizard: formWizard,
        maskInputs: maskInputs,
        sliders: sliders,
        spinStart: spinStart,
        spinStop: spinStop
    };
}();
