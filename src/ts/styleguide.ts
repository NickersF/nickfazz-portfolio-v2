/* 
Main styleguide entry point
********************************************
Author: Nicholas Fazzolari 
*/

export class StyleGuideContoller {

    // Containers
    mainContainer = $("#MainContainer");
    headerContainer = $("#HeaderContainer");
    navAndPanelContainer = $("#NavAndPanelContainer");

    // Menu items
    colorMenuItem = $("#ColorMenuItem");

    // Handles click regions and content loading from menu items
    menuEvents() {
        this.colorMenuItem.on("click", () => {
            console.log("clicked")
        })
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