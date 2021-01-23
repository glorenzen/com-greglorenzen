import React from "react";

import Section from "../components/styled/Section";
import Row from "../components/styled/Row";
import Column from "../components/styled/Column";
import Divider from "../components/styled/Divider";

import jackRyanImg1 from "../img/jack-ryan/jack_ryan_0.png";
import jackRyanImg2 from "../img/jack-ryan/jack_ryan_1.png";
import jackRyanImg3 from "../img/jack-ryan/jack_ryan_2.png";
import jackRyanImg4 from "../img/jack-ryan/jack_ryan_3.png";
import jackRyanImg5 from "../img/jack-ryan/jack_ryan_4.png";
import jackRyanImg6 from "../img/jack-ryan/jack_ryan_5.png";
import jackRyanImg7 from "../img/jack-ryan/jack_ryan_6.png";
import jackRyanImg8 from "../img/jack-ryan/jack_ryan_7.png";
import jackRyanImg9 from "../img/jack-ryan/jack_ryan_8.png";
import jackRyanImg10 from "../img/jack-ryan/jack_ryan_9.png";
import jackRyanImg11 from "../img/jack-ryan/jack_ryan_10.png";

export default () => {
	return (
		<div className="home">
			<Section>
				<Row>
					<Column>
						<h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
							Greg Lorenzen
						</h1>
						<Divider primary />
						<h4 className="subheading">Web &amp; Software Developer</h4>
					</Column>
				</Row>
			</Section>
			<Section>
				<Row>
					<Column>
						<h3 style={{ textAlign: "center", textTransform: "uppercase" }}>Work</h3>
					</Column>
				</Row>
				<Row>
					<h4>Amazon Prime Experience - Jack Ryan</h4>
				</Row>
				<Row>
					<Column>
						<img src={jackRyanImg9} style={{ maxWidth: "100%" }} />
					</Column>
					<Column>
						<p style={{ margin: "0px" }}>
							Amazon hosts annual FYC events at the Hollywood Athletic Club, featuring
							interactive rooms and displays, to showcase their original series to
							Emmy voters. For “Tom Clancy’s Jack Ryan”, we crafted an experience that
							took eventgoers through the process of becoming an intelligence agent.
							The first room had fans get their pictures taken and then receive their
							ID badges. From there, they moved to the briefing room, where they were
							tasked with finding the active insurgent group on the interactive
							displays. Last, they moved on to combat training where they followed
							videos instructing them on defensive combat maneuvers. My work on the
							Jack Ryan experience involved developing the applications for the latter
							two rooms. The briefing room app was built for Multitaction screens
							using the MT Showcase software. Users were tasked with interacting with
							the locations on the world map until they found the active enemy
							combatants, which then triggered a clip from the series on another
							display. The second application was built with ReactJS, for the frontend
							to display the videos, and used physical buttons connected to an Arduino
							to trigger each corresponding video.
						</p>
					</Column>
				</Row>
			</Section>
		</div>
	);
};
