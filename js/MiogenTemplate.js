if (typeof (Miogen) === 'undefined') {
    Miogen = {};
}

Miogen.MiogenTemplate = Miogen.MiogenDataField.extend({
    init: function (template) {
        this._super(null, template);
    }
});