function menuList() {
    document.getElementById("menu-list").classList.toggle("active");
    document.getElementById("menu-btnID").classList.toggle("active");
    
}
function login(){
    $("#mask-page").css("display","block");
    $("#header-account").css("display","block");
    $("#login").css("display","block");
    $("#register").css("display","none");  
}
$(".icon-account").click(function(){ 
    if (localStorage.getItem("login") == "true") {
        window.location.href="taikhoan.html";

        // document.querySelector('#phoneAccount').value = `${userList[userList.length-1].phoneNumber}`;
        // document.querySelector('#emailAccount').value = `${userList[userList.length-1].email}`;
    }
    else {
        login();
    }
})
$(".icon-account-mobile").click(function(){
    if (localStorage.getItem("login") == "true") {
        window.location.href="taikhoan.html";

        // document.querySelector('#phoneAccount').value = `${userList[userList.length-1].phoneNumber}`;
        // document.querySelector('#emailAccount').value = `${userList[userList.length-1].email}`;
    }
    else {
        login();
    }
})
$("#login-btn").click(function(){
    $("#btn-run").css("left","0px");
    $("#register").css("display","none");
    $("#login").css("display","block");
})
$("#register-btn").click(function(){
    $("#btn-run").css("left","125px");
    $("#register").css("display","block");
    $("#login").css("display","none");
})
$("#account-close").click(function(){
    $("#header-account").css("display","none");
    $("#mask-page").css("display","none");
})
$(".icon-cart").click(function(){
    $("#cart-zone").css("display","block");
})
$("#cart-close").click(function(){
    $("#cart-zone").css("display","none");
})
$(".icon-search").click(function(){
    let check = $("#hotline").css("display");
    if (check == "block") {
        $("#hotline").css("display","none");
    $("#gr-search").css("display","block");
    }
    else {
        $("#hotline").css("display","block");
        $("#gr-search").css("display","none");
    }
})
// ----------------------validate form--------------------------------

// ----------login form----------
$("#login").validate({
    rules: {
        phoneNumber: {
            required:true,
            minlength: 10,
            maxlength: 11,
            digits: true
        },
        password: {
            required: true,
            minlength: 4
        }
    },
    messages: {
        phoneNumber: {
            required: "Vui lòng nhập số điện thoại",
            minlength: "Số điện thoại dài tối thiểu 10 số",
            maxlength: "Số điện thoại dài không quá 11 số",
            digits: "Số điện thoại không có chữ"
        },
        password : {
            required: "Vui lòng nhập mật khẩu",
            minlength: "Mật khẩu dài tối thiểu 4 ký tự"
        }
    }
})

// ----------register form----------
$("#register").validate({
    rules: {
        phonenumber: {
            required:true,
            minlength: 10,
            maxlength: 11,
            digits: true
        },
        email : {
            required: true,
            email: true
        },
        passWord: {
            required: true,
            minlength: 4
        },
        passwordAgain: {
            required: true,
            minlength: 4,
            equalTo: "#password-register"
        }
    },
    messages: {
        phonenumber: {
            required: "Vui lòng nhập số điện thoại",
            minlength: "Số điện thoại dài tối thiểu 10 số",
            maxlength: "Số điện thoại dài không quá 11 số",
            digits: "Số điện thoại không có chữ"
        },
        email: {
            required: "Vui lòng nhập email",
            email: "Vui lòng nhập đúng định dạng email"
        },
        passWord : {
            required: "Vui lòng nhập mật khẩu",
            minlength: "Mật khẩu dài tối thiểu 4 ký tự"
        },
        passwordAgain: {
            required: "Vui lòng nhập lại mật khẩu",
            minlength: "Mật khẩu dài tối thiểu 4 ký tự",
            equalTo: "Mật khẩu không trùng khớp"
        }
    }
})

