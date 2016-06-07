Ext.define('HomeInventory.controller.Product', {
    extend: 'Ext.app.Controller',
    
    config: {
        models: [
            'Product'
        ],
        stores: [
            'Product'
        ],

        refs: {
            btnProductSubmit: 'productView button[action=productSubmit]',
			btnProductCancel: 'productView button[action=productCancel]',
            btnScan: 'main button[action=scan]'
        },
        control: {
            btnScan : {
				tap: 'showProductView'
			},
            btnProductCancel : {
				tap: 'returnToMain'
			},
            btnProductSubmit: {
                tap: 'submitProduct'
            }
        }
    },
    showProductView: function(){
        var code = '12345';
        Ext.ModelManager.getModel('HomeInventory.model.Product').load(code, {
            success: function (p) {
                console.log(p);
            },
            failure: function () {
               console.log('failure');
            }
        });


        var productStore = Ext.getStore('Product');
        
        var product = productStore.find('barcode', code);
        var productWin = Ext.create('HomeInventory.view.Product');
        productWin.setData(product);
		Ext.Viewport.setActiveItem(productWin);
	},
    returnToMain: function(){
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false); 
		Ext.Viewport.setActiveItem('main');
	},
    submitProduct: function(){
        var productStore = Ext.getStore('Product');
        console.log(productStore);
    },
	
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
