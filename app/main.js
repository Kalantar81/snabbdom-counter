"use strict";

import snabbdom from 'snabbdom';

import counter from './counter';

const patch = snabbdom.init([
  require('snabbdom/modules/class'),          // makes it easy to toggle classes
  require('snabbdom/modules/props'),          // for setting properties on DOM elements
  require('snabbdom/modules/style'),          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);




function main(initState, oldVnode, {view, update}) {
  const newVnode = view(initState, e => {
    const newState = update(initState, e);
    main(newState, newVnode, {view, update});
  });
  patch(oldVnode, newVnode);
}


main(
  5, // the initial state 
  document.getElementById('placeholder'), 
  counter
);
