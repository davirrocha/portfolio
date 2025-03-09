let list = document.querySelector('.list-projects')


fetch('./data.json')
    .then(response => response.json())
    .then(options => {
        let myList = '';

        options.forEach(item => {
            myList += `
                <li>
                    <p>${item.name}</p>
                    <img src="${item.image}" alt="">
                    <a href="${item.link}" target="_blank"> 
                        <i class="fa-regular fa-arrow-up-right-from-square "></i> Visualizar
                    </a>
                    <div class="tech">
            `;

            // Verificando cada tecnologia antes de adicioná-la
            if (item.technologies && item.technologies[0]) {
                myList += `<p id="html">${item.technologies[0]}</p>`;
            }
            if (item.technologies && item.technologies[1]) {
                myList += `<p id="css">${item.technologies[1]}</p>`;
            }
            if (item.technologies && item.technologies[2]) {
                myList += `<p id="js">${item.technologies[2]}</p>`;
            }
            if (item.technologies && item.technologies[3]) {
                myList += `<p id="react">${item.technologies[3]}</p>`;
            }
            if (item.technologies && item.technologies[4]) {
                myList += `<p id="node">${item.technologies[4]}</p>`;
            }

            myList += `
                    </div>
                </li>
            `;
        });
        list.innerHTML = myList;
    });



window.addEventListener("scroll", () => {
    let header = document.querySelector("header")
    header.classList.toggle("rolagem", window.scrollY > 0)
})

