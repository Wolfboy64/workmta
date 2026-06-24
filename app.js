document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('events');

    fetch('eventek.json')
        .then(valasz => valasz.json())
        .then(eventek => {
            // Először legeneráljuk a táblázat alapvázát egy címmel
            let tablaHTML = `
                <div class="container mt-5">
                    <div class="d-flex justify-content-center">
                        <h1>Aktuális Események</h1>
                    </div>
                    <table class="table table-bordered table-dark mt-3">
                        <thead>
                            <tr>
                                <th scope="col">Esemény neve</th>
                                <th scope="col">Leírás</th>
                                <th scope="col">Dátum</th>
                            </tr>
                        </thead>
                        <tbody id="events-rows">
                            </tbody>
                    </table>
                </div>
            `;
            
            // Berakjuk a vázat az #events divbe
            container.innerHTML = tablaHTML;
            
            // Megkeressük az éppen elkészített tbody-t
            const rowsContainer = document.getElementById('events-rows');

            // Végigmegyünk az eseményeken és hozzáadjuk a sorokat
            eventek.forEach(ev => {
                rowsContainer.innerHTML += `
                    <tr>
                        <td>${ev.nev}</td>
                        <td>${ev.leiras}</td>
                        <td style="font-style: italic; color: #5865f2;">${ev.datum}</td>
                    </tr>
                `;
            });
        })
        .catch(err => {
            console.error("Hiba az események betöltésekor:", err);
            container.innerHTML = '<div class="container text-center text-danger"><p>Nem sikerült betölteni az eseményeket.</p></div>';
        });
});