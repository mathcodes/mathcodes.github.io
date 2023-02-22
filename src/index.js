import './css/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root'); // NOTE: here we get the element with id="root" from index.html
const root = createRoot(container); // NOTE: then we pass it to createRoot and bind it to the root variable
root.render(<App />); // NOTE: then we render the App component inside the root element

// NOTE Essentially, this is the same as: ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root');
// NOTE: but it's more efficient because it doesn't have to re-render the whole app every time we make a change. This is done by the `createRoot` function in that it only re-renders the part of the app that has changed.
reportWebVitals();

// NOTE: In Other Words:

// NOTE: The purpose of this is to make the app more performant by rendering the app in a separate thread. This is done by using the createRoot function from the react-dom/client package. This function returns a root object which we can use to render the app. The root object has a render method which takes the app component as an argument. This is the same as the render method from the ReactDOM package.
// NOTE: The only difference is that the render method from the root object is asynchronous. This means that the app will be rendered in a separate thread and the main thread will be free to do other things. This is a good thing because the main thread is responsible for handling user input and rendering the app. If the main thread is busy rendering the app, the user will not be able to interact with the app. This is why the app will appear to be frozen. By rendering the app in a separate thread, the main thread will be free to handle user input and the app will appear to be more responsive. This is the main reason why we use the createRoot function.