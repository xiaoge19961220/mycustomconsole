

class CustomConsole {
  styles = {
    info: {
      header: 'color: #fff; background: #606060; font-weight: bold;',
      content: 'color: green; font-weight: bold;'
    },
    log: {
      header: 'color: #fff; background: #606060; font-weight: bold;',
      content: 'color: #000000; font-weight: bold;'
    },
    warn: {
      header: 'color: #fff; background: #FFA500; font-weight: bold;',
      content: 'color: #000000; font-weight: bold;'
    },
    error: {
      header: 'color: #fff; background: #FF0000; font-weight: bold;',
      content: 'color: #000000; font-weight: bold;'
    },
    version:{
      header:'padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;',
      content: 'padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e; font-weight: bold;',
    },
  }
  constructor(globalHeader,styles) {
    this.globalHeader = globalHeader||'hello';
    this.originalConsole = global.console;
    if(styles&&styles.version)this.styles.version=styles.version
    if(styles&&styles.info)this.styles.info=styles.info
    if(styles&&styles.log)this.styles.log=styles.log
    if(styles&&styles.warn)this.styles.log=styles.warn
    if(styles&&styles.error)this.styles.log=styles.error
  }

  clearLog(){
    this.originalConsole.log=()=>{}
    this.originalConsole.error=()=>{}
    this.originalConsole.warn=()=>{}
  }
  
  version(...args){
    this.originalConsole.log(
      `%c ${this.globalHeader} %c ${args}`,
      this.styles.version.header,
      this.styles.version.content
    );
  }

  log(...args) {
    this.originalConsole.log(
      `%c ${this.globalHeader} %c ${args}`,
      this.styles.log.header,
      this.styles.log.content
    );
  }
  info(...args) {
    this.originalConsole.log(
      `%c ${this.globalHeader} %c ${args}`,
      this.styles.info.header,
      this.styles.info.content
    );
  }

  warn(...args) {
    this.originalConsole.warn(
      `%c ${this.globalHeader} %c ${args}`,
      this.styles.warn.header,
      this.styles.warn.content
    );
  }

  error(...args) {
    this.originalConsole.error(
      `%c ${this.globalHeader} %c ${args}`,
      this.styles.error.header,
      this.styles.error.content
    );
  }
}

module.exports = CustomConsole;

