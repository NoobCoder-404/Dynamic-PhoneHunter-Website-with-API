const loadPhone = async(phoneBrand) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneBrand}`;
    //console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);

}

const displayPhone = phones =>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML=``;
    phones.forEach(phone => {
        //console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = ` 
            <div class="card">
            <img src="${phone.image}" class="card-img-top" alt="..." />
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nostrum
                dicta explicabo dolorum ullam eligendi sapiente iure sequi hic dignissimos
                minima architecto veritatis, delectus quibusdam voluptate pariatur
                consequatur reprehenderit nam quidem incidunt dolor atque quia. Nemo, quod
                fugit. Quis assumenda unde minus dicta ratione, nostrum facilis voluptatum
                sint voluptate omnis.
            </p>
            <button
            onclick="openModal('${phone.slug}')"
            type="button"
            class="btn btn-outline-secondary"
            data-toggle="modal"
            data-target="#myModal"
            >
            See More
            </button>
            </div>
            </div>
        `;

        cardContainer.appendChild(phoneDiv);

    })
}
document.getElementById('button').addEventListener('click',function(){
    const inputContainer = document.getElementById('input-container');
    const inputText = inputContainer.value ;
    loadPhone(inputText);

})

const openModal = async(id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    //console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.data);
    displayModal(data.data);
    
}



const displayModal = (item) => {
    const modalContainer = document.getElementById('modal-dialog');
    modalContainer.innerHTML= ``;
    //console.log('click');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `
        <!-- Modal Header -->
        <div class="modal-header">
        <h1 class="modal-title">${item.brand}</h1>
        <button type="button" class="close" data-dismiss="modal">
            ×
        </button>
        </div>

        <!-- Modal body -->
        <div class="modal-body">
        <div class="card">
        <img src="${item.image}" class="card-img-top" alt="..." />
        <div class="card-body">
        <p class="card-title"><span class="fw-bold">Mobile Specification -> </span></p>
        <p class="card-title"><span class="fw-bold">Phone Name : </span>${item.name}</p>
        <p class="card-text">   
            <p><span class="fw-bold">Bluetooth : </span> ${item.others.Bluetooth}</p>
            <p><span class="fw-bold">GPS : </span> ${item.others.GPS}</p>
            <p><span class="fw-bold">USB : </span> ${item.others.USB}</p>
            <p><span class="fw-bold">WLAN : </span> ${item.others.WLAN}</p>
        </p>
        
        
        </div>
        </div>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
        <button
            type="button"
            class="btn btn-danger"
            data-dismiss="modal"
        >
            Close
        </button>
        </div>
        
    `;
    modalContainer.appendChild(modalContent);
}

loadPhone('iphone');