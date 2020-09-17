$("#repair-student").validate({
    rules: {
        name: {
            required:true,
        },
        phone: {
            required:true,
            minlength: 10,
            maxlength: 11,
            digits: true
        },
        email: {
            required: true,
            email: true
        },
        birthday: {
            required:true
        }
    },
    messages: {
        name: {
            required: "Tên sinh viên không được để trống",
        },
        phone: {
            required: "Số điện thoại không được để trống",
            minlength: "Số điện thoại dài tối thiểu 10 số",
            maxlength: "Số điện thoại dài không quá 11 số",
            digits: "Số điện thoại không có chữ"
        },
        email: {
            required: "Email không được để trống",
            email: "Nhập đúng định dạng email"
        },
        birthday: {
            required: "Năm sinh không được để trống"
        }
    }
})

let getLinkInfoStudent = new URLSearchParams(window.location.search);
let getId = getLinkInfoStudent.get("id");
let http = "https://vucodiing-students.herokuapp.com/users";
$(function(){
    $.ajax({
        url: http + "/" + getId,
        context: document.body
      }).done(function(users) {
        $("#name").val(users.name);
        $("#birthday").val(users.birthday);
        $("#email").val(users.email);
        $("#phone").val(users.phone);
    });
  })

  function repairInfo(){
    if($('#repair-student').valid()){
        $.ajax({
            url: http + "/" + getId,
            method: "PUT",
            data: {
                "name": $("#name").val(),
                "birthday": $("#birthday").val(),
                "email": $("#email").val(),
                "phone": $("#phone").val()
            }
        }).done(function(){
            window.location.href="index.html"
        })
    }
}