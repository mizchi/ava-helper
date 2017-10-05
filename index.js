/* @flow */
const test = require('ava')
const { shallow } = require('enzyme')
const toJson = require('enzyme-to-json').default

exports.justSnapshot = element => test(t => t.snapshot(toJson(shallow(element))))

