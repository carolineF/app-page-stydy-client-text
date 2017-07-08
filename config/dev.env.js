/**
 * @file 开发环境相关配置文件
 * @author wangfengzhu(wangfengzhu@meituan.com)
 */

'use strict';

const merge = require('webpack-merge');
const prodEnv = require('./prod.env.js');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
});
