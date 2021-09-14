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
        this.colorMenuItemEl = $("#ColorMenuItem");
        this.typeMenuItemEl = $("#TypeMenuItem");
        this.brandMenuItemEl = $("#BrandMenuItem");
        this.metricsMenuItemEl = $("#MetricsMenuItem");
        this.isContentPanelOpen = false;
    }
    loadMenuEvents() {
        this.toggleContentPanelEvent(this.colorMenuItemEl, this.contentPanelEl, this.isContentPanelOpen);
    }
    toggleContentPanelEvent(menuItem, contentPanel, isContentPanelOpen) {
        menuItem.on("click", () => {
            if (isContentPanelOpen == false) {
                contentPanel.addClass("sg-open-content");
                contentPanel.removeClass("sg-close-content");
                contentPanel.on("animationend", () => {
                    isContentPanelOpen = true;
                    console.log(isContentPanelOpen);
                });
            }
            if (isContentPanelOpen == true) {
                contentPanel.addClass("sg-close-content");
                contentPanel.removeClass("sg-open-content");
                contentPanel.on("animationend", () => {
                    isContentPanelOpen = false;
                    console.log(isContentPanelOpen);
                });
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
sgcInstance.SetResponsiveMainPaddings();
sgcInstance.loadMenuEvents();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZWd1aWRlLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNQSxNQUFhLG1CQUFtQjtJQUFoQztRQUdJLG9CQUFlLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUMsMkJBQXNCLEdBQUcsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDcEQsbUJBQWMsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFHcEMsb0JBQWUsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN0QyxtQkFBYyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNwQyxvQkFBZSxHQUFHLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RDLHNCQUFpQixHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTFDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztJQTBFL0IsQ0FBQztJQXZFRyxjQUFjO1FBQ1YsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBR0QsdUJBQXVCLENBQUMsUUFBNkIsRUFBRSxZQUFpQyxFQUFFLGtCQUEyQjtRQUVqSCxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFFdEIsSUFBSSxrQkFBa0IsSUFBSSxLQUFLLEVBQUU7Z0JBQzdCLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDekMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUU3QyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7b0JBQ2pDLGtCQUFrQixHQUFHLElBQUksQ0FBQztvQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsQ0FBQzthQUNOO1lBRUQsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLEVBQUU7Z0JBQzVCLFlBQVksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDMUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUU1QyxZQUFZLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7b0JBQ2pDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsQ0FBQzthQUNOO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOEJELHlCQUF5QjtRQUNyQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7WUFDeEIsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUN6QixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxXQUFXLENBQUMsMENBQTBDLENBQUMsQ0FBQzthQUNqRjtZQUVELElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtnQkFDekIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDOUU7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQXhGRCxrREF3RkM7Ozs7Ozs7VUM5RkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBLGdGQUFtRDtBQUVuRCxJQUFJLFdBQVcsR0FBRyxJQUFJLGdDQUFtQixFQUFFLENBQUM7QUFFNUMsV0FBVyxDQUFDLHlCQUF5QixFQUFFLENBQUM7QUFDeEMsV0FBVyxDQUFDLGNBQWMsRUFBRSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBcclxuTWFpbiBzdHlsZWd1aWRlIGVudHJ5IHBvaW50XHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkF1dGhvcjogTmljaG9sYXMgRmF6em9sYXJpIFxyXG4qL1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0eWxlR3VpZGVDb250b2xsZXIge1xyXG5cclxuICAgIC8vIENvbnRhaW5lcnNcclxuICAgIG1haW5Db250YWluZXJFbCA9ICQoXCIjTWFpbkNvbnRhaW5lclwiKTtcclxuICAgIGhlYWRlckNvbnRhaW5lckVsID0gJChcIiNIZWFkZXJDb250YWluZXJcIik7XHJcbiAgICBuYXZBbmRQYW5lbENvbnRhaW5lckVsID0gJChcIiNOYXZBbmRQYW5lbENvbnRhaW5lclwiKTtcclxuICAgIGNvbnRlbnRQYW5lbEVsID0gJChcIiNDb250ZW50UGFuZWxcIik7XHJcblxyXG4gICAgLy8gTWVudSBpdGVtc1xyXG4gICAgY29sb3JNZW51SXRlbUVsID0gJChcIiNDb2xvck1lbnVJdGVtXCIpO1xyXG4gICAgdHlwZU1lbnVJdGVtRWwgPSAkKFwiI1R5cGVNZW51SXRlbVwiKTtcclxuICAgIGJyYW5kTWVudUl0ZW1FbCA9ICQoXCIjQnJhbmRNZW51SXRlbVwiKTtcclxuICAgIG1ldHJpY3NNZW51SXRlbUVsID0gJChcIiNNZXRyaWNzTWVudUl0ZW1cIik7XHJcblxyXG4gICAgaXNDb250ZW50UGFuZWxPcGVuID0gZmFsc2U7XHJcbiAgICBcclxuICAgIC8vIFVzZSB0aGlzIG9uIHRoZSBpbnN0YW5jZSB0byBiaW5kIHRoZSBldmVudHNcclxuICAgIGxvYWRNZW51RXZlbnRzKCkge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29udGVudFBhbmVsRXZlbnQodGhpcy5jb2xvck1lbnVJdGVtRWwsIHRoaXMuY29udGVudFBhbmVsRWwsIHRoaXMuaXNDb250ZW50UGFuZWxPcGVuKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb250cm9scyBhbmltYXRpb25zXHJcbiAgICB0b2dnbGVDb250ZW50UGFuZWxFdmVudChtZW51SXRlbTogSlF1ZXJ5PEhUTUxFbGVtZW50PiwgY29udGVudFBhbmVsOiBKUXVlcnk8SFRNTEVsZW1lbnQ+LCBpc0NvbnRlbnRQYW5lbE9wZW46IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgbWVudUl0ZW0ub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNDb250ZW50UGFuZWxPcGVuID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50UGFuZWwuYWRkQ2xhc3MoXCJzZy1vcGVuLWNvbnRlbnRcIik7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50UGFuZWwucmVtb3ZlQ2xhc3MoXCJzZy1jbG9zZS1jb250ZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYW5lbC5vbihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNDb250ZW50UGFuZWxPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpc0NvbnRlbnRQYW5lbE9wZW4pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc0NvbnRlbnRQYW5lbE9wZW4gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGVudFBhbmVsLmFkZENsYXNzKFwic2ctY2xvc2UtY29udGVudFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRQYW5lbC5yZW1vdmVDbGFzcyhcInNnLW9wZW4tY29udGVudFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZW50UGFuZWwub24oXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzQ29udGVudFBhbmVsT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlzQ29udGVudFBhbmVsT3Blbik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB0b2dnbGVDb250ZW50UGFuZWxFdmVudCgpIHtcclxuICAgIC8vICAgICBsZXQgYW5pbUNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5jb2xvck1lbnVJdGVtRWwub24oXCJjbGlja1wiLCAoKSA9PiB7XHJcblxyXG4gICAgLy8gICAgICAgICBpZiAoYW5pbUNvbXBsZXRlID09IGZhbHNlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQYW5lbEVsLmFkZENsYXNzKFwic2ctb3Blbi1jb250ZW50XCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jb250ZW50UGFuZWxFbC5yZW1vdmVDbGFzcyhcInNnLWNsb3NlLWNvbnRlbnRcIik7XHJcblxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jb250ZW50UGFuZWxFbC5vbihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYW5pbUNvbXBsZXRlID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbmltQ29tcGxldGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChhbmltQ29tcGxldGUgPT0gdHJ1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jb250ZW50UGFuZWxFbC5hZGRDbGFzcyhcInNnLWNsb3NlLWNvbnRlbnRcIik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQYW5lbEVsLnJlbW92ZUNsYXNzKFwic2ctb3Blbi1jb250ZW50XCIpO1xyXG5cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY29udGVudFBhbmVsRWwub24oXCJhbmltYXRpb25lbmRcIiwgKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFuaW1Db21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFuaW1Db21wbGV0ZSk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBSZW1vdmVzIHBhZGRpbmdzIGZvciBtb2JpbGUgZGV2aWNlc1xyXG4gICAgU2V0UmVzcG9uc2l2ZU1haW5QYWRkaW5ncygpIHtcclxuICAgICAgICAkKHdpbmRvdykub24oXCJyZXNpemVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoJChcImJvZHlcIikud2lkdGgoKSA8IDc2OCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5jb250YWluZXItZmx1aWRcIikucmVtb3ZlQ2xhc3MoXCJuZi1wYWRkaW5nLW1haW4tdG9wIG5mLXBhZGRpbmctbWFpbi1sZWZ0XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKCQoXCJib2R5XCIpLndpZHRoKCkgPiA3NjgpIHtcclxuICAgICAgICAgICAgICAgICQoXCIuY29udGFpbmVyLWZsdWlkXCIpLmFkZENsYXNzKFwibmYtcGFkZGluZy1tYWluLXRvcCBuZi1wYWRkaW5nLW1haW4tbGVmdFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8qIFxyXG5HbG9iYWwgVHlwZVNjcmlwdCBtb2R1bGUgaW1wb3J0c1xyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5BdXRob3I6IE5pY2hvbGFzIEZhenpvbGFyaSBcclxuKi9cclxuXHJcbmltcG9ydCB7IFN0eWxlR3VpZGVDb250b2xsZXIgfSBmcm9tIFwiLi9zdHlsZWd1aWRlXCI7XHJcblxyXG5sZXQgc2djSW5zdGFuY2UgPSBuZXcgU3R5bGVHdWlkZUNvbnRvbGxlcigpO1xyXG5cclxuc2djSW5zdGFuY2UuU2V0UmVzcG9uc2l2ZU1haW5QYWRkaW5ncygpO1xyXG5zZ2NJbnN0YW5jZS5sb2FkTWVudUV2ZW50cygpOyJdLCJzb3VyY2VSb290IjoiIn0=