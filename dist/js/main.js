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
        this.mainContainerEl = $("#MainContainer");
        this.headerContainerEl = $("#HeaderContainer");
        this.navAndPanelContainerEl = $("#NavAndPanelContainer");
        this.contentPanelEl = $("#ContentPanel");
        this.contentPanelElB = $("#ContentPanelB");
        this.colorMenuItemEl = $("#ColorMenuItem");
        this.typeMenuItemEl = $("#TypeMenuItem");
        this.brandMenuItemEl = $("#BrandMenuItem");
        this.metricsMenuItemEl = $("#MetricsMenuItem");
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZWd1aWRlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxNQUFhLG1CQUFtQjtJQUFoQztRQUdJLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUMsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDcEQsbUJBQWMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEMsb0JBQWUsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUd0QyxvQkFBZSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLG1CQUFjLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3BDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFjOUMsQ0FBQztJQVhHLHlCQUF5QjtRQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUN6QixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxXQUFXLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUNqRjtZQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDekIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDOUU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQTNCRCxrREEyQkM7Ozs7Ozs7VUNqQ0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBLGdGQUFtRDtBQUVuRCxJQUFJLFdBQVcsR0FBRyxJQUFJLGdDQUFtQixFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG5NYWluIHN0eWxlZ3VpZGUgZW50cnkgcG9pbnRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQXV0aG9yOiBOaWNob2xhcyBGYXp6b2xhcmkgXHJcbiovXHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGVHdWlkZUNvbnRvbGxlciB7XHJcblxyXG4gICAgLy8gQ29udGFpbmVyc1xyXG4gICAgbWFpbkNvbnRhaW5lckVsID0gJChcIiNNYWluQ29udGFpbmVyXCIpO1xyXG4gICAgaGVhZGVyQ29udGFpbmVyRWwgPSAkKFwiI0hlYWRlckNvbnRhaW5lclwiKTtcclxuICAgIG5hdkFuZFBhbmVsQ29udGFpbmVyRWwgPSAkKFwiI05hdkFuZFBhbmVsQ29udGFpbmVyXCIpO1xyXG4gICAgY29udGVudFBhbmVsRWwgPSAkKFwiI0NvbnRlbnRQYW5lbFwiKTtcclxuICAgIGNvbnRlbnRQYW5lbEVsQiA9ICQoXCIjQ29udGVudFBhbmVsQlwiKTtcclxuXHJcbiAgICAvLyBNZW51IGl0ZW1zXHJcbiAgICBjb2xvck1lbnVJdGVtRWwgPSAkKFwiI0NvbG9yTWVudUl0ZW1cIik7XHJcbiAgICB0eXBlTWVudUl0ZW1FbCA9ICQoXCIjVHlwZU1lbnVJdGVtXCIpO1xyXG4gICAgYnJhbmRNZW51SXRlbUVsID0gJChcIiNCcmFuZE1lbnVJdGVtXCIpO1xyXG4gICAgbWV0cmljc01lbnVJdGVtRWwgPSAkKFwiI01ldHJpY3NNZW51SXRlbVwiKTtcclxuXHJcbiAgICAvLyBSZW1vdmVzIHBhZGRpbmdzIGZvciBtb2JpbGUgZGV2aWNlc1xyXG4gICAgU2V0UmVzcG9uc2l2ZU1haW5QYWRkaW5ncygpIHtcclxuICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJChcImJvZHlcIikud2lkdGgoKSA8IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5jb250YWluZXItZmx1aWRcIikucmVtb3ZlQ2xhc3MoXCJuZi1wYWRkaW5nLW1haW4tdG9wIG5mLXBhZGRpbmctbWFpbi1sZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCQoXCJib2R5XCIpLndpZHRoKCkgPiA3NjgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY29udGFpbmVyLWZsdWlkXCIpLmFkZENsYXNzKFwibmYtcGFkZGluZy1tYWluLXRvcCBuZi1wYWRkaW5nLW1haW4tbGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qIFxyXG5HbG9iYWwgVHlwZVNjcmlwdCBtb2R1bGUgaW1wb3J0c1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5BdXRob3I6IE5pY2hvbGFzIEZhenpvbGFyaSBcclxuKi9cclxuXHJcbmltcG9ydCB7IFN0eWxlR3VpZGVDb250b2xsZXIgfSBmcm9tIFwiLi9zdHlsZWd1aWRlXCI7XHJcblxyXG5sZXQgc2djSW5zdGFuY2UgPSBuZXcgU3R5bGVHdWlkZUNvbnRvbGxlcigpOyJdLCJzb3VyY2VSb290IjoiIn0=