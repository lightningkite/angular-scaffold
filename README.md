# LK Angular Scaffold

***

### Quick Start

Install Node.js and then:

	$ git clone https://bitbucket.org/lightningkite/angular-scaffold.git
	$ cd angular-scaffold
	$ sudo npm -g install grunt-cli karma bower
	$ npm install
	$ bower install
	$ grunt watch



This Scaffold is backend agnostic and is compatible with almost any backend. 

#### To work with django:

there are two changes to the index.html that need to be made. Insert /static/ to the src and href like so:

	<!-- compiled CSS --><% styles.forEach( function ( file ) { %>
    <link rel="stylesheet" type="text/css" href="/static/<%= file %>" /><% }); %>

    <!-- compiled JavaScript --><% scripts.forEach( function ( file ) { %>
    <script type="text/javascript" src="/static/<%= file %>"></script><% }); %>
    
#### To work stand alone or for development:

`http-server` can help if you dont want to set a backend up for development. To run with http-server:

1. run `npm install http-server - g`
2. make sure you have run the quick start commands
3. after instalation, in the project root run `http-server ./build`
4. navigate to localhost:8080

more info about http-serve can be found [here](https://github.com/nodeapps/http-server)


adopted from [ng-boilerplate](http://joshdmiller.github.io/ng-boilerplate/#/home)