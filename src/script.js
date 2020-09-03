import * as Sentry from '@sentry/browser';
import { Integrations } from '@sentry/tracing';

Sentry.init({ 
    dsn: 'https://8bbaeece308a450dbc058be3a4eaadbe@o433789.ingest.sentry.io/5416755',
    release: 'webpack-test@1.0.1',
    integrations: [new Integrations.BrowserTracing()],
    tracesSampleRate: 1.0,
    debug: true,
});

try {
    myUndefinedFunction(); // error here
} catch (err) {
    Sentry.captureException(err);
}
 
    
