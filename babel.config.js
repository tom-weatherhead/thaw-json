/**
 * Copyright (c) Tom Weatherhead. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See e.g. github/facebook/jest/babel.config.js

'use strict';

const semver = require('semver');
const pkg = require('./package.json');

const supportedNodeVersion = semver.minVersion(pkg.engines.node).version;

module.exports = {
	"presets": [
		[
			"@babel/preset-env",
			{
				targets: {
					node: supportedNodeVersion
				}
			}
		],
		"@babel/preset-typescript"
	]
};
