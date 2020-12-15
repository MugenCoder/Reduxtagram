import Raven from 'raven-js';

const sentry_key = '';
const sentry_app = '';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logExceptions(ex, context) {
    Raven.captureExceptoins(ex, {
        extra: context
    });
    // es lint no-console:0
    window && window.console && console.error && console.error(ex);
}