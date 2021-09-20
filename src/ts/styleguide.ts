/* 
Main styleguide entry point
********************************************
Author: Nicholas Fazzolari 
*/

export class StyleGuideContoller {

    // Containers
    mainContainerEl = $("#MainContainer");
    headerContainerEl = $("#HeaderContainer");
    navAndPanelContainerEl = $("#NavAndPanelContainer");
    contentPanelEl = $("#ContentPanel");
    contentPanelElB = $("#ContentPanelB");

    // Menu items
    colorMenuItemEl = $("#ColorMenuItem");
    typeMenuItemEl = $("#TypeMenuItem");
    brandMenuItemEl = $("#BrandMenuItem");
    metricsMenuItemEl = $("#MetricsMenuItem");

    isContentPanelOpen = false;

    toggleContentPanel() {
        let self = this;
        this.colorMenuItemEl.on("click", function() {
            self.setContentPanelVisibility(self);
        });

        this.typeMenuItemEl.on("click", function() {
            self.setContentPanelVisibility(self);
        });

        this.brandMenuItemEl.on("click", function() {
            self.setContentPanelVisibility(self);
        });

        this.metricsMenuItemEl.on("click", function() {
            self.setContentPanelVisibility(self);
        });
    }

    setContentPanelVisibility(self) {
        if (self.isContentPanelOpen == false) {
            self.contentPanelEl.addClass("sg-open-content");
            self.contentPanelEl.removeClass("sg-close-content d-none");

            self.contentPanelEl.on("animationend", () => {
                self.isContentPanelOpen = true;
                self.contentPanelElB.addClass("d-none");
                self.contentPanelEl.removeClass("d-none").addClass("sg-open-content");
            });
            
        }

        if (self.isContentPanelOpen == true) {
            self.contentPanelEl.addClass("sg-close-content");
            self.contentPanelEl.removeClass("sg-open-content");

            self.contentPanelEl.on("animationend", () => {
                self.isContentPanelOpen = false;
                console.log("animation ended");
                self.contentPanelEl.addClass("d-none").removeClass("sg-close-content sg-open-content");
                self.contentPanelElB.removeClass("d-none").addClass("sg-open-content");
            });
        }
    }

    // Removes paddings for mobile devices
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