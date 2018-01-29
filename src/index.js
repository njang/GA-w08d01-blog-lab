import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Post title={"Moby Dick"} author={"Herman Melville"} comments={["Hello world", "Good night and Good bye"]} />, 
	document.getElementById('root')
);
registerServiceWorker();
