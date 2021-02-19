/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:42:57 GMT-0400 (Bolivia Time)
 * Time: 4:42:57
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:42:57 GMT-0400 (Bolivia Time)
 * Last time updated: 4:42:57
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const emailsBeans = sequelize.define('emailsBeans', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      bean_module: DataTypes.STRING,
      
      
      campaign_data: DataTypes.TEXT,
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      email_id: DataTypes.CHAR,
      
      bean_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'emails_beans',
      timestamps: false,
    });
    emailsBeans.associate = (models) => {
      
    };
    return emailsBeans;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("emailsBeans", new Schema({
    
    
    
    bean_module: {type: String},
    
    
    campaign_data: {type: String},
    
    
    
    
    date_modified: {type: Date},
    
    
    
    email_id: {type: String},
    
    bean_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'emails_beans');
  //</es-section>
