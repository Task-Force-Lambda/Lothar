//pageActualsInitialize($('[data-actuality="actual"]'));

import css from './lothars-edge.css';

export default class Lothar{
    async chartLoaded(placeholder, actual) {
        $(actual).removeClass('d-none');
        //$(placeholder).addClass('d-none');
        $(placeholder).remove();
    
    
        //$(placeholder).addClass('successfully-saved');
        
    }
    async pagePlaceholdersInitialize(placeholders) {
        for (var i = 0; i < placeholders.length; i++) {
            $(placeholders[i]).addClass('d-none');
        }
    }

    test(){
        alert("Ready to do some ghostin' ! ");
        document.getElementsByTagName("body")[0].innerHTML="<h1 class='lotharsEdgeTester'>Lothar's Edge</h1>";
    }
}