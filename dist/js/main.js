/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styleguide.ts":
/*!***********************!*\
  !*** ./styleguide.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.responsiveChanges = void 0;
function responsiveChanges() {
    $(window).on("resize", () => {
        if ($("body").width() < 768) {
            $(".container-fluid").removeClass("nf-padding-main-top nf-padding-main-left");
        }
        if ($("body").width() > 768) {
            $(".container-fluid").addClass("nf-padding-main-top nf-padding-main-left");
        }
    });
}
exports.responsiveChanges = responsiveChanges;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const styleguide_1 = __webpack_require__(/*! ./styleguide */ "./styleguide.ts");
styleguide_1.responsiveChanges();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZWd1aWRlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxTQUFnQixpQkFBaUI7SUFDN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3hCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUN6QixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxXQUFXLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUNqRjtRQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUN6QixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUMsMENBQTBDLENBQUMsQ0FBQztTQUM5RTtJQUdMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQVpELDhDQVlDOzs7Ozs7O1VDbEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQSxnRkFBaUQ7QUFFakQsOEJBQWlCLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbk1haW4gc3R5bGVndWlkZSBlbnRyeSBwb2ludFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5BdXRob3I6IE5pY2hvbGFzIEZhenpvbGFyaSBcclxuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNwb25zaXZlQ2hhbmdlcygpIHtcclxuICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCQoXCJib2R5XCIpLndpZHRoKCkgPCA3NjgpIHtcclxuICAgICAgICAgICAgJChcIi5jb250YWluZXItZmx1aWRcIikucmVtb3ZlQ2xhc3MoXCJuZi1wYWRkaW5nLW1haW4tdG9wIG5mLXBhZGRpbmctbWFpbi1sZWZ0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoXCJib2R5XCIpLndpZHRoKCkgPiA3NjgpIHtcclxuICAgICAgICAgICAgJChcIi5jb250YWluZXItZmx1aWRcIikuYWRkQ2xhc3MoXCJuZi1wYWRkaW5nLW1haW4tdG9wIG5mLXBhZGRpbmctbWFpbi1sZWZ0XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhib2R5V2lkdGgpO1xyXG4gICAgfSk7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyogXHJcbkdsb2JhbCBUeXBlU2NyaXB0IG1vZHVsZSBpbXBvcnRzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkF1dGhvcjogTmljaG9sYXMgRmF6em9sYXJpIFxyXG4qL1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2l2ZUNoYW5nZXMgfSBmcm9tIFwiLi9zdHlsZWd1aWRlXCI7XHJcblxyXG5yZXNwb25zaXZlQ2hhbmdlcygpOyJdLCJzb3VyY2VSb290IjoiIn0=