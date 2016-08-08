var join = require('path').join;
var util = require('./util');

function generateService(name) {
  util.log('log', 'generate', 'service ' + name);
  util.createFile(
    rel('../snippets/service.js'),
    cwd(`./src/services/${name}.js`)
  );
}

function generateSaga(name) {
  util.log('log', 'generate', 'saga ' + name);
  util.createFile(
    rel('../snippets/saga.js'),
    cwd(`./src/sagas/${name}.js`)
  );
}

function generateReducer(name) {
  util.log('log', 'generate', 'reducer ' + name);
  util.createFile(
    rel('../snippets/reducer.js'),
    cwd(`./src/reducers/${name}.js`),
    {
      '__reducer_name__': name,
    }
  );
  util.createFile(
    rel('../snippets/reducer-test.js'),
    cwd(`./src/reducers/__tests__/${name}-test.js`),
    {
      '__reducer_name__': name,
    }
  );
}

function generateComponent(name) {
  util.log('log', 'generate', 'component ' + name);
  var uName;
  var componentPath;
  if (name.indexOf('/') > -1) {
    uName = util.upperCamelCase(name.split('/')[1]);
    componentPath = name;
  } else {
    uName = util.upperCamelCase(name);
    componentPath = `${uName}/${uName}`;
  }

  util.createFile(
    rel('../snippets/Component.jsx'),
    cwd(`./src/components/${componentPath}.jsx`),
    {
      '__COMPONENT_NAME__': uName,
    }
  );
  util.createFile(
    rel('../snippets/Sample.less'),
    cwd(`./src/components/${componentPath}.less`)
  );
}

function generateRoute(name) {
  util.log('log', 'generate', 'route ' + name);
  var uName = util.upperCamelCase(name);

  util.updateFileByRegexp(
    cwd('./src/routes/index.js'),
    {
      '(/\\* import placeholder for generator \\*/)': `import ${uName} from './${uName}';\n$1`,
      '(/\\* route placeholder for generator \\*/)': `<Route path="/${name}" component={${uName}} />\n      $1`,
    }
  );
  util.createFile(
    rel('../snippets/Container.jsx'),
    cwd('./src/routes/' + uName + '.jsx'),
    {
      '__COMPONENT_NAME__': uName,
    }
  );
  util.createFile(
    rel('../snippets/Sample.less'),
    cwd('./src/routes/' + uName + '.less')
  );
}

function rel(filepath) {
  return join(__dirname, filepath);
}

function cwd(filepath) {
  return join(process.cwd(), filepath);
}

var generator = {
  route: generateRoute,
  component: generateComponent,
  reducer: generateReducer,
  service: generateService,
  saga: generateSaga,
};

function generate(type, name) {
  if (generator[type]) {
    generator[type](name);
  } else {
    console.log('[ERROR] generator for ' + type + ' not found');
  }
}

module.exports = generate;
