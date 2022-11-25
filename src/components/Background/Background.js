
import React from 'react';
import './Background.css';
import {
	FaTwitter,
	FaLinkedinIn,
	FaGithub,
	FaYoutube,
	FaCodepen,
	FaInstagram,
	FaBootstrap,
	FaCss3Alt,
	FaReact,
} from 'react-icons/fa'; 
import { DiJavascript1 } from "react-icons/di";

function Background() {

	return (
		<>
			<div className="area" >
				<ul className="circles ul item">
					<li><FaLinkedinIn aria-label='LinkedIn' /></li>
					<li><FaInstagram aria-label='Instagram' /></li>
					<li><FaGithub aria-label='GitHub' /></li>
					<li><FaTwitter aria-label='Twitter' /></li>
					<li><FaCodepen aria-label='CodePen' /></li>
					<li><FaYoutube aria-label='YouTube' /></li> 
					<li><FaBootstrap aria-label='Bootstrap' /></li> 
					<li><FaCss3Alt aria-label='CSS' /></li>
					<li><FaReact aria-label='React' /></li>
					<li><DiJavascript1 aria-label='React' /></li>
				</ul>
			</div >
			<div className="area" >
				<ul className="circles2 ul item">
					<li><FaLinkedinIn aria-label='LinkedIn' /></li>
					<li><FaInstagram aria-label='Instagram' /></li>
					<li><FaGithub aria-label='GitHub' /></li>
					<li><FaTwitter aria-label='Twitter' /></li>
					<li><FaCodepen aria-label='CodePen' /></li>
					<li><FaYoutube aria-label='YouTube' /></li> 
					<li><FaBootstrap aria-label='Bootstrap' /></li> 
					<li><FaCss3Alt aria-label='CSS' /></li>
					<li><FaReact aria-label='React' /></li>
					<li><DiJavascript1 aria-label='React' /></li>
				</ul>
			</div >
		</>
	)
};

export default Background;

