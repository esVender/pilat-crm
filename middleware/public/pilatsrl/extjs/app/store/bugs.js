/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:41:58 GMT-0400 (Bolivia Time)
 * Time: 2:41:58
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:41:58 GMT-0400 (Bolivia Time)
 * Last time updated: 2:41:58
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.bugs', {
    extend: 'Ext.data.Store',
    model: 'es.model.bugs',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
