<h1>Gulp 4 frontend boilerplate with SCSS, Babel and including JS files</h1>

Project based on @thecodercoder frontend-boilerplate (https://github.com/thecodercoder/frontend-boilerplate) with dependency updates, vulnerability fixes and adjustments for my personal needs.

Package-lock.json contains updated critical vulnerability dependencies, so include it before running npm install.

<h2>What it does:</h2>
<ul>
  <li>Compile SCSS into CSS file</li>
  <li>Autoprefix and minify the CSS file</li>
  <li>Compile ES6+ to ES5 with Babel</li>
  <li>Enable including one JS file into another as an alternative for ES6 import/export</li>
  <li>Concatenate and Uglify the JS files</li>
  <li>Move final CSS and JS files to the /dist folder</li>
</ul>

<h2>Usage guide:</h2>
<ul>
  <li>Clone or download this Git repository</li>
  <li>Install <a href="https://nodejs.org/en/" rel="nofollow">Node.js</a> if you don't have it yet</li>
  <li>Open console with path to cloned or downloaded folder</li>
  <li>Run <code>npm install</code></li>
  <li>Run <code>gulp</code> to run the default Gulp task, which will watch for changes you make</li>
</ul>
