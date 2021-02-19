/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:41:44 GMT-0400 (Bolivia Time)
 * Time: 4:41:44
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:41:44 GMT-0400 (Bolivia Time)
 * Last time updated: 4:41:44
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const accountsOpportunities = sequelize.define('accountsOpportunities', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      opportunity_id: DataTypes.STRING,
      
      account_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'accounts_opportunities',
      timestamps: false,
    });
    accountsOpportunities.associate = (models) => {
      
    };
    return accountsOpportunities;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("accountsOpportunities", new Schema({
    
    
    
    opportunity_id: {type: String},
    
    account_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'accounts_opportunities');
  //</es-section>
