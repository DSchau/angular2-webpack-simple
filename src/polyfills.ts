import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import 'ts-helpers';

if (process.env.ENV === 'build') {

} else {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}