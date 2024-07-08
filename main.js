document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', fetchData);

    async function fetchData() {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            try {
                const endpoint = `https://api.data.gov.in/resource/ea7705e8-feed-440e-86a9-1b51afaa738c?format=json&filters[state]=${encodeURIComponent(query)}`;
                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                updateCharts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data. Please try again.');
            }
        }
    }

    function updateCharts(data) {
        // Example: Assuming data structure is known from API response
        console.log('Received data:', data);
        // Implement logic to update charts or display data
    }
});