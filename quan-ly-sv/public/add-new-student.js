$("#add-student").validate({
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
        year: {
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
        year: {
            required: "Năm sinh không được để trống"
        }
    }
})

function addStudent(){
    if($('#add-student').valid()){
        $.ajax({
            url: "https://vucodiing-students.herokuapp.com/users",
            method: "POST",
            data: {
                "name": $("#name").val(),
                "birthday": $("#birthday").val(),
                "email": $("#email").val(),
                "phone": $("#phone").val()
            }
        })
    }
}


    

