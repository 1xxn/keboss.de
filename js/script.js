document.addEventListener("DOMContentLoaded", () => {
    const impressumModal = document.getElementById('impressumModal');
    const datenschutzModal = document.getElementById('datenschutzModal');
    
    const btnImpressum = document.getElementById('btn-impressum');
    const btnDatenschutz = document.getElementById('btn-datenschutz');
    
    const closeButtons = document.querySelectorAll('.close-modal');

    if (btnImpressum && impressumModal) {
        btnImpressum.addEventListener('click', () => impressumModal.showModal());
    }
    
    if (btnDatenschutz && datenschutzModal) {
        btnDatenschutz.addEventListener('click', () => datenschutzModal.showModal());
    }

    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('dialog');
            if (modal) modal.close();
        });
    });

    const modals = [impressumModal, datenschutzModal];
    modals.forEach(modal => {
        if (!modal) return;
        modal.addEventListener('click', (event) => {
            const rect = modal.getBoundingClientRect();
            if (event.clientY < rect.top || event.clientY > rect.bottom ||
                event.clientX < rect.left || event.clientX > rect.right) {
                modal.close();
            }
        });
    });
});
