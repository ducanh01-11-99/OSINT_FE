const shell = require('shelljs');
const content = `var SystemConfig = {
  LANG: 'vi',
  API_URL: 'http://172.168.200.202:8899',
  LOGIN_API_URL: 'http://172.168.200.202:8899/api/v1/auth/login',
  SOCKET_URL: 'http://172.168.200.202:8084',
  RELEASE: true,
};`;
shell.echo(content).to('build/SystemConfig.js');
