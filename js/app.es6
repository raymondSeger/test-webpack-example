//require('./login');
import {login} from "./login"

login('admin', 'idunno');

document.write("Welcome to Big Hair Concert!");

console.log('App Loaded');

// url-loader
var img = document.createElement('img');
img.style.width = "25%";
img.style.height = "25%";
img.src = require('../images/testImage.jpg');
document.getElementById('loadedWithJS').appendChild(img);

require('../css/app.scss');
require('../css/moreCSS.scss');