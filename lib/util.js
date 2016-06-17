var fs = require('fs-extra');
var leftPad = require('left-pad');
var readFileSync = fs.readFileSync;
var outputFileSync = fs.outputFileSync;
var removeSync = fs.removeSync;

function createFile(from, to, patterns) {
  log('log', 'create', simplifyFilename(to));
  check(to, fileNotExists, 'file exists ' + simplifyFilename(to));
  var content = readFileSync(from, 'utf-8');
  if (patterns) {
    content = replaceContent(content, patterns);
  }
  outputFileSync(to, content);
}

function removeFile(to) {
  log('log', 'remove', simplifyFilename(to));
  check(to, fileExists, 'file not exists ' + simplifyFilename(to));
  removeSync(to);
}

function updateFile(to, updateFn) {
  log('log', 'update', simplifyFilename(to));
  check(to, fileExists, 'file not exists ' + simplifyFilename(to));
  var content = readFileSync(to, 'utf-8');
  content = updateFn(content);
  outputFileSync(to, content);
}

function updateFileByRegexp(to, patterns) {
  updateFile(to, function(content) {
    check(patterns, validPattern(content), 'valid patterns');
    return replaceContent(content, patterns);
  });
}

function updateFileByAst(to) {
  updateFile(to, function(content) {
    console.log('TODO: updateFileByAst');
    return content;
  });
}

function replaceContent(content, patterns) {
  for (var k in patterns) {
    if (patterns.hasOwnProperty(k)) {
      var p = patterns[k];
      content = content.replace(new RegExp(k, 'g'), p);
    }
  }
  return content;
}

function validPattern(content) {
  return function(patterns) {
    return Object.keys(patterns).every(function(key) {
      var m = content.match(new RegExp(key));
      return m && m[1];
    });
  }
}

function fileExists(filepath) {
  try {
    fs.accessSync(filepath, fs.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

function fileNotExists(filepath) {
  return !fileExists(filepath);
}

function simplifyFilename(filename) {
  return filename.replace(process.cwd(), ".");
}

function log(level, type, msg) {
  console[level](leftPad(type, 8) + ': ' + msg);
}

function check(value, predicate, error) {
  if(!predicate(value)) {
    log('error', 'error', error);
    throw new Error(error);
  }
}

function upperCamelCase(str) {
  var firstChat = str.charAt(0);
  if (firstChat === firstChat.toUpperCase()) {
    return str;
  } else {
    require('uppercamelcase')(str);
  }
}

module.exports = {
  createFile: createFile,
  removeFile: removeFile,
  updateFile: updateFile,
  updateFileByAst: updateFileByAst,
  updateFileByRegexp: updateFileByRegexp,
  replaceContent: replaceContent,
  check: check,
  log: log,
  fileExists: fileExists,
  fileNotExists: fileNotExists,
  simplifyFilename: simplifyFilename,
  upperCamelCase: upperCamelCase,
};
