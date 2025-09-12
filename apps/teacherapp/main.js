document.addEventListener('DOMContentLoaded', () => {
    fetchCities()
    document.getElementById('teacherForm').addEventListener('submit', handleFormSubmit)
})

const fetchCities = async () => {
    try {
        // const response = await axios.get('https://api.aueb.gr/cities')
        const response = await axios.get('./cities.json')
        const cities = response.data

        document.getElementById('city').innerHTML = cities
                                                        .sort((a, b) => a.name.localeCompare(b.name, "el-GR"))
                                                        .map(city => `<option value="${city.id}">${city.name}</option>`)
                                                        .join('')
    } catch (error) {
        console.error('Error fetching cities')
    }
}

const handleFormSubmit = async (event) => {
    event.preventDefault()

    const payload = {
        firstname: document.getElementById('firstname').value.trim(),
        lastname: document.getElementById('lastname').value.trim(),
        vat: document.getElementById('vat').value.trim(),
        cityId: document.getElementById('city').value.trim()
    }

    try {
        // const response = await axios.post('https://api-aueb.gr', payload)
        alert('Teacher data submitted: ' + JSON.stringify(payload))
    } catch (error) {
        console.error('Error in submitting the form')
    }
}