$("#new-zone").validate ({
    rules: {
        nameNew: {
            required:true,
        },
        phoneNew: {
            required:true,
            minlength: 10,
            maxlength: 11,
            digits: true
        },
        emailNew : {
            required: true,
            email: true
        },
        addressNew: {
            required: true,
        }
    },
    messages: {
        nameNew: {
            required:"Vui lòng nhập tên của bạn",
        },
        phoneNew: {
            required: "Vui lòng nhập số điện thoại",
            minlength: "Số điện thoại dài tối thiểu 10 số",
            maxlength: "Số điện thoại dài không quá 11 số",
            digits: "Số điện thoại không có chữ"
        },
        emailNew: {
            required: "Vui lòng nhập email",
            email: "Vui lòng nhập đúng định dạng email"
        },
        addressNew: {
            required: "Vui lòng nhập rõ địa chỉ giao hàng",
        }
    }
})
// --------------------------this new address----------------------------
  
    $("#email-footer").validate({
      rules: {
          eMail: {
            required: true,
              email: true  
          }
      },
      messages: {
          eMail: "Vui lòng nhập đúng định dạng email",
      }  
    })

    // ----------------------filter mobile--------------------------------
    function filterMobileOpen() {
        let filterMobileOpen = document.getElementById("filter-mobile");
        filterMobileOpen.style.right = "0px";
    }
    function filterMobileClose() {
        let filterMobileClose = document.getElementById("filter-mobile");
        filterMobileClose.style.right = "-184px";
    }
    function cancelFilterDesktop() {
        let arrCheck = document.getElementsByClassName("check-desktop");
        let arrCart = document.getElementsByClassName("cart-desktop");
        for (let i = 0; i < arrCheck.length; i++) {
            arrCheck[i].checked = false;
        }
        for (let i = 0; i < arrCart.length; i++) {
            arrCart[i].value = "";
        }
    }
    function cancelFilterMobile() {
        let arr = document.getElementsByClassName("check-mobile");
        let arrCart = document.getElementsByClassName("cart-mobile");
        for (let i = 0; i < arr.length; i++) {
            arr[i].checked = false;
        }
        for (let i = 0; i < arrCart.length; i++) {
            arrCart[i].value = "";
        }
    }

    // ----------------------------------------------carousel item details-------------------------------------------
    $(document).ready(function(){
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })
    });

    // -------------------------------change img on view details page------------------------------------------
    // for desktop------------------
    function changeImg1() {
        $("#sp-main").attr("src","img/detail/sp-main-1.jpg");
        $("#sp-main").attr("xoriginal","img/detail/original/front-1.jpg");
        
    }
    function changeImg2() {
        $("#sp-main").attr("src","img/detail/sp-main-2.jpg");
        $("#sp-main").attr("xoriginal","img/detail/original/front-2.jpg");
    }
    function changeImg3() {
        $("#sp-main").attr("src","img/detail/sp-main-3.jpg");
        $("#sp-main").attr("xoriginal","img/detail/original/back-1.jpg");
    }
    function changeImg4() {
        $("#sp-main").attr("src","img/detail/sp-main-4.jpg");
        $("#sp-main").attr("xoriginal","img/detail/original/back-2.jpg");
    }
    // for mobile-------------------
    function changeImg1mobile() {
        $("#sp-main-mobile").attr("src","img/detail/sp-main-1.jpg");
        
    }
    function changeImg2mobile() {
        $("#sp-main-mobile").attr("src","img/detail/sp-main-2.jpg");
    }
    function changeImg3mobile() {
        $("#sp-main-mobile").attr("src","img/detail/sp-main-3.jpg");
    }
    function changeImg4mobile() {
        $("#sp-main-mobile").attr("src","img/detail/sp-main-4.jpg");
    }

    // ------------------------up and down---------------------------------
    let perOne1 = parseInt($("#price1").val());       // đơn giá của sản phẩm 1
    let perOne2 = parseInt($("#price2").val());
    let perOne3 = parseInt($("#price3").val());
    let sumMoney = parseInt($("#provisional").val()); // tiền tạm tính
    sumMoney = sumMoney*1000;
    $("#up-number1").click(function(){
        let count1 = parseInt($("#number-zone-sp1").val());
        count1++;
        let delta = perOne1 * count1;
        sumMoney = sumMoney + delta - perOne1*(count1-1);
        ttMoney = sumMoney;
        $("#number-zone-sp1").val(count1);
        let countCart = parseInt($("#number-cart").val());
        countCart++;
        $("#number-cart").val(countCart);
        $("#provisional").val(sumMoney.toLocaleString());
        $("#into-money").val(ttMoney.toLocaleString());
    })
    $("#down-number1").click(function(){
        let count1 = parseInt($("#number-zone-sp1").val());
        count1--;
        let delta = perOne1 * count1;
        sumMoney = sumMoney - delta + perOne1*(count1-1);
        
        let countCart = parseInt($("#number-cart").val());
        $("#number-cart").val(countCart);
        if (count1 <= 0) {
            $("#number-zone-sp1").val(1);
            $("#number-cart").val(countCart);
            sumMoney = sumMoney - delta + perOne1;
            ttMoney = sumMoney;
            $("#provisional").val(sumMoney.toLocaleString());
            $("#into-money").val(ttMoney.toLocaleString());
        }
        else {
            ttMoney = sumMoney;
            $("#number-zone-sp1").val(count1);
            countCart--;
            $("#number-cart").val(countCart);
            $("#provisional").val(sumMoney.toLocaleString());
            $("#into-money").val(ttMoney.toLocaleString());
        }  
    })

    $("#up-number2").click(function(){
        let count2 = parseInt($("#number-zone-sp2").val());
        count2++;
        let delta = perOne2 * count2;
        sumMoney = sumMoney + delta - perOne2*(count2-1);
        ttMoney = sumMoney;
        $("#number-zone-sp2").val(count2);
        let countCart = parseInt($("#number-cart").val());
        countCart++;
        $("#number-cart").val(countCart);
        $("#provisional").val(sumMoney.toLocaleString());
        $("#into-money").val(ttMoney.toLocaleString());
    })
    $("#down-number2").click(function(){
        let count2 = parseInt($("#number-zone-sp2").val());
        count2--;
        let delta = perOne2 * count2;
        sumMoney = sumMoney - delta + perOne2*(count2-1);
        
        let countCart = parseInt($("#number-cart").val());
        if (count2 <= 0) {
            $("#number-zone-sp2").val(1);
            $("#number-cart").val(countCart);
            sumMoney = sumMoney - delta + perOne2;
            ttMoney = sumMoney;
            $("#provisional").val(sumMoney.toLocaleString());
            $("#into-money").val(ttMoney.toLocaleString());
        }
        else {
            ttMoney = sumMoney;
            $("#number-zone-sp2").val(count2);
            countCart--;
            $("#number-cart").val(countCart);
            $("#provisional").val(sumMoney.toLocaleString());
            $("#into-money").val(ttMoney.toLocaleString());
        }  
    })

    $("#up-number3").click(function(){
        let count3 = parseInt($("#number-zone-sp3").val());
        count3++;
        let delta = perOne3 * count3;
        sumMoney = sumMoney + delta - perOne3*(count3-1);
        ttMoney = sumMoney;
        $("#number-zone-sp3").val(count3);
        let countCart = parseInt($("#number-cart").val());
        countCart++;
        $("#number-cart").val(countCart);
        $("#provisional").val(sumMoney.toLocaleString());
        $("#into-money").val(ttMoney.toLocaleString());
    })
    $("#down-number3").click(function(){
        let count3 = parseInt($("#number-zone-sp3").val());
        count3--;
        let delta = perOne3 * count3;
        sumMoney = sumMoney - delta + perOne3*(count3-1);
        
        let countCart = parseInt($("#number-cart").val());
        if (count3 <= 0) {
            $("#number-zone-sp3").val(1);
            $("#number-cart").val(countCart);
            sumMoney = sumMoney - delta + perOne3;
            ttMoney = sumMoney;
            $("#provisional").val(sumMoney.toLocaleString());
            $("#into-money").val(ttMoney.toLocaleString());
        }
        else {
            ttMoney = sumMoney;
            $("#number-zone-sp3").val(count3);
            countCart--;
            $("#number-cart").val(countCart);
            $("#provisional").val(sumMoney.toLocaleString());
            $("#into-money").val(ttMoney.toLocaleString());
        }  
    })

    // -----------------------------------------remove item--------------------
    $("#del1").click(function(){
        
        let b = parseInt($("#number-cart").val());
        let a = parseInt($("#number-zone-sp1").val());
        let c = b - a;
        $("#number-cart").val(c);
        $("#item-cart1").remove("#item-cart1");
    })
    $("#del2").click(function(){
        let b = parseInt($("#number-cart").val());
        let a = parseInt($("#number-zone-sp2").val());
        let c = b - a;
        $("#number-cart").val(c);
        $("#item-cart2").remove("#item-cart2");
    })
    $("#del3").click(function(){
        let b = parseInt($("#number-cart").val());
        let a = parseInt($("#number-zone-sp3").val());
        let c = b - a;
        $("#number-cart").val(c);
        $("#item-cart3").remove("#item-cart3");

    })

