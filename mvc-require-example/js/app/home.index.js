require(['../config'], function () {
    require(['home.index2']);
})
, define("home.index2", ['jquery', 'bootstrap-datepicker'], function ($) {
    $(function () {
        $('#text1').html('<input type="text" class="datepicker" />');
        $('input.datepicker').datepicker({
            format: 'yyyy/mm/dd'
        });
    });
})