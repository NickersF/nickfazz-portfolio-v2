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
    SetMainRowHeight() {
        let mainRowSiblings = $("main").siblings();
        console.log(mainRowSiblings);
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
sgcInstance.SetMainRowHeight();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZWd1aWRlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxNQUFhLG1CQUFtQjtJQUc1QixnQkFBZ0I7UUFDWixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBR0QseUJBQXlCO1FBQ3JCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN4QixJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLEVBQUU7Z0JBQ3pCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFdBQVcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2FBQ2pGO1lBRUQsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUN6QixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUM5RTtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBcEJELGtEQW9CQzs7Ozs7OztVQzFCRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNoQkEsZ0ZBQW1EO0FBRW5ELElBQUksV0FBVyxHQUFHLElBQUksZ0NBQW1CLEVBQUUsQ0FBQztBQUU1QyxXQUFXLENBQUMseUJBQXlCLEVBQUUsQ0FBQztBQUN4QyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogXHJcbk1haW4gc3R5bGVndWlkZSBlbnRyeSBwb2ludFxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5BdXRob3I6IE5pY2hvbGFzIEZhenpvbGFyaSBcclxuKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBTdHlsZUd1aWRlQ29udG9sbGVyIHtcclxuXHJcbiAgICAvLyBTZXQgbWFpbiByb3cgaGVpZ2h0XHJcbiAgICBTZXRNYWluUm93SGVpZ2h0KCkge1xyXG4gICAgICAgIGxldCBtYWluUm93U2libGluZ3MgPSAkKFwibWFpblwiKS5zaWJsaW5ncygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1haW5Sb3dTaWJsaW5ncyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVtb3ZlcyBwYWRkaW5ncyBmb3IgbW9iaWxlIGRldmljZXNcclxuICAgIFNldFJlc3BvbnNpdmVNYWluUGFkZGluZ3MoKSB7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKFwicmVzaXplXCIsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCQoXCJib2R5XCIpLndpZHRoKCkgPCA3NjgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY29udGFpbmVyLWZsdWlkXCIpLnJlbW92ZUNsYXNzKFwibmYtcGFkZGluZy1tYWluLXRvcCBuZi1wYWRkaW5nLW1haW4tbGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICgkKFwiYm9keVwiKS53aWR0aCgpID4gNzY4KSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLmNvbnRhaW5lci1mbHVpZFwiKS5hZGRDbGFzcyhcIm5mLXBhZGRpbmctbWFpbi10b3AgbmYtcGFkZGluZy1tYWluLWxlZnRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvKiBcclxuR2xvYmFsIFR5cGVTY3JpcHQgbW9kdWxlIGltcG9ydHNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQXV0aG9yOiBOaWNob2xhcyBGYXp6b2xhcmkgXHJcbiovXHJcblxyXG5pbXBvcnQgeyBTdHlsZUd1aWRlQ29udG9sbGVyIH0gZnJvbSBcIi4vc3R5bGVndWlkZVwiO1xyXG5cclxubGV0IHNnY0luc3RhbmNlID0gbmV3IFN0eWxlR3VpZGVDb250b2xsZXIoKTtcclxuXHJcbnNnY0luc3RhbmNlLlNldFJlc3BvbnNpdmVNYWluUGFkZGluZ3MoKTtcclxuc2djSW5zdGFuY2UuU2V0TWFpblJvd0hlaWdodCgpOyJdLCJzb3VyY2VSb290IjoiIn0=