function increment(id) {
    var input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
    updateSubtotal(id);
}

function decrement(id) {
    var input = document.getElementById(id);
    if (input.value > 1) {
        input.value = parseInt(input.value) - 1;
        updateSubtotal(id);
    }
}

function updateSubtotal(inputId) {
    var input = document.getElementById(inputId);
    var price = parseInt(input.getAttribute('data-price'));
    var subtotalId = 'subtotal-' + inputId.split('-')[2];
    var subtotal = document.getElementById(subtotalId);
    var newSubtotal = parseInt(input.value) * price;
    subtotal.setAttribute('data-subtotal', newSubtotal);
    subtotal.textContent = '$' + newSubtotal.toLocaleString();
    updateTotal();
}

function updateTotal() {
    var subtotals = document.querySelectorAll('[id^="subtotal-"]');
    var total = 0;
    subtotals.forEach(function(subtotal) {
        total += parseInt(subtotal.getAttribute('data-subtotal'));
    });
    document.getElementById('total').textContent = '$' + total.toLocaleString();
}

function showSearchResults() {
    var query = document.getElementById('inp1').value;
    var resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Limpia los resultados anteriores

    if (query.length > 0) {
        // Simula resultados de búsqueda (puedes reemplazar esto con una llamada a tu API de búsqueda)
        var results = [
            'Resultado 1 para ' + query,
            'Resultado 2 para ' + query,
            'Resultado 3 para ' + query
        ];

        results.forEach(function(result) {
            var p = document.createElement('p');
            p.textContent = result;
            p.onclick = function() {
                document.getElementById('inp1').value = result;
                resultsContainer.innerHTML = '';
            };
            resultsContainer.appendChild(p);
        });
    }
}