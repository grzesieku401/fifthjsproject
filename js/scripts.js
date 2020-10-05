(function(){

    var globalTooltip = null;

    function assignEvents(elms, type, event) {

        for(var i = 0; i < elms.length; i++){
            
            elms[i].addEventListener(type,event,false); 


        };
        
    }

    function createTooltip(text, options) {
        var tooltip = document.createElement("div");

        tooltip.classList.add("tooltip", "hidden");
        tooltip.appendChild(document.createTextNode(text));
        
        document.body.appendChild(tooltip);

        tooltip.style.left = options.x +options.w/2 - tooltip.offsetWidth/2 + "px";
        tooltip.style.top = (options.y - tooltip.offsetHeight - 15) + "px";

        tooltip.classList.remove("hidden");

        document.body.appendChild(tooltip);
        globalTooltip = tooltip;
    }

    function showTooltip(e){    

        var options = {
            w : e.target.offsetWidth,
            x : e.target.offsetLeft,
            y : e.target.offsetTop
        };

        var text =e.target.getAttribute("title");
        createTooltip(text, options);      
        
        e.target.removeAttribute("title")
    }

    function removeTooltip(e) {
        e.target.setAttribute("title",globalTooltip.textContent)
        globalTooltip.parentNode.removeChild(globalTooltip);
    }

    function init(elems) {
        
        assignEvents(elems,"mouseenter",showTooltip);
        assignEvents(elems,"mouseleave",removeTooltip)
    
    }

    window.t00ltip = init;

})()