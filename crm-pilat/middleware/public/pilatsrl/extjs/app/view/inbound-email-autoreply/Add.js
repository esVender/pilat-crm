/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:37:32 GMT-0400 (Bolivia Time)
 * Time: 18:37:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:37:32 GMT-0400 (Bolivia Time)
 * Last time updated: 18:37:32
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.inbound-email-autoreply.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.inboundEmailAutoreplyAdd',
	id: 'inbound-email-autoreply-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add InboundEmailAutoreply',
	modal: true,

	initComponent: function () {
		var me = this;

		setTimeout(()=> {
			Ext.getCmp('createdAt').setValue(new Date());
			Ext.getCmp('updatedAt').setValue(new Date());
			Ext.getCmp('dueAt').setValue(new Date());
		}, 50);

		//<es-section>
		
		//</es-section>
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'form',
					id:'inbound-email-autoreply-form',
					bodyPadding: 20,
					title: '',
					defaults: { // defaults are applied to items, not the container
						allowBlank: false,
						allowOnlyWhitespace: false,
						msgTarget: 'side',
						xtype: 'textfield',
						anchor: '100%'
					},
					items: [
						//<es-section>
						
						{
							fieldLabel: 'id',
							name: 'id',
						},
						
						
						
						
						
						{
							fieldLabel: 'autoreplied_to',
							name: 'autoreplied_to',
						},
						
						
						
						
						{
							fieldLabel: 'ie_id',
							name: 'ie_id',
						},
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
						},
						
						
						
						{
							fieldLabel: 'date_entered',
							name: 'date_entered',
							id:'date_entered',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						{
							fieldLabel: 'date_modified',
							name: 'date_modified',
							id:'date_modified',
							xtype: 'datefield',
							format: 'yy/m/d H:i:s',
							minValue: new Date(),
						},
						
						//</es-section>
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'save',
							text: 'Save'
						},
						{
							xtype: 'button',
							anchor: 0,
							itemId: 'cancel',
							text: 'Cancel'
						}
					]
				}
			]
		});

		me.callParent(arguments);
	},
});
