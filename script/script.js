fetch('https://covid19.mathdro.id/api')
    .then(res => res.json())
    .then(data => {
        let worldContainer = document.querySelector('.cards')
        let worldData = "";
        worldData += showData(data);
        worldContainer.innerHTML = worldData;
    });


const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function () {
    const searchField = document.querySelector('.search-field');
    fetch('https://covid19.mathdro.id/api/countries/' + searchField.value)
        .then(res => {
            if (!res.ok) {
                alert("Can't find spesific country")
            }
            return res.json()
        })
        .then(data => {

            let cards = '';
            cards += showData(data);
            const dataContainer = document.querySelector('.cards');
            dataContainer.innerHTML = cards;
        })

});



function showData(data) {
    return `<ul>
                <li>
                    <div class="card blue">
                        <h3>cases</h3>
                        <h4>${data.confirmed.value}</h4>
                    </div>
                </li>
                <li>
                    <div class="card green">
                        <h3>recovered</h3>
                        <h4>${data.recovered.value}</h4>
                    </div>
                </li>
                <li>
                    <div class="card red">
                        <h3>deaths</h3>
                        <h4>${data.deaths.value}</h4>
                    </div>
                </li>
            </ul>`
}