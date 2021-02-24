/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:33 GMT-0400 (Bolivia Time)
 * Time: 18:38:33
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:33 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:33
 *
 * Caution: es-sections will be replaced by script execution
 */

// Set up a model to use in our Store
//<es-section>

//</es-section>

Ext.define('es.view.relationships.List', {
	extend: 'Ext.grid.Panel',
	//<es-section>
	xtype: 'relationshipsList',
	//</es-section>
	title: 'Moduł użytkowników',

	viewConfig: {
		enableTextSelection: true,
		stripeRows: true
	},
	//<es-section>
	store: 'relationships',
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
							var count = Ext.getStore('relationships').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('relationships').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId.toString())) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('relationships').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('relationships').getAt(count).set('id',nextId+1);
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
				store: 'relationships'
				//</es-section>
			}
		];

		this.columns = [

			//<es-section>
			
			{
				text: 'id',
				width: 160,
				dataIndex: 'id',
				hidden: false
			},
			
			
			
			{
				text: 'relationship_name',
				dataIndex: 'relationship_name',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'lhs_module',
				dataIndex: 'lhs_module',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'lhs_table',
				dataIndex: 'lhs_table',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'lhs_key',
				dataIndex: 'lhs_key',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'rhs_module',
				dataIndex: 'rhs_module',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'rhs_table',
				dataIndex: 'rhs_table',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'rhs_key',
				dataIndex: 'rhs_key',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'join_table',
				dataIndex: 'join_table',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'join_key_lhs',
				dataIndex: 'join_key_lhs',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'join_key_rhs',
				dataIndex: 'join_key_rhs',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'relationship_type',
				dataIndex: 'relationship_type',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'relationship_role_column',
				dataIndex: 'relationship_role_column',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'relationship_role_column_value',
				dataIndex: 'relationship_role_column_value',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			
			
			
			
			
			
			
			{
				text: 'reverse',
				dataIndex: 'reverse',
				width: 160,
				editor: {
					allowBlank: false
				}
			},
			
			{
				text: 'deleted',
				dataIndex: 'deleted',
				width: 160,
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
							var count = Ext.getStore('relationships').data.length;
							var nextId = 0;
							for (var i = 0 ; i < count ; i++) {
								var id = Ext.getStore('relationships').getAt(i).data.id;
								if(parseInt(id) > parseInt(nextId)) {
									nextId = parseInt(id);
								}
							}
							Ext.getStore('relationships').insert(count, {
								dueAt: date,
								createdAt: date,
								updatedAt: date,
							});
							Ext.getStore('relationships').getAt(count).set('id',nextId+1);
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