
//!RestCountries Api


const https = require('https')

https.get('https://restcountries.com/v3.1/name/Azerbaijan',(response)=>{
    let data = ''
    
    response.on('data',(chunk)=>{
        data += chunk
    })

    //Data gelib qutaranda ise response.on('end')
    response.on('end',()=>{
        const jsonData = JSON.parse(data)

        if(jsonData[0].currencies.AZN != null){
            console.log(jsonData[0].currencies.AZN)
        }
        else{
            console.log(new Error('Hata Cikti'))
        }

    })
})
.on('error',(err)=>{
    console.log(err.message)
})

