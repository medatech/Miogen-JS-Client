if (typeof (Miogen) === 'undefined') {
    Miogen = {};
}

Miogen.MiogenTemplate = Class.extend({
    
    template: null,
    
    init: function (template) {
        this.template = template;
    },
    
    getFields: function () {
        var fieldName, fields = [];
        
        if (this.template.data) {
            for (fieldName in this.template.data) {
                if (this.template.data.hasOwnProperty(fieldName)) {
                    fields.push(new Miogen.MiogenDataField(fieldName, this.template.data[fieldName]));
                }
            }
        }
        
        return fields;
    },
    
    getField: function (name) {
        if (this.template.data && this.template.data.hasOwnProperty(name)) {
            return new Miogen.MiogenDataField(name, this.template.data[name]);
        }
        else {
            return null;
        }
    },
    
    getPrompt: function () {
        return this.template.prompt || null;
    },
    
    getAdditionalInfo: function () {
        return this.template.additionalInfo || null;
    }
});