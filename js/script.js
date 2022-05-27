'use strict'
// spollers
const spollersArray  = document.querySelectorAll('[data-spollers]');
if(spollersArray.length > 0) {
    const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
        return !item.dataset.spollers.split(",")[0];
    });
    // init regular spoller
    if(spollersRegular > 0) {
            initSpollers(spollersRegular);
        }

        // getting media spoller
        const spollersMedia = Array.from(spollersArray).filter(function(item, index, self) {
            return item.dataset.spollers.split(",")[0];
        });
        // init spollers with media request
        if (spollersMedia.length > 0) {
            const breakePointsArray = [];
            spollersMedia.forEach(item => {
                const params = item.dataset.spollers;
                const breakePoint = {};
                const paramsArray = params.split(",");
                breakePoint.value = paramsArray[0];
                breakePoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                breakePoint.item = item;
                breakePointsArray.push(breakePoint);
                console.log(breakePointsArray)
        });

        // getting unique breakepoints
        let mediaQueries = breakePointsArray.map(function (item) {
            return '(' + item.type + '-width: ' + item.value + 'px),' + ',' + item.type;
        });
        mediaQueries = mediaQueries.filter(function (item, index, self) {
            return self.indexOf(item) === index;
        });

        // works with every breakepoints...
        mediaQueries.forEach(breakepoint => {
            const paramsArray = breakepoint.split(",");
            const mediaBreakepoint = paramsArray[1];
            const mediaType = paramsArray[1];
            const matchMedia = window.matchMedia(paramsArray[0]); 

            //object with required condition
            const spollersArray = breakePointsArray.filter(function (item) {
                if (item.value === mediaBreakePoint && item.type === mediaType) {
                    return true;
                }
            });
            // Ocasion(событие)
            matchMedia.addListener(function () {
                initSpollers(spollersArray, matchMedia);
            });
            initSpollers(spollersArray, matchMedia);
        });
    }

    // initializing
    function initSpollers(spollersArray, matchMedia = false) {
        spollersArray.forEach(spollersBlock => {
            if (matchMedia.matches || !matchMedia) {
                spollersBlock.classList.add("_init");
                initSpollerBody(spollersBlock);
                spollersBlock.addEventListener("click", setSpollerActiion);
            }   else {
                spollersBlock.classList.remove('_init');
                initSpollerBody(spollersBlock, false);
                spollersBlock.removeEventListener("click", setSpollerActiion);
            }
        });
    }
}