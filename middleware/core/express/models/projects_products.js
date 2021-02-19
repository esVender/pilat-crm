/**
 * Created by @ES Express Systems
 * User: Rafael Gutierrez Gaspar
 * Date: Fri Feb 19 2021 18:38:20 GMT-0400 (Bolivia Time)
 * Time: 18:38:20
 * Last User updated: Rafael Gutierrez Gaspar
 * Last date updated: Fri Feb 19 2021 18:38:20 GMT-0400 (Bolivia Time)
 * Last time updated: 18:38:20
 *
 * Caution: es-sections will be replaced by script execution
 */

const mongoose = require("mongoose");
const {Schema} = mongoose;

'use strict';

    //<es-section>

  module.exports.sequelize = (sequelize, DataTypes) => {
    const projectsProducts = sequelize.define('projectsProducts', {
      
      id: { type: DataTypes.STRING, primaryKey: true },
      
      
      
      
      
      product_id: DataTypes.STRING,
      
      project_id: DataTypes.STRING,
      
      
      
      
      date_modified: DataTypes.DATE,
      
      
      
      
      
      
      deleted: DataTypes.TINYINT,
      
      
    }, {
      tableName:'projects_products',
      timestamps: false,
    });
    projectsProducts.associate = (models) => {
      
    };
    return projectsProducts;
    //</es-section>
  };

  //<es-section>
  module.exports.mongoose = mongoose.model("projectsProducts", new Schema({
    
    
    
    product_id: {type: String},
    
    project_id: {type: String},
    
    
    
    
    
    date_modified: {type: Date},
    
    
    
    
    
    
    deleted: {type: Number},
    
    
  }),'projects_products');
  //</es-section>
