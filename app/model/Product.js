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
            { name: 'isActive', type: 'boolean' }
<<<<<<< HEAD
        ]
=======
        ],
        proxy :{
            type: 'rest',
            url: 'http://localhost:3000/products'
        }
>>>>>>> 8d7d03bd8bfcd5beea90da61fed69c5f5df82e1d
    }
});
