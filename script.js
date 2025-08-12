let userContainer = document.querySelector('.userContainer')
let searchInput = document.querySelector('#searchInput')

const users=[
    {
        profileUrl:"prashant.jpg",
        name:"Prashnat Kumar Mishra",
        email:"misraprashantkumar@gmail.com",
    },

     {
        profileUrl:"prashant.jpg",
        name:"Rajnish Kumar Mishra",
        email:"rajnishkumar@gmail.com",
    },

     {
        profileUrl:"prashant.jpg",
        name:"Rohan Kumar",
        email:"rohankumar@gmail.com",
    },

]



function renderUsers(arr){
     userContainer.innerHTML=""

    arr.map((obj)=>{

    let {profileUrl,name,email}=obj
    console.log(profileUrl,name,email)

    let divElem=document.createElement('div')
   divElem.className="userItem"
    divElem.innerHTML=`<div class="userItem">
                    <div class="image">
                         <img src=${profileUrl} alt="Error">
                    </div>
                    <div class="userDetails">
                    <h3>${name}</h3>
                    <p>${email}</p>
                    </div>
                </div>
                 `
                userContainer.append(divElem)
});
}

renderUsers(users)

function handleSearch(e){
 
  let searchValue = e.target.value
  let filteredUsers=users.filter(obj=>{
     return obj.name.toLowerCase().includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
  })
  renderUsers(filteredUsers)
}

searchInput.addEventListener('input', handleSearch)


