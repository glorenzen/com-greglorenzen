import React from "react";

const ImageGallery = (props) => {
	const { images } = props;

	return images ? (
		<ul className="gallery">
			{images.map((image, index) => {
				const { src } = image;

				return (
					<li key={index}>
						<img src={src} />
					</li>
				);
			})}
		</ul>
	) : null;
};

export default ImageGallery;
