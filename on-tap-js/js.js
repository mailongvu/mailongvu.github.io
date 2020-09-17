// ----------XU LY SO-----------
// bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu
function tinhV(r) {
	let V = 4/3*3.14*r*r*r;
	return V;
}
// bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7)
function tongSoNguyen(a,b) {
	let min = Math.min(a,b);
	let max = Math.max(a,b);
	var sum=0;
	for (let i = min+1; i < max; i++){
		sum=sum+i;
	}
	return sum;
}

// bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function checkNT(number) {
	if (number <= 2 || (number-Math.floor(number))!= 0) {
		return false;
	}
	let check=0;
	for (let i = 2; i <= Math.sqrt(number); i++) {	
		if (number % i == 0) {
			check++;
		}
	}
	if (check == 0) {
		return true;
	}
	else {
		return false;
	}
}
		// bai 3 repair
		function isPrime(number) {
			if(!number.isInteger(number)||number < 2){
				return false;
			}
			for (let i = 2; i < Math.sqrt(number); i++) {
				if(number % i === 0) {
					return false;
				}
			}
			return true;
		}


// bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số
// truyền vào
function sumNT(number) {
	var sum=0;
	for (let i=2; i < number; i++) {
		if (checkNT(i)===true) {
			sum=sum+i;
		}
	}
	return sum;
}

// bai 4 ver.2: cho 1 so nguyen duong, tinh tong cac so chan tu 1 den tham so truyen vao
	function sumChan(number) {
		let sum = 0;
		for (let i = 2; i <= number; i+=2) {
				sum = sum + i;
		}
		return sum;
	}

// bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function sumUS(number) {
	var sum=0;
	for (let i=0; i <= number;i++) {
		if (number%i == 0) {
			sum=sum+i;
		}
	}
	return sum;
}
// ----------XU LY CHUOI-----------
// bài 1 Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
function capFisrt(str) {
	let arr=[];
	str=str.toLowerCase().split(" ");
	for (let i = 0; i < str.length;i++) {
		str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
		arr.push(str[i]);	
	}
	return arr.join(" ");
}

// bài 2 Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.
function spinalCase(str) {
	let arr=[];
	str=str.toLowerCase().split(" ");
	for (let i = 0; i < str.length;i++) {
		arr.push(str[i]);
	}
	return arr.join("-");
}










// bài 3 Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không
function strMirrow(str) {
	str = str.toLowerCase().replace(/ /g, "");
	let newStr = str.split("").reverse().join("");
	if (str === newStr) {
		return true;
	} else {
		return false;
	}
}


// bài 4 Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự (tính cả dấu
// cách) nằm trong chuỗi thứ 2 hay không
function abc() {
	let str = "hello world abe";
	let test = "wldw";
	let count = 0;
	for (let i = 0; i < test.length; i++) {
		let a = test[i];
		if (test.indexOf(a) == test.lastIndexOf(a)){
			count++;
			console.log(count + a);	
		}
		
	}
}





// ----------XU LY MANG-----------
// Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ, kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào [1, 2, 3] và [1, 3, 4, 5] thì kết quả trả về là mảng [2, 4, 5].
function ssArr(arr1, arr2) {
	let newArr=[];
	for (let i = 0; i < arr2.length; i++) {
		arr1.push(arr2[i]);
	}
	for (let i = 0; i < arr1.length; i++) {
		let item = arr1[i];
		if (arr1.indexOf(item) == arr1.lastIndexOf(item)){
			newArr.push(item);
		}					
	}
	return newArr;
}

// Bài 3 Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
function maxStr(arr) {
	let newArr =[];
	for (let i = 0; i <arr.length; i++) {
		var a = Math.max(arr[i].length);
	}
	for (let i = 0; i <arr.length; i++) {
		if(arr[i].length == a) {
			newArr.push(arr[i]);
		}
	}		
	return newArr;
}

// Bài 4
function ziZac(m,n) {
	let arr = [];
	for (let i = 1; i < m*n+1; i+=4) {
		arr.push([Number(i),Number(i+1),Number(i+2),Number(i+3)])
	}
	for (let i= 0; i < arr.length; i++) {
		if (i%2 != 0) {
			arr[i].reverse();
		}
	}
	return arr;
}

/*Bài 2: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số
thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví
dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''.*/

function time(t,x) {
	// tach gio, phut, giay
	let second = t.substr(-2);
	let minute = t. substr(-5,2);
}