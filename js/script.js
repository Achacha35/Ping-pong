//business

var ping1 = [];

var pingPong = function (number) {
  for (var index = 1; index <=number; index+=1) {
    if(index  % 15 === 0){
      ping1.push("Ping pong");
    }else if (index % 5 === 0){
      ping1.push("Pong");
    }else if (index % 3 ===0){
      ping1.push("Ping");
    }else{
      ping1.push(index);
    }
  }

};
//front-end

$(document).ready(function() {
  $("form#ping-pong").submit(function() {
    event.preventDefault();
    var number= parseInt($("input#number").val());

  pingPong(number);

  ping1.forEach(function (number) {
    $("#userOutput").append('<li>' + number + "</li>");

  });

  });
});
