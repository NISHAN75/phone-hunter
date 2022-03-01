// load Searching data 
const loadSearchData =()=>{
    const searchFiled=document.getElementById('input-filed');
    const searchText=searchFiled.value;
    searchFiled.value='';
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
        const detailsContainer=document.getElementById('details-container').innerHTML='';
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
// dispaly phone details
const displayPhoneDetails =(phone)=>{
    console.log(phone)
    const detailsContainer=document.getElementById('details-container');
    const phoneContainer=document.getElementById('phone-container').innerHTML='';
    const div=document.createElement('div');
    div.innerHTML=`
        <div class="col">
          <div class="card w-50 mx-auto p-3">
            <img src="${phone.image}" class="h-50 w-50 mx-auto " alt="img not found" />
            <div class="card-body">
             <table class="table table-hover">
                 <tbody>
                      <tr>
                      <td colspan="2">Name:</td>
                      <td>${phone.name}</td>
                      </tr>
                      <tr>
                      <td colspan="2">Brand:</td>
                      <td>${phone.brand}</td>
                      </tr>
                      <tr>
                      <td colspan="2">Launch:</td>
                      <td>${phone.releaseDate}</td>
                      </tr>
                      <tr>
                      <td colspan="2">Chip:</td>
                      <td>${phone.mainFeatures.chipSet}</td>
                      </tr>
                      <tr>
                      <td colspan="2">Display:</td>
                      <td>${phone.mainFeatures.displaySize}</td>
                      </tr>
                      <tr>
                      <td colspan="2">Memory:</td>
                      <td>${phone.mainFeatures.memory}</td>
                      </tr>
                      <tr>
                      <td colspan="2">Storage:</td>
                      <td>${phone.mainFeatures.storage}</td>
                      </tr>
                      <tr>
                      <td colspan="2">Sensors:</td>
                      <td>${phone.mainFeatures.sensors}</td>
                      </tr>
                      <tr>
                      <td colspan="2">others:</td>
                      <td>Bluetooth(${phone.others.Bluetooth}),GPS(${phone.others.GPS}),NFC(${phone.others.NFC}),Radio(${phone.others.Radio}),USB(${phone.others.USB}),WLAN(${phone.others.WLAN}),</td>
                      </tr>
                  </tbody>
              </table>
            </div>
          </div>
        </div>
        `;
        detailsContainer.appendChild(div);

}




