Ext.define('HomeInventory.model.Product', {
    extend: 'Ext.data.Model',
    
    config: {
        idPropety: 'barcode',
        fields: [
            { name: '_id', type: 'auto' },
            { name: 'name', type: 'auto' },
            { name: 'barcode', type: 'auto' },
            { name: 'creationDate', type: 'date' },
            { name: 'currentAmount', type: 'number' },
            { name: 'isActive', type: 'boolean'}
        ],
        proxy :{
            type: 'rest',
            url: 'http://localhost:3000/products'
        }
    }
});
