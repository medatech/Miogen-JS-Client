if (typeof (Miogen) === 'undefined') {
    Miogen = {};
}

Miogen.MiogenHttpClient = new (Class.extend({
    init: function () {},
    
    doGet: function (url, callback) {
        var t = this;
        $.ajax({
            url: url,
            type: 'GET',
            contentType: 'text/json',
            beforeSend: function (jqXHR, settings) {
                jqXHR.setRequestHeader('Accept', 'vnd.miogen+JSON');
            },
            success: function (data, textStatus, jqXHR) {
                var doc = null;
                
                if (typeof (data) === 'string') {
                    try {
                        data = JSON.parse(data);
                    }
                    catch (ex) {
                        
                    }
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
                }
                else {
                    doc = new Miogen.MiogenDocument(data);
                }
                
                callback(jqXHR.status, doc, jqXHR);
                
            },
            error: function (jqXHR, textStatus, errorThrown) {
                var doc = new Miogen.MiogenDocument({
                    collection: {
                        href: null,
                        version: 1.0,
                        errors: [
                            errorThrown
                        ]
                    }
                });
                
                callback(0, doc, jqXHR);
            }
        });
    }
}));