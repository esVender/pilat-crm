/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:44 GMT-0400 (Bolivia Time)
 * Time: 2:42:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:44 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:44
 *
 * Caution: es-sections will be replaced by script execution
 */

Ext.define('es.controller.fpEventsAudit', {
	extend: 'Ext.app.Controller',

	views:[
		//<es-section>
		'fp-events-audit.List',
		'fp-events-audit.Add'
		//</es-section>
	],

	stores:[
		//<es-section>
		'fp_events_audit'
		//</es-section>
	],

	refs: [
		//<es-section>
		{
			ref: 'fpEventsAuditList',
			selector: 'fpEventsAuditList'
		},
		{
			ref: 'fpEventsAuditAdd',
			selector: 'fpEventsAuditAdd'
		}
		//</es-section>
	],

	init: function () {
		var me = this;

		this.control({
			//<es-section>
			'fpEventsAuditList > toolbar > button#add': {
				click: me.onFpEventsAuditAddClick
			},
			'fpEventsAuditList':{
				removeRow: me.removeRow
			},
			'fpEventsAuditAdd > form > button#save': {
				click: me.onFpEventsAuditAddSaveClick
			},
			'fpEventsAuditAdd > form > button#cancel': {
				click: me.onFpEventsAuditAddCancelClick
			}
			//</es-section>
		});
	},
	removeRow: function(grid, rowIndex, colIndex){
		//<es-section>
		Ext.Msg.confirm('Confirm', 'Remove?', function(button) {
			if (button === 'yes') {
				grid.getStore().removeAt(rowIndex);
			}
		});
		//</es-section>
	},
	onFpEventsAuditAddCancelClick: function(button, e, eOpts) {
		//<es-section>
		this.getFpEventsAuditAdd().destroy();
		//</es-section>
	},
	onFpEventsAuditAddSaveClick: function(){
		//<es-section>
		var me = this, form = me.getFpEventsAuditAdd().down('form').getForm(), rec;
		if(form.isValid())
		{
			form.updateRecord();
			rec = form.getRecord();
			me.getFpEventsAuditList().getStore().add(rec);

			me.getFpEventsAuditAdd().destroy();
		}
		//</es-section>
	},
	onFpEventsAuditAddClick: function(){
		//<es-section>
		var me = this, window = Ext.widget('fpEventsAuditAdd');
		window.show();
		window.down('form').getForm().loadRecord(new es.model.fpEventsAudit());
		//</es-section>
	}
});