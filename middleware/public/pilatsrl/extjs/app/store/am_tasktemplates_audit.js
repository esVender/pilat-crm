/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:06 GMT-0400 (Bolivia Time)
 * Time: 2:41:6
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:06 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:6
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.am_tasktemplates_audit', {
    extend: 'Ext.data.Store',
    model: 'es.model.am_tasktemplates_audit',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
