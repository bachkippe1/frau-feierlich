module.exports = function(data, options) {
  return options.fn(JSON.parse(data));
}