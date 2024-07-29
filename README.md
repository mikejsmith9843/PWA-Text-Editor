# PWA-Text-Editor
Week-19 Challenge(Progressive Web Applications)

## Table of Contents
1. Description
2. Live-Url
3. Tech Used
4. Installation

## Description
This application was built for the purpose of demonstrating and honing skills of progressive web application. Its purpose was to gather a greater understanding of what React JavaScript library is really doing behind the scenes. There are four main concepts this application focuses on. One, configuring the webpack.config.js file with the necessary workbox plugins for service worker and manifest files, and adding CSS and babel loader (enabling the CSS and JavaScript to compile on devices running on older legacy code i.e. ES5). Two, implementing asset caching within the src-sw.js file giving the application offline functionality. Three, configuring the database, so that data can be added, updated and retrieved from the IndexedDB. And four, adding the addition of event handlers to our install button, so that the application can be installed to each users personal application stack and be used offline.

Although much of this application functions on a boilerplate code structure, building it out helped me to a greater understanding of the functionality of libraries and frameworks like React, Angular, and Vue. As of now I have no plans for future development, however this application can function as a benchmark boilerplate code base for the development of future progressive web applications.

## Live Url
https://pwa-text-editor-l8tr.onrender.com/

## Tech Used
This application is powered by Webpack (HTML-Webpack-Plugin, Babel, and CSS Loader), Node.js (v16.19.1), Express.js (v.14.17.1), and JavaScript. Nodemon (v2.0.4) and Concurrently (v5.2.0) were utilized as a devDependencies allowing the server to refresh when edits were made to application, and allowing both the front end and back end to be ran on a single command (npm run start:dev).

## Installation
Users can view and utilize the application through the use of the browser by visiting the deployed application at
https://pwa-text-editor-l8tr.onrender.com/

Viewing the application in the browser will also give users the ability to download the application allowing it to be used offline.

To make any further additions, start by cloning the repo in the command line git clone
https://github.com/mikejsmith9843/PWA-Text-Editor, or forking repo