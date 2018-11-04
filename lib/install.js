function runCmd(cmd, args, fn) {
  args = args || [];
  var runner = require('child_process').spawn(cmd, args, {
    // keep color
    stdio: "inherit"
  });
  runner.on('close', function (code) {
    if (fn) {
      fn(code);
    }
  });
}

var which = require('which');
var npms = ['tnpm', 'cnpm', 'npm'];

function findNpm() {
  for (var i = 0; i < npms.length; i++) {
    try {
      which.sync(npms[i]);
      console.log('use npm: ' + npms[i]);
      return npms[i];
    } catch (e) {

    }
  }
  throw new Error('please install npm');
}

var npm = findNpm();

runCmd(which.sync(npm), ['install'], function () {
  console.log(npm + ' install end');
  console.log();
  console.log('---');
  console.log();
  console.log('antd-init@2 仅适用于学习和体验 antd，如果你要开发项目，推荐使用 create-umi 进行项目初始化。umi 是一个可插拔的企业级 React 前端应用框架，已在生产环境广泛应用。');
  console.log('antd-init@2 is only for experience antd. If you want to create projects, it\'s better to init with create-umi. umi is a pluggable enterprise-level react application framework.');
  console.log();
  console.log('Usage:');
  console.log();
  console.log('mkdir myapp && cd myapp');
  console.log('yarn create umi');
  console.log();
  console.log('Visit https://github.com/umijs/create-umi/ to learn more.');
});
