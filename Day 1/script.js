document.addEventListener('DOMContentLoaded', () => {
    const countrySelect = document.getElementById('country');

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => {
            // Extract country names and codes into an array
            const countries = data.map(country => ({
                code: country.cca2, // Two-letter country code
                name: country.name.common // Common name of the country
            }));

            // Sort the countries alphabetically by name
            countries.sort((a, b) => a.name.localeCompare(b.name));

            // Populate the dropdown with sorted countries
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error fetching countries:', error);
        });

        form.addEventListener('submit', (e) => {
            if (password.value !== verifyPassword.value) {
                e.preventDefault();
                errorMessage.style.display = 'block';
            } else {
                errorMessage.style.display = 'none';
            }
        });
});
