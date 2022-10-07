/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./private/scss/style.scss":
/*!*********************************!*\
  !*** ./private/scss/style.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./private/scss/style.scss?");

/***/ }),

/***/ "./private/js/app.js":
/*!***************************!*\
  !*** ./private/js/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_teamtable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/teamtable */ \"./private/js/content/teamtable.js\");\n/* harmony import */ var _content_teamrandomizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/teamrandomizer */ \"./private/js/content/teamrandomizer.js\");\n\r\n\r\n\r\nwindow.onload = function () {\r\n  _content_teamtable__WEBPACK_IMPORTED_MODULE_0__.init();\r\n  _content_teamrandomizer__WEBPACK_IMPORTED_MODULE_1__.init();\r\n}\r\n\n\n//# sourceURL=webpack:///./private/js/app.js?");

/***/ }),

/***/ "./private/js/content/teamrandomizer.js":
/*!**********************************************!*\
  !*** ./private/js/content/teamrandomizer.js ***!
  \**********************************************/
/***/ ((module) => {

eval("function init() {\r\n  document.querySelectorAll(\".ce-teamrandomizer #randomize\").forEach(function (btn) {\r\n    btn.addEventListener(\"click\", randomizeTeams);\r\n  })\r\n\r\n  document.querySelectorAll(\".ce-teamrandomizer #save\").forEach(function (btn) {\r\n    btn.addEventListener(\"click\", saveTeam);\r\n  })\r\n}\r\n\r\nfunction randomizeTeams() {\r\n  const tables = document.querySelectorAll(\".ce-teamrandomizer .content\");\r\n  loadJson(\"./js/data/members.json\", function (members) {\r\n    tables.forEach(function (wrapper) {\r\n      members.sort(() => Math.random() - 0.5);\r\n      let teamElements = wrapper.getElementsByClassName(\"team\");\r\n\r\n      for (let i = 0; i < teamElements.length; i++) {\r\n        teamElements.item(i).innerHTML = \"<h2>Team \" + (i + 1) + \"</h2>\";\r\n      }\r\n\r\n      let teamJson = [];\r\n\r\n      let currentTeam = 0;\r\n      members.forEach(function (member) {\r\n        if (member.ignored === true) {\r\n          return;\r\n        }\r\n\r\n        let memberElement = document.createElement(\"div\");\r\n        memberElement.innerText = member.name + \" [\" + member.mc_name + \"]\";\r\n\r\n        let memberImgElement = document.createElement(\"img\");\r\n        memberImgElement.src = \"http://cravatar.eu/avatar/\" + member.mc_name + \".png\";\r\n        memberElement.prepend(memberImgElement);\r\n\r\n        teamElements.item(currentTeam).appendChild(memberElement);\r\n\r\n        if (teamJson[currentTeam] === undefined) {\r\n          teamJson[currentTeam] = {};\r\n          teamJson[currentTeam]['name'] = \"Team \" + (currentTeam + 1);\r\n          teamJson[currentTeam][\"members\"] = [];\r\n        }\r\n        teamJson[currentTeam][\"members\"].push(member);\r\n\r\n        currentTeam++;\r\n        if (currentTeam >= teamElements.length) {\r\n          currentTeam = 0;\r\n        }\r\n      })\r\n\r\n      document.querySelectorAll(\".ce-teamrandomizer .json\").forEach(function (el) {\r\n        el.innerHTML = JSON.stringify(teamJson);\r\n      })\r\n    })\r\n  })\r\n}\r\n\r\nfunction saveTeam() {\r\n  const tables = document.querySelectorAll(\".ce-teamrandomizer .json\");\r\n  tables.forEach(function (wrapper) {\r\n    if (!navigator.clipboard) {\r\n      wrapper.focus();\r\n      wrapper.select();\r\n\r\n      try {\r\n        document.execCommand(\"copy\");\r\n      } catch (err) {\r\n      }\r\n\r\n      return;\r\n    }\r\n    navigator.clipboard.writeText(wrapper.innerHTML).then(r => {\r\n    });\r\n  })\r\n}\r\n\r\nfunction loadJson(path, success) {\r\n  const xhttp = new XMLHttpRequest();\r\n  xhttp.onreadystatechange = function () {\r\n    if (this.readyState === 4 && this.status === 200) {\r\n      success(JSON.parse(xhttp.responseText))\r\n    }\r\n  };\r\n  xhttp.open(\"GET\", path);\r\n  xhttp.send();\r\n}\r\n\r\nmodule.exports.init = init\n\n//# sourceURL=webpack:///./private/js/content/teamrandomizer.js?");

/***/ }),

/***/ "./private/js/content/teamtable.js":
/*!*****************************************!*\
  !*** ./private/js/content/teamtable.js ***!
  \*****************************************/
/***/ ((module) => {

eval("function init() {\r\n  const tables = document.querySelectorAll(\".ce-teamtable .content\");\r\n  const teams = loadJson(\"./js/data/currentTeams.json\", function (teams) {\r\n    tables.forEach(function (wrapper) {\r\n      teams.forEach(function (team) {\r\n        let teamElement = document.createElement(\"div\");\r\n        teamElement.className = \"team\";\r\n        wrapper.appendChild(teamElement);\r\n\r\n        let teamTitle = document.createElement(\"h2\");\r\n        teamTitle.innerText = team.name;\r\n        teamElement.appendChild(teamTitle);\r\n\r\n        team.members.forEach(function (member) {\r\n          let memberElement = document.createElement(\"div\");\r\n          memberElement.innerText = member.name + \" [\" + member.mc_name + \"]\";\r\n          teamElement.appendChild(memberElement);\r\n\r\n          if (member.died === true) {\r\n            memberElement.className = \"dead\";\r\n          }\r\n\r\n          let memberImgElement = document.createElement(\"img\");\r\n          memberImgElement.src = \"http://cravatar.eu/avatar/\" + member.mc_name + \".png\";\r\n          memberElement.prepend(memberImgElement);\r\n        })\r\n      })\r\n    })\r\n  })\r\n}\r\n\r\nfunction loadJson(path, success) {\r\n  const xhttp = new XMLHttpRequest();\r\n  xhttp.onreadystatechange = function () {\r\n    if (this.readyState === 4 && this.status === 200) {\r\n      success(JSON.parse(xhttp.responseText))\r\n    }\r\n  };\r\n  xhttp.open(\"GET\", path);\r\n  xhttp.send();\r\n}\r\n\r\nmodule.exports.init = init\n\n//# sourceURL=webpack:///./private/js/content/teamtable.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./private/scss/style.scss");
/******/ 	var __webpack_exports__ = __webpack_require__("./private/js/app.js");
/******/ 	
/******/ })()
;