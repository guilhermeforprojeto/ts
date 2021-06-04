"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const greetings_module_js_1 = require("./greetings_module.js"); // imports a single function in the module
const allGreetingFunctions = __importStar(require("./greetings_module.js")); // imports all exported components in the module
const greetings_utilities_module_js_1 = require("./greetings-utilities_module.js");
greetings_module_js_1.returnGreeting('Hola!'); // Displays 'The message from Greetings_module is Hola!'
allGreetingFunctions.returnGreeting('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
greetings_utilities_module_js_1.returnGreeting('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
