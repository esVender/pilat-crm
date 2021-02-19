/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:39:04 GMT-0400 (Bolivia Time)
 * Time: 18:39:4
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:39:04 GMT-0400 (Bolivia Time)
 * Last time updated: 18:39:4
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const usersPasswordLink = sequelize.define('usersPasswordLink', {
      
      id: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      username: DataTypes.STRING,
      
      
      
      
      date_generated: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'users_password_link',
      timestamps: false,
    });
    usersPasswordLink.associate = (models) => {
      
    };
    return usersPasswordLink;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("usersPasswordLink", new Schema({
    
    
    
    username: {type: String},
    
    
    
    
    
    date_generated: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'users_password_link');
  //</es-section>
