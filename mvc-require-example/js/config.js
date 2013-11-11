requirejs.config({

    baseUrl: '/js',

    paths: {
        "jquery": "/js/jquery",
        "bootstrap": "/js/bootstrap",
        "bootstrap-datepicker": "/js/bootstrap-datepicker",
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