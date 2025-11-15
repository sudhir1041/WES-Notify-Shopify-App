import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";
import { setupGlobalErrorHandler } from "./utils/error-handler";

export default function App() {
  useEffect(() => {
    setupGlobalErrorHandler();
  }, []);

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' 'unsafe-inline' 'unsafe-eval' https: data:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:;" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
