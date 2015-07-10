/* =========================================================
 * bootstrap-datepicker-buttons.js v.1.0.3
 * =========================================================
 * Repo: https://github.com/rogeroliveira84/bootstrap-datepicker-buttons
 * Demo: http://rogeroliveira84.github.io/bootstrap-datepicker-buttons/
 * =========================================================
 * Started by Roger Oliveira
 *
 * Dependencies:
 *
 * Moment 2.9.0 | Bootstrap-DataPicker 3.0 | Jquery 1.11.0
 *
 * ========================================================= */

(function ($) {

    "use strict";

    $.fn.DatePickerButtons = function(options) {

        var settings = $.extend({
            colourfull: false,
            colour: 'green',
            dateformat: $(this).data().dateFormat.toUpperCase(),
            fromdateid: $(this).data().datepicker.inputs[0].id,
            todateid: $(this).data().datepicker.inputs[1].id,
            today: true,
            yesterday: true,
            thisweek: true,
            thismonth: true,
            last7days: true,
            last30days: true
        }, options);

        return this.each(function () {

            var dateRangeInput = $(this);
            var fromDateInput = $('#' + settings.fromdateid);
            var toDateInput = $('#' + settings.todateid);

            // Buttons colours
            var colours = settings.colourfull ?
                ['green', 'yellow', 'red', 'blue', 'purple', 'yellow-gold'] :
                [settings.colour, settings.colour, settings.colour, settings.colour, settings.colour];

            // Add buttons
            dateRangeInput.before("<div class='datepicker-buttons pull-right'>");
            var dateRangeButtons = dateRangeInput.prev('.datepicker-buttons');
            if (settings.last30days) { dateRangeButtons.append("<a date-range='Last30Days' class='badge bg-" + colours[0] + "'> Last 30 Days </a> "); }
            if (settings.last7days) { dateRangeButtons.append("<a date-range='Last7Days' class='badge bg-" + colours[1] + "'> Last 7 Days </a> "); }
            if (settings.thismonth) { dateRangeButtons.append("<a date-range='ThisMonth' class='badge bg-" + colours[2] + "'> This Month </a> "); }
            if (settings.thisweek)   { dateRangeButtons.append("<a date-range='ThisWeek' class='badge bg-" + colours[3] + "'> This Week </a> "); }
            if (settings.yesterday)  { dateRangeButtons.append("<a date-range='Yesterday' class='badge bg-" + colours[4] + "'> Yesterday </a></div> "); }
            if (settings.today)      { dateRangeButtons.append("<a date-range='Today' class='badge bg-" + colours[5] + "'> Today </a></div>"); }

            // Buttons click event
            dateRangeButtons.children('a').click(function (e) {
                e.preventDefault();

                var today = moment().format(settings.dateformat);
                var yesterday = moment().subtract(1, 'days').format(settings.dateformat);
                var thisWeek = moment().isoWeekday(1).format(settings.dateformat);
                var thisMonth = moment().startOf('month').format(settings.dateformat);
                var last7Days = moment().subtract(6, 'days').format(settings.dateformat);
                var last30Days = moment().subtract(29, 'days').format(settings.dateformat);

                var dateRange = $(this).attr('date-range');
                switch (dateRange) {
                    case "Today":
                        fromDateInput.val(today);
                        toDateInput.val(today);
                        break;
                    case "Yesterday":
                        fromDateInput.val(yesterday);
                        toDateInput.val(yesterday);
                        break;
                    case "ThisWeek":
                        fromDateInput.val(thisWeek);
                        toDateInput.val(today);
                        break;
                    case "ThisMonth":
                        fromDateInput.val(thisMonth);
                        toDateInput.val(today);
                        break;
                    case "Last7Days":
                        fromDateInput.val(last7Days);
                        toDateInput.val(today);
                        break;
                    case "Last30Days":
                        fromDateInput.val(last30Days);
                        toDateInput.val(today);
                        break;
                }

                fromDateInput.datepicker('update', fromDateInput.val());
                toDateInput.datepicker('update', toDateInput.val());
            });

        });
    };
})(jQuery);