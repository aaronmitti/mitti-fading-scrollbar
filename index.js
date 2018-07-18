const colorString = require('color-string');

const SCROLLBAR_ACTIVE_CLASS = 'scrollbar-active';

// --
// Change scrollbar color to a dim version.
// Add a toggleable 'active' class to the scrollbar.

exports.decorateConfig = config => {
	const dimColor = [255, 255, 255, 0.0];
	const color = [255, 255, 255, 0.3];

	return Object.assign({}, config, {
		css: `
			${config.css || ''}

			.xterm-viewport::-webkit-scrollbar {
				width: 6px;
			}

			.xterm-viewport::-webkit-scrollbar-thumb {
				min-height: 20px;
				background-color: ${colorString.to.rgb(dimColor)};
			}

			.xterm-viewport::-webkit-scrollbar-thumb:hover,
			.xterm-viewport.${SCROLLBAR_ACTIVE_CLASS}::-webkit-scrollbar-thumb {
				background-color: ${colorString.to.rgb(color)};
			}
		`,
	});
};

