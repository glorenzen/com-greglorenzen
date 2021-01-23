import React from "react";

import Section from "../components/styled/Section";
import Row from "../components/styled/Row";
import Column from "../components/styled/Column";
import Divider from "../components/styled/Divider";

import jackRyanImg from "../img/jack-ryan/jack_ryan_8.png";
import avesImg from "../img/aves/aves-all.png";
import cowboysImg from "../img/dallas-cowboys/QB-Players-All-2.png";
import bunimMurrayImg from "../img/bunim-murray/bunim-murray-combined.png";

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
						<img src={jackRyanImg} style={{ maxWidth: "100%" }} />
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
			<Section>
				<Row>
					<h4>Amazon Prime Experience - A Very English Scandal</h4>
				</Row>
				<Row>
					<Column>
						<img src={avesImg} style={{ maxWidth: "100%" }} />
					</Column>
					<Column>
						<p style={{ margin: "0px" }}>
							Based on the Amazon Original series “A Very English Scandal”, this
							experience allowed attendees to freely walk through a room modeled after
							key locations from the series, including the courtroom. My part on this
							project involved developing an application where attendees were able to
							type out love letters and send them via email to someone. The app
							included a front end built using ReactJS as well as a server built using
							Node and WebSockets. The server received the love letter text and
							rendered it on an Instagram sized background image using HTML Canvas and
							then sent it to the recipient via email.
						</p>
					</Column>
				</Row>
			</Section>
			<Section>
				<Row>
					<h4>Bunim/Murray Trivia</h4>
				</Row>
				<Row>
					<Column>
						<img src={bunimMurrayImg} style={{ maxWidth: "100%" }} />
					</Column>
					<Column>
						<p style={{ margin: "0px" }}>
							Bunim/Murray Productions are an Emmy Award-winning company that produce
							reality television shows such as Road Rules, The Simple Life and
							Starting Over. I was tasked with building a trivia application in which
							questions were based off their television shows. The app included a
							front end built with ReactJS and a server built with NodeJS connected to
							a DMX universe. When a correct answer was chosen by the user, the React
							application would send a message back to the server via WebSockets which
							would then trigger a DMX light to turn on related to the question’s
							corresponding television show.
						</p>
					</Column>
				</Row>
			</Section>
			<Section>
				<Row>
					<h4>Dallas Cowboys Multitaction Experience</h4>
				</Row>
				<Row>
					<Column>
						<img src={cowboysImg} style={{ maxWidth: "100%" }} />
					</Column>
					<Column>
						<p style={{ margin: "0px" }}>
							Another app built with using MT Showcase, the Dallas Cowboys
							Multitaction Experience allows users who take the tour of the Cowboys
							facility to interact with 15 Multitaction screens working as a single
							display. Users can view player stats and videos of some of the Cowboys’
							best Quarterbacks, Runningbacks or Wide Receivers from over the years.
						</p>
					</Column>
				</Row>
			</Section>
		</div>
	);
};
