module.exports = {
	extends: [
		// Reasonable config for CSS and SCSS
		"stylelint-config-sass-guidelines",
		// Config for enforcing property order
		"@zilahir/stylelint-config-rational-order",
	],

	rules: {
		// Rule overrides for stylelint-config-sass-guidelines
		"color-hex-length": "long",
		indentation: "tab",
		"max-nesting-depth": null,
		"order/properties-alphabetical-order": null,
		"selector-no-qualifying-type": null,

		// Additional rules
		"declaration-no-important": true,
		"font-family-name-quotes": "always-unless-keyword",
		"font-weight-notation": "numeric",
		"function-url-no-scheme-relative": true,
		"selector-attribute-quotes": "always",
		"string-quotes": "single",
	},
};
