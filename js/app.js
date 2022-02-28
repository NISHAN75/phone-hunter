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
        const phoneContainer=document.getElementById('phone-container');
        const div=document.createElement('div');
        div.innerHTML=`
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        `;
        phoneContainer.appendChild(div);
    });
}

// const dispalySearchData=(phones)