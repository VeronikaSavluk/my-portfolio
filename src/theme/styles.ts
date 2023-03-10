import { defineStyle } from "@chakra-ui/react";

interface Freeze {
	global: {
		body: {
			m: number | String,
			fontSize: String,
			lineHeight: number | String,
      bgGradient: String,
      border: String,
      borderColor: String,
      color: String,
		},
		a: {
			color: String,
			textDecoration: String,
		},
		ul: {
			listStyle: String,
		},
		img: {
			height: String,
		},
		button: {
			borderRadius: String,
		},
	}
};

export const styles: Readonly<Freeze> = defineStyle({
	global: {
		body: {
			m: 0,
			fontSize: '14px',
			lineHeight: 'base',
			bgGradient: 'linear(to-r, #001e00, #006600, #001e00)',
			border: '1px solid',
			borderColor: 'transparent',
			color: '#f1b61f',
		},
		a: {
			color: '#f1b61f',
			textDecoration: 'none',
		},
		ul: {
			listStyle: 'none',
		},
		img: {
			height: 'auto',
		},
		button: {
			borderRadius: '4px',
		},
	},
});