require('babel-register')();

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

const doc = jsdom('<!doctype html><html><body><div id="js-dom-container"></div></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.React = require('react');
global.chai = require('chai');
global.chaiEnzyme = require('chai-enzyme');
global.enzyme = require('enzyme');

global.expect = global.chai.expect;
global.shallow = global.enzyme.shallow;
global.mount = global.enzyme.mount;
global.render = global.enzyme.render;

global.chai.use(global.chaiEnzyme());

function mountToDom(component, options) {
  const settings = $.extend({}, { attachTo: doc.body.firstChild }, options);
  return global.enzyme.mount(component, settings);
}
global.mountToDom = mountToDom;
window.$ = global.$;