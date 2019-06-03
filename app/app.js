'use strict';

module.exports = app => {
  app.once('server', server => {
    console.log(server);
  });
  app.on('error', (err, ctx) => {
    console.log('error');
    console.log('test');
  });
  app.on('request', ctx => {
    console.log('request');
  });
  app.on('response', ctx => {
    const used = Date.now() - ctx.starttime;
    console.log(used);
  });
};
