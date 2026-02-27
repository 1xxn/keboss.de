document.addEventListener("DOMContentLoaded", () => {
    // Modal Elemente holen
    const impressumModal = document.getElementById('impressumModal');
    const datenschutzModal = document.getElementById('datenschutzModal');
    
    // Buttons holen
    const btnImpressum = document.getElementById('btn-impressum');
    const btnDatenschutz = document.getElementById('btn-datenschutz');
    
    // Alle Schließen-Buttons (die kleinen X)
    const closeButtons = document.querySelectorAll('.close-modal');

    // Event Listener fürs Öffnen
    if (btnImpressum && impressumModal) {
        btnImpressum.addEventListener('click', () => impressumModal.showModal());
    }
    
    if (btnDatenschutz && datenschutzModal) {
        btnDatenschutz.addEventListener('click', () => datenschutzModal.showModal());
    }

    // Event Listener fürs Schließen über das 'X'
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Findet das direkt darüberliegende Modal und schließt es
            const modal = this.closest('dialog');
            if (modal) modal.close();
        });
    });

    // Optionale UX-Verbesserung: Modal schließen, wenn man daneben (auf den Backdrop) klickt
    const modals = [impressumModal, datenschutzModal];
    modals.forEach(modal => {
        if (!modal) return;
        modal.addEventListener('click', (event) => {
            const rect = modal.getBoundingClientRect();
            // Prüft, ob der Klick außerhalb der Modal-Grenzen war
            if (event.clientY < rect.top || event.clientY > rect.bottom ||
                event.clientX < rect.left || event.clientX > rect.right) {
                modal.close();
            }
        });
    });
});
