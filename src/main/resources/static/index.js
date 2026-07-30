var users = [
    {
        image: "/images/john.png",
        name: "John Doe",
        gender: "Male"
    },
    {
        image: "/images/jane.png",
        name: "Jane Doe",
        gender: "Female"
    }
];

var id = 0;

function updateUser(user) {

    const image = document.getElementById("user-image");

    image.style.opacity = 0;

    setTimeout(function () {

        image.src = user.image;
        image.style.opacity = 1;

    }, 150);

    document.getElementById("user-name").innerHTML = user.name;
    document.getElementById("user-gender").innerHTML = user.gender;
}

function toggleUser() {

    id = (id + 1) % users.length;

    updateUser(users[id]);

}

function randomUser() {

    fetch("https://randomuser.me/api/")
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {

            const person = data.results[0];

            updateUser({
                image: person.picture.large,
                name: person.name.first + " " + person.name.last,
                gender: person.gender
            });

        })

        .catch(function (err) {
            console.log(err);
        });

}