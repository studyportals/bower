# @studyportals/bower@v1.0.1-0

<a href="https://www.npmjs.com/package/@studyportals/bower" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/v/@studyportals/bower.svg?style=flat" alt="NPM version" /></a>
<a href="https://www.npmjs.com/package/@studyportals/bower" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/l/@studyportals/bower.svg?style=flat" alt="NPM license" /></a>
<a href="https://www.npmjs.com/package/@studyportals/bower" title="View this project on NPM" target="_blank"><img src="https://img.shields.io/npm/dm/@studyportals/bower.svg?style=flat" alt="NPM downloads" /></a>
<a href="https://david-dm.org/studyportals/bower" title="View this project on David" target="_blank"><img src="https://img.shields.io/david/studyportals/bower.svg?style=flat" alt="Dependencies" /></a>
<a href="https://david-dm.org/studyportals/bower" title="View this project on David" target="_blank"><img src="https://img.shields.io/david/dev/studyportals/bower.svg?style=flat" alt="Development Dependencies" /></a>

Handle bower dependencies

## Modules

<dl>
<dt><a href="#module_@studyportals/bower">@studyportals/bower</a></dt>
<dd></dd>
<dt><a href="#module_lib/bower">lib/bower</a></dt>
<dd></dd>
</dl>

<a name="module_@studyportals/bower"></a>

## @studyportals/bower
<a name="module_@studyportals/bower.install"></a>

### @studyportals/bower.install
**Kind**: static constant of [<code>@studyportals/bower</code>](#module_@studyportals/bower)  
**See**: [lib/install](#module_lib/install)  
<a name="module_lib/bower"></a>

## lib/bower
<a name="module_lib/bower.install"></a>

### lib/bower.install([opts]) ⇒ <code>Promise</code>
Bower dependencies will be installed only if a bower.json exists.

The installation will complete, without applying any changes, when no
`bower.json` file is found.

**Kind**: static method of [<code>lib/bower</code>](#module_lib/bower)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [opts] | <code>Object</code> |  |  |
| [opts.cwd] | <code>string</code> | <code>&quot;process.cwd()&quot;</code> | Directory in which to execute bower install. |


_README.md generated at: Tue Jul 11 2017 12:56:06 GMT+0800 (China Standard Time)_