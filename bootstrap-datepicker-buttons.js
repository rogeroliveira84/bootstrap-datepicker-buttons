/* ==========================================================================
 * bootstrap-datepicker-buttons.js v.1.0.0
 * ==========================================================================
 * Repo    : https://github.com/rogeroliveira84/bootstrap-datepicker-buttons
 * ==========================================================================
 * Started by Roger Oliveira
 *
 * Dependencies:
 *
 * Moment 2.9.0
 * Bootstrap-DataPicker 3.0
 * Jquery 1.11.0
 *
 * ========================================================================= */

(function ($) {

    "use strict";

    $.fn.DatePickerButtons = function(options) {

        var settings = $.extend({
            dateformat: "DD-MM-YYYY",
            fromdateid: "filterFromDate",
            todateid: "filterToDate"
        }, options);

        return this.each(function () {

            var dateRangeInput = $(this);
            var fromDateInput = $('#' + settings.fromdateid);
            var toDateInput = $('#' + settings.todateid);
            
            // Add buttons
            dateRangeInput.before("<div class='datepicker-buttons pull-right'>");
            var dateRangeButtons = dateRangeInput.prev('.datepicker-buttons');
            dateRangeButtons
                    .append("<a date-range='LastMonth' class='badge bg-green'>Last month</a>")
                    .append("<a date-range='LastWeek' class='badge bg-green'>Last week</a>")
                    .append("<a date-range='Yesterday' class='badge bg-green'>Yesterday</a></div>")
                    .append("<a date-range='Today' class='badge bg-green'>Today</a></div>");

            // Buttons click event
            dateRangeButtons.children('a').click(function (e) {
                e.preventDefault();

                var today = moment();
                var yesterday = moment().subtract(1, 'days');
                var lastweek = moment().subtract(6, 'days');
                var lastmonth = moment().subtract(29, 'days');

                var dateRange = $(this).attr('date-range');
                switch (dateRange) {
                    case "Today":
                        fromDateInput.val(today.format(settings.dateformat));
                        toDateInput.val(today.format(settings.dateformat));
                        break;
                    case "Yesterday":
                        fromDateInput.val(yesterday.format(settings.dateformat));
                        toDateInput.val(yesterday.format(settings.dateformat));
                        break;
                    case "LastWeek":
                        fromDateInput.val(lastweek.format(settings.dateformat));
                        toDateInput.val(today.format(settings.dateformat));
                        break;
                    case "LastMonth":
                        fromDateInput.val(lastmonth.format(settings.dateformat));
                        toDateInput.val(today.format(settings.dateformat));
                        break;
                }
                
                fromDateInput.datepicker('update');
            });

        });
    };
})(jQuery);
