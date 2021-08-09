/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./color_gen.ts":
/*!**********************!*\
  !*** ./color_gen.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildBackgroundColorElements = exports.generateStepNames = void 0;
function generateStepNames(colorNamesArray, numOfSteps, baseColor) {
    if (numOfSteps < 0 || numOfSteps > 10) {
        return console.log("Invalid color step range provided.");
    }
    for (let index = 0; index < numOfSteps; index++) {
        colorNamesArray.push("fe-" + baseColor + "-0" + index.toString());
    }
}
exports.generateStepNames = generateStepNames;
function buildBackgroundColorElements(colorNamesArray, parentEl) {
    for (let index = 0; index < colorNamesArray.length; index++) {
        let $colorEls = $("<div class='color-demo-box fe-" + colorNamesArray[index] + "-bg'></div>");
        $("#" + parentEl).append($colorEls);
    }
}
exports.buildBackgroundColorElements = buildBackgroundColorElements;


/***/ }),

/***/ "./styleguide.ts":
/*!***********************!*\
  !*** ./styleguide.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildTypeExampleElements = exports.styleGuideSetup = void 0;
const color_gen_1 = __webpack_require__(/*! ./color_gen */ "./color_gen.ts");
const siteColorPalette = [
    "light-green",
    "light-blue",
    "light-yellow",
    "bluegray-dark",
    "bluegrey-medium",
    "bluegrey-light",
    "bluegrey-lightest",
];
const openSansFontWeightValues = [
    "light",
    "regular-italic",
    "regular",
    "bold",
    "extrabold"
];
const poppinsFontWeightValues = [
    "regular",
    "bold",
    "black"
];
function styleGuideSetup() {
    color_gen_1.buildBackgroundColorElements(siteColorPalette, "ColorPaletteWrapper");
    buildTypeExampleElements(openSansFontWeightValues, "TypeExampleWrapper", "Open Sans Sample", "open-sans");
    buildTypeExampleElements(poppinsFontWeightValues, "TypeExampleWrapper", "Poppins Sample", "poppins");
}
exports.styleGuideSetup = styleGuideSetup;
function buildTypeExampleElements(fontWeightValues, parentEl, exText, targetFontFamily) {
    if (targetFontFamily == "open-sans") {
        for (let index = 0; index < fontWeightValues.length; index++) {
            let $typeExEls = $("<div class='" + targetFontFamily + "-" + fontWeightValues[index] + "'></div>");
            $typeExEls.text(exText);
            $("#" + parentEl).append($typeExEls);
        }
    }
    if (targetFontFamily == "poppins") {
        for (let index = 0; index < fontWeightValues.length; index++) {
            let $typeExEls = $("<div class='" + targetFontFamily + "-" + fontWeightValues[index] + "'></div>");
            $typeExEls.text(exText);
            $("#" + parentEl).append($typeExEls);
        }
    }
}
exports.buildTypeExampleElements = buildTypeExampleElements;


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
styleguide_1.styleGuideSetup();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2xvcl9nZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVndWlkZS50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBTUEsU0FBZ0IsaUJBQWlCLENBQUMsZUFBOEIsRUFBRSxVQUFrQixFQUFFLFNBQWlCO0lBRW5HLElBQUksVUFBVSxHQUFHLENBQUMsSUFBSSxVQUFVLEdBQUcsRUFBRSxFQUFFO1FBQ25DLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUM3QyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3JFO0FBQ0wsQ0FBQztBQVRELDhDQVNDO0FBRUQsU0FBZ0IsNEJBQTRCLENBQUMsZUFBOEIsRUFBRSxRQUFnQjtJQUV6RixLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsZUFBZSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUN6RCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsZ0NBQWdDLEdBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztRQUM1RixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUM7QUFORCxvRUFNQzs7Ozs7Ozs7Ozs7Ozs7QUNqQkQsNkVBQTJEO0FBRTNELE1BQU0sZ0JBQWdCLEdBQUc7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCLENBQUM7QUFFRixNQUFNLHdCQUF3QixHQUFHO0lBQzdCLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULE1BQU07SUFDTixXQUFXO0NBQ2Q7QUFFRCxNQUFNLHVCQUF1QixHQUFHO0lBQzVCLFNBQVM7SUFDVCxNQUFNO0lBQ04sT0FBTztDQUNWO0FBRUQsU0FBZ0IsZUFBZTtJQUMzQix3Q0FBNEIsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3RFLHdCQUF3QixDQUFDLHdCQUF3QixFQUFFLG9CQUFvQixFQUFFLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzFHLHdCQUF3QixDQUFDLHVCQUF1QixFQUFFLG9CQUFvQixFQUFFLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ3pHLENBQUM7QUFKRCwwQ0FJQztBQUVELFNBQWdCLHdCQUF3QixDQUFDLGdCQUErQixFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLGdCQUF3QjtJQUVoSSxJQUFJLGdCQUFnQixJQUFJLFdBQVcsRUFBRTtRQUNqQyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzFELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO1lBQ25HLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDeEM7S0FDSjtJQUVELElBQUksZ0JBQWdCLElBQUksU0FBUyxFQUFFO1FBQy9CLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDMUQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsR0FBRyxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7WUFDbkcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN4QixDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4QztLQUNKO0FBRUwsQ0FBQztBQWxCRCw0REFrQkM7Ozs7Ozs7VUN4REQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBLGdGQUErQztBQUUvQyw0QkFBZSxFQUFFLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFxyXG5Db2xvciBlbGVtZW50IGdlbmVyYXRvciBmb3Igc3R5bGUgZ3VpZGVcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQXV0aG9yOiBOaWNob2xhcyBGYXp6b2xhcmkgXHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTdGVwTmFtZXMoY29sb3JOYW1lc0FycmF5OiBBcnJheTxzdHJpbmc+LCBudW1PZlN0ZXBzOiBudW1iZXIsIGJhc2VDb2xvcjogc3RyaW5nKSB7XHJcblxyXG4gICAgaWYgKG51bU9mU3RlcHMgPCAwIHx8IG51bU9mU3RlcHMgPiAxMCkge1xyXG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIkludmFsaWQgY29sb3Igc3RlcCByYW5nZSBwcm92aWRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bU9mU3RlcHM7IGluZGV4KyspIHtcclxuICAgICAgICBjb2xvck5hbWVzQXJyYXkucHVzaChcImZlLVwiICsgYmFzZUNvbG9yICsgXCItMFwiICsgaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZEJhY2tncm91bmRDb2xvckVsZW1lbnRzKGNvbG9yTmFtZXNBcnJheTogQXJyYXk8c3RyaW5nPiwgcGFyZW50RWw6IHN0cmluZykge1xyXG5cclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb2xvck5hbWVzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgbGV0ICRjb2xvckVscyA9ICQoXCI8ZGl2IGNsYXNzPSdjb2xvci1kZW1vLWJveCBmZS1cIiArIGNvbG9yTmFtZXNBcnJheVtpbmRleF0gKyBcIi1iZyc+PC9kaXY+XCIpXHJcbiAgICAgICAgJChcIiNcIiArIHBhcmVudEVsKS5hcHBlbmQoJGNvbG9yRWxzKTtcclxuICAgIH1cclxufSIsIi8qIFxyXG5NYWluIHN0eWxlZ3VpZGUgZW50cnkgcG9pbnRcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQXV0aG9yOiBOaWNob2xhcyBGYXp6b2xhcmkgXHJcbiovXHJcblxyXG5pbXBvcnQgeyBidWlsZEJhY2tncm91bmRDb2xvckVsZW1lbnRzIH0gZnJvbSBcIi4vY29sb3JfZ2VuXCI7XHJcblxyXG5jb25zdCBzaXRlQ29sb3JQYWxldHRlID0gW1xyXG4gICAgXCJsaWdodC1ncmVlblwiLFxyXG4gICAgXCJsaWdodC1ibHVlXCIsXHJcbiAgICBcImxpZ2h0LXllbGxvd1wiLFxyXG4gICAgXCJibHVlZ3JheS1kYXJrXCIsXHJcbiAgICBcImJsdWVncmV5LW1lZGl1bVwiLFxyXG4gICAgXCJibHVlZ3JleS1saWdodFwiLFxyXG4gICAgXCJibHVlZ3JleS1saWdodGVzdFwiLFxyXG5dO1xyXG5cclxuY29uc3Qgb3BlblNhbnNGb250V2VpZ2h0VmFsdWVzID0gW1xyXG4gICAgXCJsaWdodFwiLFxyXG4gICAgXCJyZWd1bGFyLWl0YWxpY1wiLFxyXG4gICAgXCJyZWd1bGFyXCIsXHJcbiAgICBcImJvbGRcIixcclxuICAgIFwiZXh0cmFib2xkXCJcclxuXVxyXG5cclxuY29uc3QgcG9wcGluc0ZvbnRXZWlnaHRWYWx1ZXMgPSBbXHJcbiAgICBcInJlZ3VsYXJcIixcclxuICAgIFwiYm9sZFwiLFxyXG4gICAgXCJibGFja1wiXHJcbl1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHlsZUd1aWRlU2V0dXAoKSB7XHJcbiAgICBidWlsZEJhY2tncm91bmRDb2xvckVsZW1lbnRzKHNpdGVDb2xvclBhbGV0dGUsIFwiQ29sb3JQYWxldHRlV3JhcHBlclwiKTtcclxuICAgIGJ1aWxkVHlwZUV4YW1wbGVFbGVtZW50cyhvcGVuU2Fuc0ZvbnRXZWlnaHRWYWx1ZXMsIFwiVHlwZUV4YW1wbGVXcmFwcGVyXCIsIFwiT3BlbiBTYW5zIFNhbXBsZVwiLCBcIm9wZW4tc2Fuc1wiKTtcclxuICAgIGJ1aWxkVHlwZUV4YW1wbGVFbGVtZW50cyhwb3BwaW5zRm9udFdlaWdodFZhbHVlcywgXCJUeXBlRXhhbXBsZVdyYXBwZXJcIiwgXCJQb3BwaW5zIFNhbXBsZVwiLCBcInBvcHBpbnNcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidWlsZFR5cGVFeGFtcGxlRWxlbWVudHMoZm9udFdlaWdodFZhbHVlczogQXJyYXk8c3RyaW5nPiwgcGFyZW50RWw6IHN0cmluZywgZXhUZXh0OiBzdHJpbmcsIHRhcmdldEZvbnRGYW1pbHk6IHN0cmluZykge1xyXG5cclxuICAgIGlmICh0YXJnZXRGb250RmFtaWx5ID09IFwib3Blbi1zYW5zXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9udFdlaWdodFZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0ICR0eXBlRXhFbHMgPSAkKFwiPGRpdiBjbGFzcz0nXCIgKyB0YXJnZXRGb250RmFtaWx5ICsgXCItXCIgKyBmb250V2VpZ2h0VmFsdWVzW2luZGV4XSArIFwiJz48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgICR0eXBlRXhFbHMudGV4dChleFRleHQpO1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgcGFyZW50RWwpLmFwcGVuZCgkdHlwZUV4RWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldEZvbnRGYW1pbHkgPT0gXCJwb3BwaW5zXCIpIHtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9udFdlaWdodFZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0ICR0eXBlRXhFbHMgPSAkKFwiPGRpdiBjbGFzcz0nXCIgKyB0YXJnZXRGb250RmFtaWx5ICsgXCItXCIgKyBmb250V2VpZ2h0VmFsdWVzW2luZGV4XSArIFwiJz48L2Rpdj5cIik7XHJcbiAgICAgICAgICAgICR0eXBlRXhFbHMudGV4dChleFRleHQpO1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgcGFyZW50RWwpLmFwcGVuZCgkdHlwZUV4RWxzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvKiBcclxuR2xvYmFsIFR5cGVTY3JpcHQgbW9kdWxlIGltcG9ydHNcclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQXV0aG9yOiBOaWNob2xhcyBGYXp6b2xhcmkgXHJcbiovXHJcblxyXG5pbXBvcnQgeyBzdHlsZUd1aWRlU2V0dXAgfSBmcm9tIFwiLi9zdHlsZWd1aWRlXCI7XHJcblxyXG5zdHlsZUd1aWRlU2V0dXAoKTsiXSwic291cmNlUm9vdCI6IiJ9