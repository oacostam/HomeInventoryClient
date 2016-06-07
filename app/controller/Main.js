Ext.define('HomeInventory.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            btnScan: 'main button[action=scan]'
        },
        control: {
            btnScan : {
				tap: 'showProductView'
			}
        }
    },

    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    }
});
