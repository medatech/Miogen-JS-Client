if (typeof (Miogen) === 'undefined') {
    Miogen = {};
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
        var template = null, i, templates = objectQuery(this.doc, 'collection.templates');
        if (templates !== null) {
            for (i = 0; i < templates.length; i += 1) {
                if (templates[i].rel === rel) {
                    template = templates[i];
                    break;
                }
            }
        }
        
        if (template !== null) {
            return new Miogen.MiogenTemplate(template);
        }
        else {
            return null;
        }
    },

    getErrors: function () {
        return objectQuery(this.doc, 'collection.errors', []);
    }
    
});