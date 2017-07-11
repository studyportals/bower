"use strict";

const chai = require('chai');
const bower = require('./../index');
const rimraf = require('@studyportals/product-deploy/lib/rimraf');

const CWD = `./testcases/install/`;

const deleteBowerComponents = function(){
	return rimraf(`${CWD}/bower_components`);
};

before(deleteBowerComponents);

it('It should install bower dependencies', () =>{

	return bower.install({
		cwd: CWD
	});
}).timeout(10000);

after(deleteBowerComponents);