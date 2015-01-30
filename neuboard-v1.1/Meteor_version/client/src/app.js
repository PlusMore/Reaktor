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

    var formMask = function() {
        // apply on click using data attributes

        $("#input1").mask("99/99/9999");
        $("#input2").mask('(999) 999-9999');
        $("#input3").mask("(999) 999-9999? x99999");
        $("#input4").mask("99-9999999");
        $("#input5").mask("999-99-9999");
        $("#input6").mask("a*-999-a999");
    }

    var weather = function() {
        var icons = new Skycons({
            "color": "#27B6AF"
        });

        icons.set("clear-day", Skycons.CLEAR_DAY);
        icons.set("clear-night", Skycons.CLEAR_NIGHT);
        icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
        icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
        icons.set("cloudy", Skycons.CLOUDY);
        icons.set("rain", Skycons.RAIN);
        icons.set("sleet", Skycons.SLEET);
        icons.set("snow", Skycons.SNOW);
        icons.set("wind", Skycons.WIND);
        icons.set("fog", Skycons.FOG);

        icons.play();
    }

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
    var sliders = function() {
        $('.slider-span').slider()
    };


    //Chart.js LineChart, BarChart, DoughnutChart
    var chartJs = function() {
        //Line Charts
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100)
        };
        var lineChartData = {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: 'Network Usage',
                    fillColor: 'rgba(26,188,156,0.5)',
                    strokeColor: 'rgba(26,188,156,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }, {
                    label: 'CPU Load',
                    fillColor: 'rgba(31,123,182,0.5)',
                    strokeColor: 'rgba(31,123,182,1)',
                    pointColor: 'rgba(151,187,205,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(151,187,205,1)',
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
                }]

            }
            //Bar Charts
        var randomScalingFactor = function() {
            return Math.round(Math.random() * 100)
        };
        var barChartData = {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                fillColor: 'rgba(26,188,156,0.5)',
                strokeColor: 'rgba(255,255,255,0.8)',
                highlightFill: 'rgba(26,188,156,1)',
                highlightStroke: 'rgba(255,255,255,0.8)',
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }, {
                label: 'CPU Load',
                fillColor: 'rgba(31,123,182,0.5)',
                strokeColor: 'rgba(255,255,255,0.8)',
                highlightFill: 'rgba(31,123,182,1)',
                highlightStroke: 'rgba(255,255,255,0.8)',
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]

        }

        //DoughnutChart
        var doughnutData = [{
                value: 300,
                color: "#1ABC9C",
                highlight: "#1ABC9C",
                label: "Chrome"
            }, {
                value: 50,
                color: "#556B8D",
                highlight: "#556B8D",
                label: "IE"
            }, {
                value: 100,
                color: "#EDCE8C",
                highlight: "#EDCE8C",
                label: "Safari"
            }, {
                value: 40,
                color: "#CED1D3",
                highlight: "#1F7BB6",
                label: "Other"
            }, {
                value: 120,
                color: "#1F7BB6",
                highlight: "#1F7BB6",
                label: "Firefox"
            }

        ];



        window.onload = function() {
            var ctx1 = document.getElementById("canvas1").getContext("2d");
            window.myLine = new Chart(ctx1).Line(lineChartData, {
                responsive: true
            });

            var ctx2 = document.getElementById("canvas2").getContext("2d");
            window.myBar = new Chart(ctx2).Bar(barChartData, {
                responsive: true
            });

            var ctx3 = document.getElementById("doughnut-chart-area").getContext("2d");
            window.myDoughnut = new Chart(ctx3).Doughnut(doughnutData, {
                responsive: true
            });

        };

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

    // TODO: Add Meteor Loader

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

    //return functions
    return {
        dateRangePicker: dateRangePicker,
        sliders: sliders,
        nestedSortable: nestedSortable,
        chartJs: chartJs,
        formValidation: formValidation,
        formMask: formMask,
        formWizard: formWizard,
        weather: weather,
        spinStart: spinStart,
        spinStop: spinStop
    };
}();


$(window).resize(function() {
    App.chartJs();
});
