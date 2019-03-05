export default function makeListTemplate(queen){
    const template = document.createElement('template');

    template.innerHTML = `
        <a href="./queen-detail.html?id=${queen.id}">
            <li id="queen-container">
                <img src=${queen.image_url}>
                <h3 class="nametag">${queen.name}</h3>
            </li>
        </a>
        `;
        
    return template.content;
}

