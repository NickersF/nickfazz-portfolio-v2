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

    // Content containers
    welcomeContent = $("#WelcomeContent");
    colorContent = $("#ColorContent");
    typeContent = $("#TypeContent");
    brandContent = $("#BrandContent");
    metricsContent = $("#MetricsContent");

    colorFadeWrapper = $("#ColorFadeWrapper");
    typeFadeWrapper = $("#TypeFadeWrapper");
    brandFadeWrapper = $("#BrandFadeWrapper");
    metricsFadeWrapper = $("#MetricsFadeWrapper");

    contentContainers = [this.welcomeContent, this.colorContent, this.typeContent, this.brandContent, this.metricsContent];

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

        this.colorMenuItemEl.on("click", function() {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.colorPanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.colorFadeWrapper.addClass("sg-display-content");
                    self.colorContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.colorPanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");
                }
            }
        });

        this.typeMenuItemEl.on("click", function() {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.typePanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.typeFadeWrapper.addClass("sg-display-content");
                    self.typeContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.typePanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");
                }
            }
        });

        this.brandMenuItemEl.on("click", function() {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.brandPanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.brandFadeWrapper.addClass("sg-display-content");
                    self.brandContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.brandPanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");

                }
            }
        });

        this.metricsMenuItemEl.on("click", function() {
            for (let panel = 0; panel < self.contentPanels.length; panel++) {
                if (self.contentPanels[panel].attr("id") == self.metricsPanel.attr("id")) {
                    self.contentPanels[panel].removeClass("d-none");
                    self.metricsFadeWrapper.addClass("sg-display-content");
                    self.metricsContent.addClass("sg-open-content");
                }
                if (self.contentPanels[panel].attr("id") !== self.metricsPanel.attr("id")) {
                    self.contentPanels[panel].addClass("d-none");
                    self.contentContainers[panel].removeClass("sg-open-content");
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