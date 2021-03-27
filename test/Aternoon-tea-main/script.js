


$('.btn_send').on('click', function(event){
    event.preventDefault();
    enter();
});

function enter(){
    var number = $('.input_num').val();
      if(number!=''){
         $.ajax({
          type: "POST",
          crossDomain: true,
          cache: false,
          data:{
            number: number
          },
          url: './login.php',
          dataType: "json",
          success: function(result){
              console.log(result['success'], result['name']);
              if(!result['success']){
                  alert(" Could not log you in.");
              }
              else{
                  // log in successfully
                  window.location.href='./main/main.html'; //換成操作頁面
                  console.log("success");
                  //alert("success.");
              }
              
          },
          error: function(jqXHR, textStatus, errorThrown) {
              console.log(jqXHR);
              console.log(textStatus);
              console.log(errorThrown);
          }
      });
          
      }
      else{
          alert(" Empty input !")
      }
}
var input_num = document.getElementById("input_num");
input_num.addEventListener("keydown", function (e) {
    if (e.key === 'Enter') {  //checks whether the pressed key is "Enter"
        enter();
    }
});