// ---------------------------back to top---------------------------
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
    
// -------zoom jQuery-----------
    $("#sp-main").xzoom({tint: '#333', Xoffset: 15});


    
// -----------------------select City/Provin and render District----------------
    $('#input-user-city-province').change(selectProvince); 
function selectProvince(){
    let outputDistrict = "<option value='0'>&nbspChọn Quận/Huyện...</option>";
    let outputCommune = "<option value='0'>&nbspChọn Phường/Xã...</option>";
    let idProvince = $('#input-user-city-province > option').filter(':selected').val();
    for (let i = 0; i < listDistrict.length; i ++){
        if (listDistrict[i].idProvince == idProvince){
            outputDistrict += `<option value='${listDistrict[i].idDistrict}'>&nbsp${listDistrict[i].name}</option>`;
        }
    }
    $('#input-user-commune').html(outputCommune);
    $('#input-user-district').html(outputDistrict);
}

$('#input-user-district').change(selectDistrict);
function selectDistrict(){
    let outputCommune = "<option value='0'>&nbspChọn Phường/Xã...</option>";
    let idDistrict = $('#input-user-district > option').filter(':selected').val();
    for (let i = 0; i < listCommune.length; i ++){
        if (listCommune[i].idDistrict == idDistrict){
            outputCommune += `<option>&nbsp${listCommune[i].name}</option>`;
        }
    }
    $('#input-user-commune').html(outputCommune);
}
// -----------------add new account------------------  
if (localStorage.getItem('signInSituation') === "true"){
    window.location.href = "index.html";
}
let userList = [];
function loadUserList(){
    userList = JSON.parse(localStorage.getItem('userSMB'))
} 
if (localStorage.getItem('userSMB') != null){
    loadUserList();
}    
function saveUserList(){
    localStorage.setItem('userSMB', JSON.stringify(userList));
} 

