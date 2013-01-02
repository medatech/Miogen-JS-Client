if (typeof (Miogen) === 'undefined') {
    Miogen = {};
}

Miogen.MiogenDataField = Class.extend({
    
    name: null,
    data: null,
    
    init: function (name, data) {
        this.name = name;
        this.data = data;
    },
    
    getName: function () {
        return this.name;
    },
    
    getType: function () {
        return this.data.type || null;
    },
    
    getFields: function () {
        var fieldName, fields = [];
        
        if (this.data.data) {
            for (fieldName in this.data.data) {
                if (this.data.data.hasOwnProperty(fieldName)) {
                    fields.push(new Miogen.MiogenDataField(fieldName, this.data.data[fieldName]));
                }
            }
        }
        
        return fields;
    },
    
    getField: function (name) {
        if (this.data.data && this.data.data.hasOwnProperty(name)) {
            return new Miogen.MiogenDataField(name, this.data.data[name]);
        }
        else {
            return null;
        }
    },
    
    getPrompt: function () {
        return this.data.prompt || null;
    }
});