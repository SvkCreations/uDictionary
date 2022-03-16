let url = "https://api.dictionaryapi.dev/api/v2/entries/en/hello";
fetch(url).then((response)=>{
    return response.json;
}).then((data)=>{
    console.log(data["word"])
})