function createAccount(){
    if (localStorage.getItem('userSMB') != null){
        loadUserList();
    }
    let user = new Object;
    user.email = $("#email").val();
    user.password = $("#password-register").val();
    user.phoneNumber = $("#name-register").val();
    userList.push(user);
    saveUserList();   
}

$("#register").submit(function(){
    createAccount();
    localStorage.setItem('login', true);
})

if (localStorage.getItem("login") == "true") {
    document.querySelector('.icon-account span').innerHTML = userList[userList.length-1].phoneNumber;
    document.querySelector('.account-mobile span').innerHTML = userList[userList.length-1].phoneNumber; 
}


$(".btn-declare").click(function(){
    $(".declare-account").css("display","block");
    $(".history-buy").css("display","none");
})
$(".btn-history").click(function(){
    $(".declare-account").css("display","none");
    $(".history-buy").css("display","block");
})

// ------------logout--------------
$(".avatar-logout").click(function(){
    window.location.href = "index.html";
    localStorage.setItem('login', false);
    
})

// ----------------dathang---------------
$(".pay-toWin").click(function(){
    if (localStorage.getItem("login") == "true") {
        window.location.href = "dat-hang.html";
    }
    else {
        login();
    }

})
if (localStorage.getItem("login")=="false") {
    localStorage.setItem("cartNumbers", 0);
    document.querySelector(".icon-cart span").textContent = 0;
}

// ----------------------add items to cart-----------------------
let showCartList = [];
let carts = document.querySelectorAll(".addCart-icon");
for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener("click", function() {
        addToCartNumber(smbData);
        showCartList.push(smbData[i]);
        showCart();
    })
    
}

function showCart() {
    for (let i = 0; i < showCartList.length; i++) {
        document.querySelector(".cart-header").textContent = showCartList[i].name + showCartList[i].price;
        i++;
    }
}
function onloadCartNumber() {
    let spNumber = localStorage.getItem ("cartNumbers");
    if (spNumber) {
        document.querySelector(".icon-cart span").textContent = spNumber;
    }
}
function addToCartNumber() {
    let spNumber = localStorage.getItem ("cartNumbers");
    spNumber = parseInt(spNumber);
    if (spNumber) {
        localStorage.setItem("cartNumbers", spNumber + 1);
        document.querySelector(".icon-cart span").textContent = spNumber + 1;
    }
    else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".icon-cart span").textContent = 1;
    }
}

onloadCartNumber();


// ------test code----------
