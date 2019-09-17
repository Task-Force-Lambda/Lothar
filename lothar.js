//pageActualsInitialize($('[data-actuality="actual"]'));
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
        alert("qqq2");
    }
}