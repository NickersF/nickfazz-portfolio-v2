declare var STYLEGUIDE_MAIN: Boolean;

export default class StyleguideController {

    private static privInstance: StyleguideController;

    static getInstance() {
        if (!this.privInstance) {
            this.privInstance = new StyleguideController;
        }

        return this.privInstance;
    }

    mainEvents() {
        console.log("SupportTicketController module loaded.");
        
    }
}

$(document).ready(() => {
    try {
        if (STYLEGUIDE_MAIN) {
            StyleguideController.getInstance().mainEvents();
        }
    } catch (err) {

    }
});