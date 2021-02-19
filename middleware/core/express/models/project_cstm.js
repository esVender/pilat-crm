/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Wed Feb 17 2021 04:43:53 GMT-0400 (Bolivia Time)
 * Time: 4:43:53
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Wed Feb 17 2021 04:43:53 GMT-0400 (Bolivia Time)
 * Last time updated: 4:43:53
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectCstm = sequelize.define('projectCstm', {
      
      id_c: { type: DataTypes.CHAR, primaryKey: true },
      
      
      
      
      
      jjwg_maps_geocode_status_c: DataTypes.STRING,
      
      jjwg_maps_address_c: DataTypes.STRING,
      
      
      
      
      
      
      
      jjwg_maps_lng_c: DataTypes.FLOAT,
      
      jjwg_maps_lat_c: DataTypes.FLOAT,
      
      
      
      
    }, {
      tableName:'project_cstm',
      timestamps: false,
    });
    projectCstm.associate = (models) => {
      
    };
    return projectCstm;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectCstm", new Schema({
    
    
    
    jjwg_maps_geocode_status_c: {type: String},
    
    jjwg_maps_address_c: {type: String},
    
    
    
    
    
    
    
    
    jjwg_maps_lng_c: {type: mongoose.Types.Decimal128},
    
    jjwg_maps_lat_c: {type: mongoose.Types.Decimal128},
    
    
    
    
  }),'project_cstm');
  //</es-section>
