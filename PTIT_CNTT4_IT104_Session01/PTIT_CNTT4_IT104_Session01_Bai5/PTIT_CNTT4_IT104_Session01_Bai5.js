const respone = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
}
extractData = ({data}) =>{
    const {title, author} = data;
    const {name: authorName, email: authorEmail} = author;

    console.log(`
        Title: ${title}
        Author: ${author}
        AuthorName: ${authorName}
        AuthorEmail: ${authorEmail}
        `);
}
extractData(respone);