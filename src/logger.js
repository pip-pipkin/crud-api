// right now this is just an abstraction for console.log.
// replace this with a more robust logging solution like winston

const logger = {
  log: (...args) => console.log(...args),
  error: (...args) => console.error(...args),
  info: (...args) => console.info(...args),
  warn: (...args) => console.warn(...args),
}

export default logger