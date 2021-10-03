/* 
Main styleguide entry point
********************************************
Author: Nicholas Fazzolari 
*/

export class StyleGuideContoller {

    // Main containers
    mainContainerEl = $("#MainContainer");
    headerContainerEl = $("#HeaderContainer");
    navAndPanelContainerEl = $("#NavAndPanelContainer");

    // Menu items
    colorMenuItemEl = $("#ColorMenuItem");
    typeMenuItemEl = $("#TypeMenuItem");
    brandMenuItemEl = $("#BrandMenuItem");
    metricsMenuItemEl = $("#MetricsMenuItem");

    menuItems = [this.colorMenuItemEl, this.typeMenuItemEl, this.brandMenuItemEl, this.metricsMenuItemEl];

    // Content panels
    welcomePanel  = $("#WelcomePanel");
    colorPanel = $("#ColorPanel");
    typePanel = $("#TypePanel");
    brandPanel = $("#BrandPanel");
    metricsPanel = $("#MetricsPanel");

    contentPanels = [this.welcomePanel, this.colorPanel, this.typePanel, this.brandPanel, this.metricsPanel];

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
        this.colorMenuItemEl.on("click", function() {
            console.log($(this));
            console.log($(this).attr("id"));

            console.log(this);
            for (let index = 0; index < self.contentPanels.length; index++) {
                console.log(self.contentPanels[index].attr("id"));

                if (self.contentPanels[index].attr("id") == $(this).attr("id")) {
                    //self.contentPanels[index].addClass("d-none");
                    console.log(self.contentPanels[index].attr("id"));
                }
            }
        });
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