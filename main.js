$(document).ready(() => {
  $("#text").on('keyup',function(event){
   $(".preview").html($(event.currentTarget).val())
 })

$("#weight").on('change',(event)=>{
      $('.preview').css({
        fontWeight: $(event.currentTarget).val()
      })
    })

 $("#size").on('keyup',(event)=>{
       const fontSize = $(event.currentTarget).val()+'px'
      $(".preview").css({
      fontSize:fontSize

      })
    })

   $("#font").on('change',(event)=>{
     $(".preview").css({
       fontFamily: $(event.currentTarget).val()
     })
  })

})