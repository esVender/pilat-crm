/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:00 GMT-0400 (Bolivia Time)
 * Time: 18:38:0
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:00 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:0
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.oauth-nonce.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'oauthNonceList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'oauth_nonce',
	//</es-section>
	initComponent: function () {
		var me = this,
			rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
				clicksToEdit: 2,
				listeners:{
					dbclick: {
						element: 'body',
						fn: function(){ console.log('dblclick body'); }
					}
				}
			}),
			rowMenu = Ext.create('Ext.menu.Menu', {
				height: 58,
				width: 140,
				items: [{
					text: 'Edit',
					iconCls: 'button-edit'
				}, {
					text: 'Remove',
					iconCls: 'button-remove',
    				handler: function(){
					me.fireEvent('removeRow', this);
				}
			}]
		});
		this.listeners = {
			itemcontextmenu: function(view, record, item, index, e){
				e.stopEvent();
				rowMenu.showAt(e.getXY());
			}
		};

		this.plugins = [rowEditing];
		this.selType = 'rowmodel';

		this.dockedItems = [
			{
				xtype: 'toolbar',
				dock: 'top',
				items: [
					{
						text: 'Add',
						iconCls: 'icon-add',
						handler: () => {
							// Create a model instance
							// Create a model instance
							var date = new Date();
							//<es-section>
							var count = Ext.getStore('oauthNonce').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('oauthNonce').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('oauthNonce').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('oauthNonce').getAt(count).set('id',nextId+1);
							//</es-section>
						}
					}, '-' ,
					// {
					// 	text: 'Add Form',
					// 	itemId: 'add',
					// 	iconCls: 'icon-add',
					// },
					{
						xtype: 'container',
						flex: 1
					}
				]
			},
			{
				xtype: 'pagingtoolbar',
				dock: 'bottom',
				width: 360,
				displayInfo: true,
				//<es-section>
				store: 'oauthNonce'
				//</es-section>
			}
		];

		this.columns = [

			//<es-section>
			
			{
				text: 'conskey',
				width: 160,
				dataIndex: 'conskey',
				hidden: false
			},
			
			{
				text: 'nonce',
				width: 160,
				dataIndex: 'nonce',
				hidden: false
			},
			
			
   			{
   			    text: 'nonce_ts',
       			dataIndex: 'nonce_ts',
       				width: 100,
       				editor: {
       				allowBlank: false
            	}
            },
            
			
			
			
			
			
			
			
			
			
			
			
			
			
			//</es-section>
			{
				xtype: 'actioncolumn',
				width: 50,
				items: [
					{
						iconCls: 'button-add',
						tooltip: 'Add',
						icon: '/js/es/shared/icons/fam/add.gif',
						handler: function (grid, rowIndex, colIndex) {
							// Create a model instance
							// Create a model instance
							var date = new Date();
							//<es-section>
							var count = Ext.getStore('oauthNonce').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('oauthNonce').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('oauthNonce').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('oauthNonce').getAt(count).set('id',nextId+1);
							rowEditing.startEdit(count,1);
						}
						//</es-section>
					},
					{
						iconCls: 'button-remove',
						tooltip: 'Remove',
						icon: '/js/es/shared/icons/fam/delete.gif',
						handler: function (grid, rowIndex, colIndex) {
							this.up('grid').fireEvent('removeRow', grid, rowIndex, colIndex);
						}
					}
				]
			}
		];

		//parent
		this.callParent(arguments);
	}
});
