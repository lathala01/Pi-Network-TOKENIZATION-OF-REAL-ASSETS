// frontend/script.js
document.getElementById('tokenize-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const asset = document.getElementById('asset').value;
    const quantity = document.getElementById('quantity').value;

    const response = await fetch('/tokenize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ asset, quantity })
    });

    const result = await response.text();
    document.getElementById('result').innerText = result;
});
