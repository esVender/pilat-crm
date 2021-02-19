/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:19 GMT-0400 (Bolivia Time)
 * Time: 18:38:19
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:19 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:19
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectsContacts = sequelize.define('projectsContacts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      contact_id: DataTypes.STRING,
      
      project_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'projects_contacts',
      timestamps: false,
    });
    projectsContacts.associate = (models) => {
      
    };
    return projectsContacts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectsContacts", new Schema({
    
    
    
    contact_id: {type: String},
    
    project_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'projects_contacts');
  //</es-section>
