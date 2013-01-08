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

    getRel: function () {
        return this.data.rel || null;
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
    },
    
    getAdditionalInfo: function () {
        return this.data.additionalInfo || null;
    },
    
    getChoiceOptions: function () {
        var options = [];
        
        if (this.data.options) {
            options = this.data.options;
        }
        return options;
    },
    
    isRequired: function () {
        return this.data.hasOwnProperty('required') ? this.data.required : true;
    },

    isReadOnly: function () {
        return this.data.hasOwnProperty('readOnly') ? this.data.readOnly : false;
    },

    setValue: function (value) {
        this.data.value = value;
    },

    getValue: function () {
        return this.data.hasOwnProperty('value') ? this.data.value : this.getDefaultValue();
    },

    getDefaultValue: function () {
        return this.data.hasOwnProperty('defaultValue') ? this.data.defaultValue : null;
    }
});