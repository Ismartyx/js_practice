const tabButtons = document.querySelectorAll('button[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

function htc(event) {
    tabPanels.forEach(function(Panel){
        Panel.hidden = true;
    })

    tabButtons.forEach(function(tab){
        tab.setAttribute('aria-selected', false);
    })

    event.currentTarget.setAttribute('aria-selected', true);
    

    const id = event.currentTarget.id;
    const tabpanel = document.querySelector(`[aria-labelledby="${id}"]`);
    tabpanel.hidden = false;

}

tabButtons.forEach(button => button.addEventListener('click',htc))
