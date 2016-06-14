Ext.define('HomeInventory.controller.Product', {
    extend: 'Ext.app.Controller',
    
    config: {
        models: [
            'Product'
        ],
        views: [
            'Product'
        ],

        refs: {
            productView: {
               selector: 'productView',
               xtype: 'productView',
               autoCreate: true
            },
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
        var me = this;
        var Product = Ext.ModelMgr.getModel('HomeInventory.model.Product').load('1234', {
            success: function(product) {
                console.log("Loaded product: " + product.get('barcode'));
                var productWin = me.getProductView();
                productWin.setValues(product.data);
                Ext.Viewport.add(productWin);
                Ext.Viewport.animateActiveItem(productWin, { type: 'slide', direction: 'left' });
            }
        });
	},
    returnToMain: function(){
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false);
        Ext.Viewport.animateActiveItem('main', { type: 'slide', direction: 'right' });
	},
    submitProduct: function(){
    },
	
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
