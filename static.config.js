import path from "path";
import React from "react";

export default {
	siteRoot: "https://greglorenzen.com",
	Document: ({ Html, Head, Body, children, state: { siteData, renderMeta } }) => (
		<Html lang="en-US">
			<Head>
				<title>Greg Lorenzen</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, intital-scale=1" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
				<link rel="shortcut icon" type="image/png" href="/favicon.png" />
			</Head>
			<Body>{children}</Body>
		</Html>
	),
	plugins: [
		[
			require.resolve("react-static-plugin-source-filesystem"),
			{
				location: path.resolve("./src/pages")
			}
		],
		require.resolve("react-static-plugin-reach-router"),
		require.resolve("react-static-plugin-sitemap")
	]
};
