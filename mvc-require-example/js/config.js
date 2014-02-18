requirejs.config({

    baseUrl: '/js',

    paths: {
        //"jquery": "jquery",
        //"bootstrap": "bootstrap",
        //"bootstrap-datepicker": "bootstrap-datepicker",
    },

    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: "jQuery.fn.popover"
        },
        'bootstrap-datepicker': {
            deps: ['bootstrap'],
            exports: "jQuery.fn.datepicker"
        }
    }
});