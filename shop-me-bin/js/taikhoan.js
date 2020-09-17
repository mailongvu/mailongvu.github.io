if (localStorage.getItem("login") == "true") {
    document.querySelector('.info-account-page span').innerHTML= userList[userList.length-1].phoneNumber;
    document.querySelector('#phoneAccount').value = `${userList[userList.length-1].phoneNumber}`;
    document.querySelector('#emailAccount').value = `${userList[userList.length-1].email}`;
}