/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:35:32 GMT-0400 (Bolivia Time)
 * Time: 18:35:32
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:35:32 GMT-0400 (Bolivia Time)
 * Last time updated: 18:35:32
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const amProjecttemplatesProject1C = sequelize.define('amProjecttemplatesProject1C', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      am_projecttemplates_project_1am_projecttemplates_ida: DataTypes.STRING,
      
      am_projecttemplates_project_1project_idb: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'am_projecttemplates_project_1_c',
      timestamps: false,
    });
    amProjecttemplatesProject1C.associate = (models) => {
      
    };
    return amProjecttemplatesProject1C;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("amProjecttemplatesProject1C", new Schema({
    
    
    
    am_projecttemplates_project_1am_projecttemplates_ida: {type: String},
    
    am_projecttemplates_project_1project_idb: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'am_projecttemplates_project_1_c');
  //</es-section>
