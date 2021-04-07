"use strict";

const sql = require( "./sql" );

module.exports.register = async server => {
   // register plugins
   await server.register( sql );
};