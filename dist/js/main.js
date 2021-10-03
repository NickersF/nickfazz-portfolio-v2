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
        this.colorMenuItemEl = $("#ColorMenuItem");
        this.typeMenuItemEl = $("#TypeMenuItem");
        this.brandMenuItemEl = $("#BrandMenuItem");
        this.metricsMenuItemEl = $("#MetricsMenuItem");
        this.menuItems = [this.colorMenuItemEl, this.typeMenuItemEl, this.brandMenuItemEl, this.metricsMenuItemEl];
        this.welcomePanel = $("#WelcomePanel");
        this.colorPanel = $("#ColorPanel");
        this.typePanel = $("#TypePanel");
        this.brandPanel = $("#BrandPanel");
        this.metricsPanel = $("#MetricsPanel");
        this.contentPanels = [this.welcomePanel, this.colorPanel, this.typePanel, this.brandPanel, this.metricsPanel];
    }
    init() {
        console.log(this.menuItems);
        this.colorMenuItemEl.data("fornav", "YOOF");
        for (let index = 0; index < this.contentPanels.length; index++) {
            if (this.contentPanels[index].attr("id") !== "WelcomePanel") {
                this.contentPanels[index].addClass("d-none");
            }
        }
    }
    navigationEvents() {
        let self = this;
        this.colorMenuItemEl.on("click", function () {
            console.log($(this));
            console.log($(this).attr("id"));
            console.log(this);
            for (let index = 0; index < self.contentPanels.length; index++) {
                console.log(self.contentPanels[index].attr("id"));
                if (self.contentPanels[index].attr("id") == $(this).attr("id")) {
                    console.log(self.contentPanels[index].attr("id"));
                }
            }
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
sgcInstance.init();
sgcInstance.navigationEvents();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map