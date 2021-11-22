btnBack.onclick=function(){
  ChangeForm(userHomePage)
}

btnUpdate.onclick=function(){
lblHome.value = odd[0].teams[0]
lblAway.value = odd[0].teams[1]
 lblHomeSpread.value = odd[0].sites[0].odds.spreads.points[0]
 lblAwaySpread.value = odd[0].sites[0].odds.spreads.points[1]
//console.log(odd[0].sites[0].odds.spreads.points[0])
}
