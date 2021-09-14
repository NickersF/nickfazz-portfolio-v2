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

    // Menu items
    colorMenuItemEl = $("#ColorMenuItem");
    typeMenuItemEl = $("#TypeMenuItem");
    brandMenuItemEl = $("#BrandMenuItem");
    metricsMenuItemEl = $("#MetricsMenuItem");

    isContentPanelOpen = false;
    
    // Use this on the instance to bind the events
    loadMenuEvents() {
        this.toggleContentPanelEvent(this.colorMenuItemEl, this.contentPanelEl, this.isContentPanelOpen);
    }

    // Controls animations
    toggleContentPanelEvent(menuItem: JQuery<HTMLElement>, contentPanel: JQuery<HTMLElement>, isContentPanelOpen: boolean) {

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

    // toggleContentPanelEvent() {
    //     let animComplete = false;
    //     this.colorMenuItemEl.on("click", () => {

    //         if (animComplete == false) {
    //             this.contentPanelEl.addClass("sg-open-content");
    //             this.contentPanelEl.removeClass("sg-close-content");

    //             this.contentPanelEl.on("animationend", () => {
    //                 animComplete = true;
    //                 console.log(animComplete);
    //             });
    //         }

    //         if (animComplete == true) {
    //             this.contentPanelEl.addClass("sg-close-content");
    //             this.contentPanelEl.removeClass("sg-open-content");

    //             this.contentPanelEl.on("animationend", () => {
    //                 animComplete = false;
    //                 console.log(animComplete);
    //             });
    //         }

    //     });
    // }

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