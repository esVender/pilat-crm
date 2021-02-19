/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:52 GMT-0400 (Bolivia Time)
 * Time: 18:38:52
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:52 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:52
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const surveyresponsesAudit = sequelize.define('surveyresponsesAudit', {
      
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
      tableName:'surveyresponses_audit',
      timestamps: false,
    });
    surveyresponsesAudit.associate = (models) => {
      
    };
    return surveyresponsesAudit;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("surveyresponsesAudit", new Schema({
    
    
    
    created_by: {type: String},
    
    field_name: {type: String},
    
    data_type: {type: String},
    
    before_value_string: {type: String},
    
    after_value_string: {type: String},
    
    
    before_value_text: {type: String},
    
    after_value_text: {type: String},
    
    
    
    
    date_created: {type: Date},
    
    
    
    parent_id: {type: String},
    
    
    
    
    
  }),'surveyresponses_audit');
  //</es-section>
