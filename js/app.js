// load Searching data 
const loadSearchData =()=>{
    const searchFiled=document.getElementById('input-filed');
    const searchText=searchFiled.value;
    // data calling
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayResult(data.data))
}
// dispaly in searching Data
const displayResult=(phones)=>{
    phones.forEach(phone => {
        console.log(phone)
        const phoneContainer=document.getElementById('phone-container');
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="col">
          <div class="card p-3">
            <img src="${phone.image}" class="h-50 w-50 mx-auto " alt="..." />
            <div class="card-body">
              <h5 class="card-title">Name:${phone.phone_name}</h5>
              <h5>Brand:${phone.brand}</h5>
              <button class="bg-info" onclick="loadPhoneDetails('${phone.slug}')">Details</button>
            </div>
          </div>
        </div>
        `;
        phoneContainer.appendChild(div);
    });
}
// loading phones details
const loadPhoneDetails=(phoneID)=>{
    const url=`https://openapi.programming-hero.com/api/phone/${phoneID}`;
    fetch(url)
    .then(res =>res.json())
    .then(data => displayPhoneDetails(data.data))
}
const displayPhoneDetails =(phone)=>{
    console.log(phone)
    const detailsContainer=document.getElementById('details-container');
    const div=document.createElement('div');
    div.innerHTML=`
        <div class="col">
          <div class="card w-50 mx-auto p-3">
            <img src="${phone.image}" class="h-50 w-50 mx-auto " alt="..." />
            <div class="card-body">
              <h4 class="card-title">Name:${phone.name}</h4>
              <h4>Brand:${phone.brand}</h4>
              <h5>${phone.releaseDate}</h5>
              <p>Chip:${phone.mainFeatures.chipSet}.<br>display:${phone.mainFeatures.displaySize}.<br>memory:${phone.mainFeatures.memory}.</p>
            </div>
          </div>
        </div>
        `;
        detailsContainer.appendChild(div);

}




