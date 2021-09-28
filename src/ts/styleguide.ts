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