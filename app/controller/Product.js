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

    fakeScan: function (callback) {
        return callback({text : '88889', cancelled: false});
    },

    showProductView: function(){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Saving data...'
        });
        var me = this;
        //cordova.plugins.barcodeScanner.scan
        this.fakeScan(
            function (result) {
                if(!result.cancelled){
                    Ext.ModelMgr.getModel('HomeInventory.model.Product').load(result.text, {
                        success: function(product) {
                            console.log("Loaded product: " + product.get('barcode'));
                            var productWin = me.getProductView();
                            productWin.setValues(product.data);
                            Ext.Viewport.add(productWin);
                            Ext.Viewport.unmask();
                            Ext.Viewport.animateActiveItem(productWin, { type: 'slide', direction: 'left' });
                        },
                        failure: function (error) {
                            Ext.Viewport.unmask();
                            Ext.Msg.alert("Scanning failed: " + error);
                        }
                    });
                }
            }
        );
	},

    returnToMain: function(){
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false);
        Ext.Viewport.animateActiveItem('main', { type: 'slide', direction: 'right' });
	},

    submitProduct: function(){
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            indicator: true,
            message: 'Saving data...'
        });
        var product = Ext.create('HomeInventory.model.Product');
        this.getProductView().updateRecord(product);
        var validation = product.validate();
        if(validation.isValid){
            product.phantom = product.get('_id') === '';
            var me = this;
            product.save({
                success: function(){
                    Ext.Viewport.unmask();
                    me.returnToMain();
	        },
            failure: function(){
                Ext.Viewport.unmask();
                Ext.Msg.alert('There was an error updating the product');
                me.returnToMain();
            }
          });
        }else{
            //Show validation error
        }
    },
	
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
