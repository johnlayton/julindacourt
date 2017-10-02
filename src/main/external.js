const spawn = require('child_process').spawn

exports.getLogger = (host, file, handler) => {
  spawn('ssh', [host, 'tail -f -n 50', file]).stdout.on('data', handler)
}
