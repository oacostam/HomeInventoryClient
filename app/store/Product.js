Ext.define( 'HomeInventory.store.Product', {
 extend: 'Ext.data.Store',
 requires: ['HomeInventory.model.Product'],
    
 config: {
   autoLoad: true,
   model: 'HomeInventory.model.Product',
   storeId: 'Product',
   autoSync: true
 }
});