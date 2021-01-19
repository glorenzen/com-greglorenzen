import React from "react";

import Section from "../components/Section";
import Row from "../components/Row";
import ImageGallery from "../components/ImageGallery";

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
	const images = [
		{ src: jackRyanImg1 },
		{ src: jackRyanImg2 },
		{ src: jackRyanImg3 },
		{ src: jackRyanImg4 },
		{ src: jackRyanImg5 },
		{ src: jackRyanImg6 },
		{ src: jackRyanImg7 },
		{ src: jackRyanImg8 },
		{ src: jackRyanImg9 },
		{ src: jackRyanImg10 },
		{ src: jackRyanImg11 }
	];

	return (
		<div className="home">
			<Section>
				<Row>
					<h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
						Greg Lorenzen
					</h1>
					<hr style={{ width: "200px", border: "1px solid #59564F" }} />
					<h4 className="subheading">Web &amp; Software Developer</h4>
				</Row>
			</Section>
			<Section>
				<Row>
					<h3 style={{ textAlign: "center", textTransform: "uppercase" }}>Work</h3>
					<h4>Amazon Prime Experience - Jack Ryan</h4>
					<ImageGallery images={images} />
				</Row>
			</Section>
		</div>
	);
};
