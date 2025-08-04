const phoneBooks = [];
const addContact = () => {
    const push = {
        name: prompt("Moi ban nhap name: "),
        phone: prompt("Moi ban nhap phone: "),
        email: prompt("Moi ban nhap email: ")
    }
    phoneBooks.push(push);
};
addContact();
const displayContact = () =>{
    console.log("-------------------Danh Sach---------------");
    for(let contact of phoneBooks){
        console.log(`
            name: ${contact.name}
            phone: ${contact.phone}
            email: ${contact.email}
            `);
    }
};
displayContact();