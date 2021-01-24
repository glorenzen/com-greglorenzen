import React from "react";
import { Root, Routes, addPrefetchExcludes } from "react-static";

import { Link, Router } from "components/Router";

import Button from "./components/styled/Button";
import logo from "./img/logo/logo_400x400.png";

import "./app.css";

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(["dynamic"]);

function App() {
	return (
		<Root>
			<div className="grid-container">
				<div className="header">
					<div className="header-content">
						<Link to="/" style={{ textAlign: "center" }}>
							<img src={logo} className="logo" />
						</Link>
						<Link to="/contact">
							<Button>Contact</Button>
						</Link>
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
