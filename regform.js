function getValues(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let origin = document.getElementById("origin").value;
    console.log(`
        Name : ${name} \n
        Surname : ${surname} \n
        Email : ${email} \n
        Country : ${country} \n
        Origin : ${origin}
    `
        );
}