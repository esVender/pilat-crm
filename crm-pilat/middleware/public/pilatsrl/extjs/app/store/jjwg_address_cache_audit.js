/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Mon Jan 25 2021 02:42:55 GMT-0400 (Bolivia Time)
 * Time: 2:42:55
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Mon Jan 25 2021 02:42:55 GMT-0400 (Bolivia Time)
 * Last time updated: 2:42:55
 *
 * Caution: es-sections will be replaced by script execution
 */
 
//<es-section> 
Ext.define('es.store.jjwg_address_cache_audit', {
    extend: 'Ext.data.Store',
    model: 'es.model.jjwg_address_cache_audit',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});
//</es-section>
