import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import { Link, Router } from "components/Router";

import Button from "../src/components/Button";
import logo from "./img/logo_400x400.png";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
	return (
		<Root>
			<div className="grid-container">
				<div className="header">
					<div className="header-content">
						<img src={logo} className="logo" />
						<Button text="Contact" link="mailto:gregorylorenzen@gmail.com" />
					</div>
				</div>
				<div className="main">
					<React.Suspense fallback={<em>Loading...</em>}>
						<Router>
							<Routes path="*" />
						</Router>
					</React.Suspense>
				</div>
			</div>
		</Root>
	);
}

export default App;
