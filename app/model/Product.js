Ext.define('HomeInventory.model.Product', {
    extend: 'Ext.data.Model',
    
    config: {
        idProperty: '_id',
        fields: [
            { name: '_id', type: 'auto' },
            { name: 'name', type: 'string' },
            { name: 'barcode', type: 'string' },
            { name: 'creationDate', type: 'date' },
            { name: 'currentAmount', type: 'number' },
            { name: 'isActive', type: 'boolean'}
        ],
        validations: [
            {type: 'presence', field: 'barcode', message: 'Barcode is required'},
            {type: 'presence', field: 'name', message: 'Name is required'}
        ],
        proxy :{
            type: 'rest',
            url: 'http://cayohuesosoft.ddns.net:3000/products'
        }
    }
});
