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
        this.welcomeContent = $("#WelcomeContent");
        this.colorContent = $("#ColorContent");
        this.typeContent = $("#TypeContent");
        this.brandContent = $("#BrandContent");
        this.metricsContent = $("#MetricsContent");
        this.contentContainers = [this.welcomeContent, this.colorContent, this.typeContent, this.brandContent, this.metricsContent];
    }
    init() {
        for (let panel = 0; panel < this.contentPanels.length; panel++) {
            if (this.contentPanels[panel].attr("id") == "WelcomePanel") {
                this.contentPanels[panel].attr("data-active-panel", "true");
            }
            if (this.contentPanels[panel].attr("id") !== "WelcomePanel") {
                this.contentPanels[panel].attr("data-active-panel", "false");
                this.contentPanels[panel].addClass("d-none");
            }
        }
    }
    navigationEvents() {
        let self = this;
        this.colorMenuItemEl.on("click", function () {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.colorPanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.colorContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.colorPanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");
                }
            }
        });
        this.typeMenuItemEl.on("click", function () {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.typePanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.typeContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.typePanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");
                }
            }
        });
        this.brandMenuItemEl.on("click", function () {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.brandPanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.brandContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.brandPanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");
                }
            }
        });
        this.metricsMenuItemEl.on("click", function () {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.metricsPanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.metricsContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.metricsPanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");
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