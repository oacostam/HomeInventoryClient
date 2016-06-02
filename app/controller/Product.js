Ext.define('HomeInventory.controller.Product', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            btnProductSubmit: 'productView button[action=productSubmit]',
			btnProductCancel: 'productView button[action=productCancel]'
        },
        control: {
            btnProductCancel : {
				tap: 'returnToMain'
			}
        }
    },
    returnToMain: function(){
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), false); 
		Ext.Viewport.setActiveItem('main');
	},
	
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
