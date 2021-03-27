module.exports = {
	darkMode: 'class',
	theme: {
		extend: {
			spacing: {},
			colors: {
				// Primary colors
				black: '#000000',
				grey: '#1B2124',
				blue: '#443DF6',
				// Shade of greys
				'grey#1': '#8D9091',
				'grey#2': '#CCCCCC',
				'grey#3': '#EFEFEF',
				'grey#4': '#FBFBFB',
				// Tone colours
				navi: '#191489',
				red: '#C5292A',
				sunny: '#FFD965',
				marina: '#A6D4FF',
				green: '#22B02E',
			},

			// Shadows
			boxShadow: {
				'#1': '0px 0px 5px rgba(0, 0, 0, 0.05), 0px 25px 35px rgba(0, 0, 0, 0.03)',
				'#2': '0px 2px 5px rgba(0, 0, 0, 0.05)',
			},
			fontSize: {
				'h1+': ['3.75rem', '4.5rem'],
				h1: ['2.25rem', '2.5rem'],
				h2: ['1.875rem', '2.5rem'],
				h3: ['1.5rem', '2rem'],
				h4: ['1rem', '1.5rem'],
			},
			screens: {
				landscape: { raw: '(orientation: landscape)' },
				portrait: { raw: '(orientation: portrait)' },
			},
			fontFamily: {
				sans: ['Inter var'],
				mono: ['Inconsolata'],
			},
		},
	},
	variant: {},
	plugin: [],
}
