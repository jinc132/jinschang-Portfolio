import React from "react";

const Link = ({ href, value }) => {
	return (
		<a href={href} rel='noopener noreferrer' target='_blank'>
			{value}
		</a>
	);
};

export default Link;
