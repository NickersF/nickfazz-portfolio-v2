/* 
Main styleguide entry point
********************************************
Author: Nicholas Fazzolari 
*/

export function responsiveChanges() {
    $(window).on("resize", () => {
        if ($("body").width() < 768) {
            $(".container-fluid").removeClass("nf-padding-main-top nf-padding-main-left");
        }

        if ($("body").width() > 768) {
            $(".container-fluid").addClass("nf-padding-main-top nf-padding-main-left");
        }

        //console.log(bodyWidth);
    });
}