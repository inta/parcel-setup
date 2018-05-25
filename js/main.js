import '../css/main.css';
import say from './hello.js';
import img from './img.js';

document.body.innerHTML = `
	<h1>${say.hello('world')}</h1>
	<h2>${say.hello(42)}</h2>
	${img.favicon}
`;
