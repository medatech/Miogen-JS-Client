/*global Miogen, $, window, Class, objectQuery */
(function () {
    "use strict";

    if (window.Miogen === undefined) {
        window.Miogen = {};
    }

    Miogen.MiogenDocument = Class.extend({

        doc: null,

        init: function (docBody) {
            this.doc = docBody;
        },

        getItems: function () {
            return objectQuery(this.doc, 'collection.items');
        },

        getTemplateByRel: function (rel) {
            var template = null,
                i,
                templates = objectQuery(this.doc, 'collection.templates'),
                ret = null;

            if (templates !== null) {
                for (i = 0; i < templates.length; i += 1) {
                    if (templates[i].rel === rel) {
                        template = templates[i];
                        break;
                    }
                }
            }

            if (template !== null) {
                ret = new Miogen.MiogenTemplate(template);
            }

            return ret;
        },

        getTemplate: function () {
            var template = null,
                templates = objectQuery(this.doc, 'collection.templates');
            if (templates !== null && templates.length > 0) {
                template = new Miogen.MiogenTemplate(templates[0]);
            }
            return template;
        },

        getErrors: function () {
            return objectQuery(this.doc, 'collection.errors', []);
        }

    });
}());