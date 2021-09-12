/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styleguide.ts":
/*!***********************!*\
  !*** ./styleguide.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StyleGuideContoller = void 0;
class StyleGuideContoller {
    constructor() {
        this.mainContainer = $("#MainContainer");
        this.headerContainer = $("#HeaderContainer");
        this.navAndPanelContainer = $("#NavAndPanelContainer");
        this.colorMenuItem = $("#ColorMenuItem");
    }
    menuEvents() {
        this.colorMenuItem.on("click", () => {
            console.log("clicked");
        });
    }
    SetResponsiveMainPaddings() {
        $(window).on("resize", () => {
            if ($("body").width() < 768) {
                $(".container-fluid").removeClass("nf-padding-main-top nf-padding-main-left");
            }
            if ($("body").width() > 768) {
                $(".container-fluid").addClass("nf-padding-main-top nf-padding-main-left");
            }
        });
    }
}
exports.StyleGuideContoller = StyleGuideContoller;


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
let sgcInstance = new styleguide_1.StyleGuideContoller();
sgcInstance.SetResponsiveMainPaddings();
sgcInstance.menuEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZWd1aWRlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxNQUFhLG1CQUFtQjtJQUFoQztRQUdJLGtCQUFhLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEMsb0JBQWUsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUN4Qyx5QkFBb0IsR0FBRyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUdsRCxrQkFBYSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBcUJ4QyxDQUFDO0lBbEJHLFVBQVU7UUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFHRCx5QkFBeUI7UUFDckIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDekIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsV0FBVyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDakY7WUFFRCxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEVBQUU7Z0JBQ3pCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFFBQVEsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2FBQzlFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUE3QkQsa0RBNkJDOzs7Ozs7O1VDbkNEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7OztBQ2hCQSxnRkFBbUQ7QUFFbkQsSUFBSSxXQUFXLEdBQUcsSUFBSSxnQ0FBbUIsRUFBRSxDQUFDO0FBRTVDLFdBQVcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO0FBQ3hDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbk1haW4gc3R5bGVndWlkZSBlbnRyeSBwb2ludFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5BdXRob3I6IE5pY2hvbGFzIEZhenpvbGFyaSBcclxuKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHlsZUd1aWRlQ29udG9sbGVyIHtcclxuXHJcbiAgICAvLyBDb250YWluZXJzXHJcbiAgICBtYWluQ29udGFpbmVyID0gJChcIiNNYWluQ29udGFpbmVyXCIpO1xyXG4gICAgaGVhZGVyQ29udGFpbmVyID0gJChcIiNIZWFkZXJDb250YWluZXJcIik7XHJcbiAgICBuYXZBbmRQYW5lbENvbnRhaW5lciA9ICQoXCIjTmF2QW5kUGFuZWxDb250YWluZXJcIik7XHJcblxyXG4gICAgLy8gTWVudSBpdGVtc1xyXG4gICAgY29sb3JNZW51SXRlbSA9ICQoXCIjQ29sb3JNZW51SXRlbVwiKTtcclxuXHJcbiAgICAvLyBIYW5kbGVzIGNsaWNrIHJlZ2lvbnMgYW5kIGNvbnRlbnQgbG9hZGluZyBmcm9tIG1lbnUgaXRlbXNcclxuICAgIG1lbnVFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5jb2xvck1lbnVJdGVtLm9uKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNsaWNrZWRcIilcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlbW92ZXMgcGFkZGluZ3MgZm9yIG1vYmlsZSBkZXZpY2VzXHJcbiAgICBTZXRSZXNwb25zaXZlTWFpblBhZGRpbmdzKCkge1xyXG4gICAgICAgICQod2luZG93KS5vbihcInJlc2l6ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgkKFwiYm9keVwiKS53aWR0aCgpIDwgNzY4KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmNvbnRhaW5lci1mbHVpZFwiKS5yZW1vdmVDbGFzcyhcIm5mLXBhZGRpbmctbWFpbi10b3AgbmYtcGFkZGluZy1tYWluLWxlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoJChcImJvZHlcIikud2lkdGgoKSA+IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5jb250YWluZXItZmx1aWRcIikuYWRkQ2xhc3MoXCJuZi1wYWRkaW5nLW1haW4tdG9wIG5mLXBhZGRpbmctbWFpbi1sZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLyogXHJcbkdsb2JhbCBUeXBlU2NyaXB0IG1vZHVsZSBpbXBvcnRzXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkF1dGhvcjogTmljaG9sYXMgRmF6em9sYXJpIFxyXG4qL1xyXG5cclxuaW1wb3J0IHsgU3R5bGVHdWlkZUNvbnRvbGxlciB9IGZyb20gXCIuL3N0eWxlZ3VpZGVcIjtcclxuXHJcbmxldCBzZ2NJbnN0YW5jZSA9IG5ldyBTdHlsZUd1aWRlQ29udG9sbGVyKCk7XHJcblxyXG5zZ2NJbnN0YW5jZS5TZXRSZXNwb25zaXZlTWFpblBhZGRpbmdzKCk7XHJcbnNnY0luc3RhbmNlLm1lbnVFdmVudHMoKTsiXSwic291cmNlUm9vdCI6IiJ9