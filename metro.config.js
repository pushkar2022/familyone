// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://reactnative.dev/docs/metro
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
    transformer: {
        minifierPath: 'metro-minify-terser',
        minifierConfig: {
            ecma: 5,
            keep_classnames: false,
            keep_fnames: false,
            mangle: {
                toplevel: true,
                // Consider adding specific configurations here if needed
            },
            compress: {
                drop_console: true,
                drop_debugger: true,
                // Additional compression options to reduce bundle size
                passes: 2, // Number of times to run the compress pass
                // You can add more compression settings if needed
            },
            // babelTransformerPath: require.resolve('react-native-hermes-engine'),
            output: {
                comments: false,
                // Other output options to further minimize size
            },
        },
        experimentalImportSupport: false,
        inlineRequires: true, // Enables inline requires to improve bundle performance
    },
    resolver: {
        sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
        assetExts: ['png', 'jpg', 'svg'], // Consider including other asset types if needed
    },
    // If you are using a specific environment, you might want to conditionally set configurations
    // For example:
    // ...(process.env.NODE_ENV === 'production' ? { / production settings / } : {}),
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);