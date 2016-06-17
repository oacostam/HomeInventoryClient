Ext.define('HomeInventory.view.Product', {
   extend: 'Ext.form.Panel',
    xtype: 'productView',
    fullscreen: true,
    store: '',
    requires: [
        'Ext.form.FieldSet',
		'Ext.field.Hidden',
		'Ext.field.DatePicker',
		'Ext.field.Number',
		'Ext.field.Toggle',
		'Ext.Img'
    ],
    config: {
        items: [
				{
					xtype: 'fieldset',
					title: 'Product Information',
					items: [
						{
							name: '_id',
							xtype: 'hiddenfield',
							label: '_id'
						},
						{
						        name: 'picture',
						        xtype: 'image',
						        src: 'http://desktopstarships.com/NpGallery/originalimages/st_red_anomaly.jpg'
						},
						{
							name: 'name',
							xtype: 'textfield',
							label: 'Name'
						},
						{
							name: 'barcode',
							disabled: true,
							xtype: 'textfield',
							label: 'Barcode'
						},
						{
							name: 'creationDate',
							xtype: 'datepickerfield',
							label: 'Creation'
						},
						{
							name: 'currentAmount',
							xtype: 'numberfield',
							label: ' Amount'
						},
						{
							name: 'isActive',
							xtype: 'togglefield',
							label: 'Active?'
						},
						{
							xtype: 'toolbar',
							docked: 'bottom', 
							layout: {
								pack: 'end',
								type: 'hbox'
							},
							items: [
								{
									xtype: 'button',
									text: 'Save',
									ui: 'confirm',
									action: 'productSubmit'
								},
								{
									xtype:'spacer',
									docked: 'bottom',
								},
								{
									xtype: 'button',
									text: 'Cancel',
									ui: 'decline',
									action: 'productCancel'
								}
							]
						}
					]
				}
			]		
		}
	}
);
