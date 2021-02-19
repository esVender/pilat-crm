/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 13:59:59 GMT-0400 (Bolivia Time)
 * Time: 13:59:59
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 13:59:59 GMT-0400 (Bolivia Time)
 * Last time updated: 13:59:59
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.view.fp-events-prospects-1-c.Add', {
	extend: 'Ext.window.Window',
	alias: 'widget.fpEventsProspects1CAdd',
	id: 'fp-events-prospects-1-c-add',
	height: 300,
	width: 369,
	resizable: true,
	autoScroll: true,
	title: 'Add FpEventProspect1C',
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
					id:'fp-events-prospects-1-c-form',
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
							fieldLabel: 'email_responded',
							name: 'email_responded',
						},
						
						
						{
							fieldLabel: 'fp_events_prospects_1fp_events_ida',
							name: 'fp_events_prospects_1fp_events_ida',
						},
						
						{
							fieldLabel: 'fp_events_prospects_1prospects_idb',
							name: 'fp_events_prospects_1prospects_idb',
						},
						
						{
							fieldLabel: 'invite_status',
							name: 'invite_status',
						},
						
						{
							fieldLabel: 'accept_status',
							name: 'accept_status',
						},
						
						
						
						
						
						
						
						
						{
							fieldLabel: 'deleted',
							name: 'deleted',
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
