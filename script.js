//? RECUPERARE ELEMENTI DAL DOM
const list = document.getElementById('list');


//? MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.
const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        img: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg'
    }
]

//? MILESTONE 1:
// Stampare su console le informazioni di nome, ruolo e la stringa della foto

let items = '';

for (let i = 0; i < teamMembers.length; i++) {
    const currentTeamMember = teamMembers[i];

    for (let key in currentTeamMember) {
        console.log(currentTeamMember[key]);
    };


    //? MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe

    items += `<li>
                <div class="card col" style="width: 25rem;">
                    <img src="img/${teamMembers[i].img}" class="card-img-top" alt="${currentTeamMember.name}">
                    <div class="card-body">
                        <h5 class="card-title text-center">${teamMembers[i].name}</h5>
                        <p class="card-text text-center">${teamMembers[i].role}</p>
                    </div>
                </div>
             </li>`;
};

list.innerHTML = items;