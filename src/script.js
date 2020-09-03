import * as Sentry from '@sentry/browser';

Sentry.init({ 
    dsn: 'https://8bbaeece308a450dbc058be3a4eaadbe@o433789.ingest.sentry.io/5416755',
    release: 'webpack-test@1.0.0' 
});

function runMe() {
    alert('This is gonna work fine! Oh yes!');
 //   myUndefinedFunction(); // error here
}

runMe();