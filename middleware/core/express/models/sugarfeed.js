/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:44:10 GMT-0400 (Bolivia Time)
 * Time: 4:44:10
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:44:10 GMT-0400 (Bolivia Time)
 * Last time updated: 4:44:10
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const sugarfeed = sequelize.define('sugarfeed', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      name: DataTypes.STRING,
      
      related_module: DataTypes.STRING,
      
      link_url: DataTypes.STRING,
      
      link_type: DataTypes.STRING,
      
      
      description: DataTypes.TEXT,
      
      
      
      date_entered: DataTypes.DATE,
      
      date_modified: DataTypes.DATE,
      
      
      
      modified_user_id: DataTypes.CHAR,
      
      created_by: DataTypes.CHAR,
      
      assigned_user_id: DataTypes.CHAR,
      
      related_id: DataTypes.CHAR,
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'sugarfeed',
      timestamps: false,
    });
    sugarfeed.associate = (models) => {
      
    };
    return sugarfeed;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("sugarfeed", new Schema({
    
    
    
    name: {type: String},
    
    related_module: {type: String},
    
    link_url: {type: String},
    
    link_type: {type: String},
    
    
    description: {type: String},
    
    
    
    
    date_entered: {type: Date},
    
    date_modified: {type: Date},
    
    
    
    modified_user_id: {type: String},
    
    created_by: {type: String},
    
    assigned_user_id: {type: String},
    
    related_id: {type: String},
    
    
    
    
    deleted: {type: Number},
    
    
  }),'sugarfeed');
  //</es-section>
