/*global Miogen, $, window, Class */
(function () {
    "use strict";

    if (window.Miogen === undefined) {
        window.Miogen = {};
    }

    Miogen.MiogenHttpClient = new (Class.extend({
        init: function () {},

        doGet: function (url, callback) {
            this.callServer('GET', url, null, callback);
        },

        doPost: function (url, saveData, callback) {
            this.callServer('PUT', url, saveData, callback);
        },

        doPut: function (url, saveData, callback) {
            this.callServer('PUT', url, saveData, callback);
        },

        doDelete: function (url, callback) {
            this.callServer('DELETE', url, null, callback);
        },

        callServer: function (method, url, saveData, callback) {
            var cfg = {
                url: url,
                headers: {
                    'Accept': 'vnd.miogen+JSON'
                },
                contentType: 'text/json',
                type: method,
                beforeSend: function (jqXHR) {
                    jqXHR.setRequestHeader('Accept', 'vnd.miogen+JSON');
                },
                success: function (data, textStatus, jqXHR) {
                    var doc = null;

                    if (typeof (data) === 'string') {
                        try {
                            data = JSON.parse(data);
                        } catch (ex) {}
                    }

                    if (typeof (data) !== 'object') {
                        doc = new Miogen.MiogenDocument({
                            collection: {
                                href: null,
                                version: 1.0,
                                errors: [
                                    data
                                ]
                            }
                        });
                    } else {
                        doc = new Miogen.MiogenDocument(data);
                    }

                    callback(jqXHR.status, doc, jqXHR);

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    var data, doc;

                    if (typeof (jqXHR.responseText) === 'string') {
                        try {
                            data = JSON.parse(jqXHR.responseText);
                        } catch (ex) {}
                    }

                    if (typeof (data) !== 'object') {
                        doc = new Miogen.MiogenDocument({
                            collection: {
                                href: null,
                                version: 1.0,
                                errors: [
                                    errorThrown
                                ]
                            }
                        });
                    } else {
                        doc = new Miogen.MiogenDocument(data);
                    }

                    callback(jqXHR.status, doc, jqXHR);
                }
            };

            if (method === 'POST' || method === 'PUT') {
                cfg.processData = false;
                cfg.data = JSON.stringify(saveData);
            }


            $.ajax(cfg);
        }
    }))();
}());