/* buatlah program menggunakan method fetch
untuk menampilkan semua name (hanya name saja) dari
https://jsonplaceholder.typicode.com/users 
Gunakan debugger console bawaan browser chrome untuk melihat hasilnya
*/

function fetchName(url) {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('There was something wrong');
        }
        return response.json();
    })
    .then(data => {
        const name = data.map(data => data.name);
        console.log(name);
    })
    .catch(error => {
        console.error('Error:', error);
    })
}
fetchName()