require('../style/index.css');
require('../style/a.css');
// require('./news.js')
import Layer from './layer.js';

const App = function () {
	const dom = document.getElementById('app'),
		layer = new Layer();
	dom.innerHTML = layer.html;
}

new App();
