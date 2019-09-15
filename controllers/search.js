const omdb = require('../helpers/omdb')
const request = require('request')

module.exports={
    searchMovie : (req,res) => {
        let api = omdb.api
        let key = omdb.key
        let{movie,page} = req.query
      
        request(api+`?apikey=${key}&s=${movie}&page=${page}`, (error, response, body)=>{
           
            if(!error && response.statusCode == 200){
                let result =  JSON.parse(body)
                res.send(result)
            }
        })
    }
}