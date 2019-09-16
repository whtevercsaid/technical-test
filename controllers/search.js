const omdb = require('../helpers/omdb')
const request = require('request')

module.exports={
    searchMovie : (req,res) => {
        let api = omdb.api
        let key = omdb.key
        let{movie,page} = req.query
      
        request(api+`?apikey=${key}&s=${movie}&page=${page}`, (error, response, body)=>{
           
            if(error){
                throw error
            }
            else if(!error && response.statusCode == 200){
                var info = JSON.parse(body)
                if(info.Response == "True"){
                    res.send(info);
                }
                else{
                    if(info.Error == "Something went wrong."){
                        info.Error = "You must input something"
                    }
                    res.send(info)
                }
            }
        })
    }
}