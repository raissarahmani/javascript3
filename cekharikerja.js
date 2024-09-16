const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if(cek){
                resolve(cek)
            } else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}


/* 
a. then catch
'then' dan 'catch' adalah method yang ada di dalam 'promise' yang berfungsi untuk menangani hasil dari resolve dan reject
'then' akan menangkap hasil dari resolve, yaitu jika promise dijalankan dengan benar
sedangkan 'catch' akan menangkap hasil dari reject, yaitu jika terjadi error
*/
cekHariKerja('selasa').then(day => {
    console.log(`${day} adalah hari kerja`);
}).catch (er => {
    console.log(er);
})


/*
b. try catch
'try' dan 'catch' adalah method untuk error handling. dalam case ini, 'try' dan 'catch' digunakan bersamaan dengan 'async'
'try' akan dijalankan jika proses berjalan dengan seharusnya (resolve). jika 'try' dijalankan, maka 'catch' tidak dijalankan
'catch' akan dijalankan jika 'try' tidak berjalan. Dengan kata lain, jika terjadi reject pada promise.
'catch' akan menampilkan error
*/
async function getData() {
    try {
        const hasil = await cekHariKerja('minggu')
        console.log(hasil);
    } catch (er) {
        console.log(er);
    }
}
getData();