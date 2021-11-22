
let odds = ""

const url = "https://api.the-odds-api.com/v3/odds?sport=americanfootball_nfl&region=us&mkt=spreads&dateFormat=iso&oddsFormat=american&apiKey=0fd97bb421c7fe5629f81c6c8a85d051"

const getData = () =>
fetch(url).then(response => response.json()).then(({data}) => data)

 function freeData(apiData) {
     odd = apiData
     
}
    
// call the API call function getData() to start the process
getData().then(data => {
    freeData(data)
    odd = data
    //console.log(odds)
})


btnChange.onclick=function(){
   ChangeForm(teamInfo)
}
