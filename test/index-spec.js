var coffee = require('coffee');
var join = require('path').join;
var mkdirSync = require('fs').mkdirSync;
var binPath = join(__dirname, '../bin/antd-init');
var rimraf = require('rimraf');

describe('antd-init', function() {
  var tmpPath = join(__dirname, 'tmp');
  var cwd = process.cwd();

  before(function() {
    mkdirSync(tmpPath);
    process.chdir(tmpPath);
  });

  after(function() {
    rimraf.sync(tmpPath);
    process.chdir(cwd);
  });

  it('init', function(done) {
    coffee
      .spawn(binPath)
      .expect('stdout', [/Write \.\/index\.jsx/, /npm install end/])
      //.expect('stderr', '')
      .debug()
      .end(done);
  });

  it('run build', function(done) {
    coffee.spawn('npm', 'run build'.split(' '))
      .expect('stdout', [/extract-text-webpack-plugin/, /Time:/, /Hash:/])
      .expect('stderr', '')
      .debug()
      .end(done);
  });

  it('run dev', function(done) {
    // 由于 npm run 不会透传 signal, 这里直接引 bin 文件
    var doraPath = join(__dirname, './tmp/node_modules/.bin/dora');
    var c = coffee.spawn(doraPath, '-p 8001 --plugins atool-build,proxy,hmr'.split(' '))
      .expect('stdout', [/proxy: listened on/, /dora: listened on 8001/, /webpack: bundle build is now finished\./])
      .expect('stderr', '')
      .debug()
      .end(done);

    setTimeout(function() {
      c.proc.kill();
    }, 20000);
  });
});
