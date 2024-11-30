class Products {

    render() {
        let htmlCatalog = '';

        CATALOG.forEach(({ name, superpowers, description, category }) => {
            let htmlLive = superpowers.live;
            let htmlCreate = superpowers.create;
            let htmlLove = superpowers.love;
            let htmlDream = superpowers.dream;
            htmlCatalog += `
                <li class="card">
                <div class="img-box"><img class="img-modal" src="assets/img/harmony.png" alt="ball-4"></div>
                <div class="card-content">
                <div class="description-box">
                    <span class="text-link tag-work">${category}</span>
                    <h3 class="desc">${name}</h3>                    
                    <span class="text-modal">${description}</span>
                </div>
                <div class="superpowers-box">
                    <h4>Adds superpowers to:</h4>
                    <ul class="superpower-list">
                        <ul class="superpower-item">
                            <li class="td-name text-modal">Live</li>
                            <li class="td-info text-modal"><span class="text-modal">${htmlLive}</span></li>
                            <li class="snowbol-box-modal">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                            </li>
                        </ul>
                        <ul class="superpower-item">
                            <li class="td-name text-modal">Create</li>
                            <li class="td-info text-modal"><span class="text-modal">${htmlCreate}</span></li>
                            <li class="snowbol-box-modal">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                            </li>
                        </ul>
                        <ul class="superpower-item">
                            <li class="td-name text-modal">Love</li>
                            <li class="td-info text-modal"><span class="text-modal">${htmlLove}</span></li>
                            <li class="snowbol-box-modal">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                            </li>
                        </ul>
                        <ul class="superpower-item">
                            <li class="td-name text-modal">Dream</li>
                            <li class="td-info text-modal"><span class="text-modal">${htmlDream}</span></li>
                            <li class="snowbol-box-modal">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                                <img class="snowbol" src="assets/svg/logo.svg">
                            </li>
                        </ul>
                    </ul>      
                    </div>
                </div>
                </li>
            `;
        });

        const html = `
            <ul class="row gifts-cards-box">
                ${htmlCatalog}
            </ul>
        `;

        PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();