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

    var dateRangePicker = function() {
        $('.reportdate').daterangepicker({
            format: 'YYYY-MM-DD',
            startDate: '2014-01-01',
            endDate: '2014-06-30'
        });
    };

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
        maskInputs: maskInputs,
        spinStart: spinStart,
        spinStop: spinStop
    };
}();
