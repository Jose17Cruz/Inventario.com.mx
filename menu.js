// Carga el menú y gestiona la navegación
fetch('components/menu.html')
    .then(res => res.text())
    .then(html => {
        document.getElementById('menu-container').innerHTML = html;
    });

function loadSection(section) {
    fetch(`components/${section}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(err => {
            document.getElementById('content').innerHTML = '<div class="error-msg">No se pudo cargar la sección. Intenta de nuevo.</div>';
            console.error('Error al cargar sección:', err);
        });
}
