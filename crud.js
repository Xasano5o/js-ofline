// new 
let input = document.getElementById("fullName");
let msg = document.getElementById("fullNameValidationError");
let posts =document.getElementById("posts")

// function Button() {
//     if (form.value =='') {
//         msg.innerHTML ='This field is required'
//         console.log('click');
//     }
// }

const formValidation = () => {
    input.addEventListener('click',(e)=>{
        e.preventDefault()
    })
    if (input.value === ""){
        msg.innerHTML = "Iltimos tekshirib ko`ring ma`lumod yo`q";
        console.log("failure");
    } else {
        console.log("successs");
        msg.innerHTML = "";
        acceptData()
    }
};

let data = {} 

let acceptData = () => {
    data['text']=input.value
    console.log(data);
    cereit()
};

let cereit= ()=>{
    posts.innerHTML +=`
    <div class="posts">
      <p>${data.text}</p>
        <div class="options">
        <i class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </div>
    </div>
 
    `
    input.value=''
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};