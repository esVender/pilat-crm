/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:22 GMT-0400 (Bolivia Time)
 * Time: 18:35:22
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:22 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:22
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const accountsContacts = sequelize.define('accountsContacts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      contact_id: DataTypes.STRING,
      
      account_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'accounts_contacts',
      timestamps: false,
    });
    accountsContacts.associate = (models) => {
      
    };
    return accountsContacts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("accountsContacts", new Schema({
    
    
    
    contact_id: {type: String},
    
    account_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'accounts_contacts');
  //</es-section>
