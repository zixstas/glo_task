const form = document.querySelector(".form-test-drive");

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(form);
    const body = {};

    formData.append("form", form.classList.value);

    formData.forEach((value, field) => {
        body[field] = value;
    })

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
        })
})