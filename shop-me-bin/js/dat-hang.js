$("#address-new").on("submit", function () {
    let isValue = true;
    // check name
    if ($("#name-new").val().trim() == "") {
        $("#name-new-span").text("Bạn vui lòng nhập tên");
        isValue = false;
    } else {
        $("#name-new-span").text("");

    //check phone
    if (
        $("#phone-new")
        .val()
        .match(
            /^([\+][0-9]{1,3}([ \.\-])?)?([\(]{1}[0-9]{3}[\)])?([0-9A-Z \.\-]{1,32})((x|ext|extension)?[0-9]{1,4}?)$/
        ) == null
        ) {
        $("#phone-new-span").text(
            "Bạn vui lòng nhập số điện thoại"
        );
        isValue = false;
        } else {
        $("#phone-new-span").text("");
        }
    // check name
    if ($("#address-new").val().trim() == "") {
        $("#address-new-span").text("Bạn vui lòng nhập địa chỉ");
        isValue = false;
    } else {
        $("#address-new-span").text("");
    return isValue;
});
