/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Time: 0:23:2
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 26 2021 00:23:02 GMT-0400 (Bolivia Time)
 * Last time updated: 0:23:2
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const g3lGelEmailAudit = sequelize.define('g3lGelEmailAudit', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      created_by: DataTypes.STRING,
      
      field_name: DataTypes.STRING,
      
      data_type: DataTypes.STRING,
      
      before_value_string: DataTypes.STRING,
      
      after_value_string: DataTypes.STRING,
      
      
      before_value_text: DataTypes.TEXT,
      
      after_value_text: DataTypes.TEXT,
      
      
      
      date_created: DataTypes.DATE,
      
      
      
      parent_id: DataTypes.CHAR,
      
      
      
      
      
    }, {
      tableName:'g3l_gel_email_audit',
      timestamps: false,
    });
    g3lGelEmailAudit.associate = (models) => {
      
    };
    return g3lGelEmailAudit;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("g3lGelEmailAudit", new Schema({
    
    
    
    created_by: {type: String},
    
    field_name: {type: String},
    
    data_type: {type: String},
    
    before_value_string: {type: String},
    
    after_value_string: {type: String},
    
    
    before_value_text: {type: String},
    
    after_value_text: {type: String},
    
    
    
    
    date_created: {type: Date},
    
    
    
    parent_id: {type: String},
    
    
    
    
    
  }),'g3l_gel_email_audit');
  //</es-section>