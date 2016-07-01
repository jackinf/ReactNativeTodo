/**
 * Created by stylehopper on 1.07.16.
 */
const getBabelRelayPlugin = require('babel-relay-plugin');
const schema = require('./schema.json');

module.exports = { plugins: [getBabelRelayPlugin(schema.data)] };