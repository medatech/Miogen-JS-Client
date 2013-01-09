/*global Miogen, $, window, Class */
(function () {
    "use strict";

    if (window.Miogen === undefined) {
        window.Miogen = {};
    }

    Miogen.MiogenTemplate = Miogen.MiogenDataField.extend({
        init: function (template) {
            this._super(null, template);
        }
    });
}());