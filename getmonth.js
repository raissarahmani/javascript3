 /* buat program menggunakan callback function 
untuk melanjutkan dan menampilkan semua bulan menggunakan method map
contoh: getMonth(showMonth?)
*/

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['Januari', 'Februari', 'Maret', 'April',
            'Mei', 'Juni', 'Juli', 'Agustus', 'September',
            'Oktober', 'November', 'Desember']
        if (!error) {
            callback(null, month) 
        } else{
            callback(new Error('Sorry Data Not Found'), [])
        }
    }, 4000)
}

const monthData = (inputMonth) => {
    getMonth((err, month) => {
        if (err) {
            console.log(err.message);            
        } else {
            const input = inputMonth.toLowerCase();
            const showMonth = month.map(month => month.toLowerCase());
        
            if (showMonth.includes(input)) {
                console.log("Data yang dimasukkan adalah bulan", input);
                console.log(showMonth);
            } else {
                console.log("Data yang dimasukkan bukan bulan");
            }
        }
    })
}
monthData("mei")
