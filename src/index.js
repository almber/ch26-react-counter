import React from 'react';
import ReactDOM from 'react-dom/client';
//import { ParagraphLink } from './components/paragraphLink/ParagraphLink';
import P from './components/paragraphLink/ParagraphLink';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>
     {/* <p href="http"> texto</p> */}
     <P href="http://legacy.reactjs.org/" color= "red" >Página React</P>
     <P href="httpa://youtube.com" color="green" >Página Youtube</P>
     <P href="https://linkedin.com" color="purple" >Página LinkedIn</P>
     <P href="https://linkedin.com" >Página Generation</P>
     <P href="#">Página CH26</P>
  </React.StrictMode>
);

