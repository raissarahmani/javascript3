// Tahun kabisat
const checkLeapYear = (year) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const inputYear = year % 4 === 0;
            if(inputYear){
                resolve(year)
            } else{
                reject(new Error('Bukan tahun kabisat'))
            }
        },3000)
     })
}

checkLeapYear('2024').then(year => {
    console.log(`${year} adalah tahun kabisat`);
}).catch (er => {
    console.log(er);
})


// Bulan yang memiliki 31 hari
const checkMonth = (month) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const dataMonth = ['Januari', 'Maret', 'Mei', 'Juli',
                'Agustus', 'Oktober', 'Desember'];
            const showDataMonth = dataMonth.map (data => data.toLowerCase());
            const input = month.toLowerCase();
            let check = showDataMonth.find((data) => {
                return data === input
            })
            if(check){
                resolve(month)
            } else{
                reject(new Error('Bulan ini tidak memiliki 31 hari'))
            }
        },4000)
     })
}

checkMonth('mei').then(month => {  
    console.log(`Bulan ${month} memiliki 31 hari`);
}).catch (er => {
    console.log(er);
})