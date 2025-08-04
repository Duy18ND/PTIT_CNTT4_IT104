function displayUserInfo(user) {
    const {
        name,
        age,
        location: { city, country },
        job = {},
        contact = {}
    } = user;

    const{
        title = "unknown",
        company = "unknown"
    } = job;

    const {
        email = "unknown",
        phone = "unknown"
    } = contact;

    return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}
console.log(displayUserInfo({
    name: "Anna",
    age: 30,
    location: { city: "Da Nang", country: "Vietnam" }
}));