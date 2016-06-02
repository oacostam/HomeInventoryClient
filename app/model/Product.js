Ext.define('HomeInventory.model.Product', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: '_id', type: 'auto' },
            { name: 'name', type: 'auto' },
            { name: 'barcode', type: 'auto' },
            { name: 'creationDate', type: 'date' },
            { name: 'currentAmount', type: 'number' },
            { name: 'isActive', type: 'boolean' }

        ]
    }
});