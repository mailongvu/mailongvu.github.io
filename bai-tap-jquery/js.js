$(".monitor_result").val("0");
// button
let str = "";
function button(btn) {
  str += btn;
  $(".monitor_result").val(str);
}
// calculator
$("#equal").click(function(){
  $(".monitor_show").val(str + " =");
  str = str.replace(/[×]/g, "*");
  str = str.replace(/[÷]/g, "/");
  $(".monitor_result").val(eval(str).toLocaleString());
str = eval(str);
})

// clear data
$("#ac").click(function(){
  $(".monitor_show").val("");
  $(".monitor_result").val("0");
  str = "";
})


// del
$("#del").click(function(){
  let str = $(".monitor_result").val();
  if (str.length > 0) {
    $(".monitor_result").val(str.substring(0,str.length-1));
  }
  else{
    $(".monitor_show").val("");
    $(".monitor_result").val("0");
   str = "";
  }
})

// p100
$("#p100").click(function(){
  $(".monitor_show").val("%" + "( " + str+ " )" + " =");
  $(".monitor_result").val(eval(str / 100));
})

// change theme
$("#change").click(function(){
$("body").toggleClass("light");
})
