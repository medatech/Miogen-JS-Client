if (typeof (Miogen) === 'undefined') {
    Miogen = {};
}

Miogen.MiogenDocument = Class.extend({
    
    doc: null,
    
    init: function (docBody) {
        this.doc = docBody;
    }
    
});