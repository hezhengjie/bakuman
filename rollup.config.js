import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import sourcemaps from 'rollup-plugin-sourcemaps';
import resolve from 'rollup-plugin-node-resolve';

const packages = require('./package.json');

const paths = {
    root: '/src/',
    source: {
        root: process.env.NODE_ENV === 'example'
            ? './example/'
            : './src/',
    },
    dist: {
        root: process.env.NODE_ENV === 'example'
            ? './example/dist/'
            : './dist/',
    },
};

let fileName,
    Configure;

switch (process.env.NODE_ENV) {
    case 'development':
        fileName = packages.name;
        break;
    case 'example':
        fileName = `example`;
        break;
    case 'production':
        fileName = `${packages.name}.min`;
        break;
}

Configure = {
    entry: `${paths.source.root}index.js`,
    moduleName: packages.moduleName,
    sourceMap: true,
    targets: [
        {
            dest: `${paths.dist.root}${fileName}.js`,
            format: 'umd',
        },
    ],
    plugins: [
        babel(),
        sourcemaps(),
        resolve(),
    ]
};

if (process.env.NODE_ENV === 'production') {
    Configure.plugins.push(uglify());
    Configure.targets.push({dest: `${paths.dist.root}${fileName}.es.js`, format: 'es'});
}

export default Configure;