// Lecture 1 :
// Sử dụng hàm confirm để nhận thông tin đầu vào và đưa ra quyết định dựa trên những thông tin đó.
// Hàm này đánh giá giá trị có trong đối số answer.
// Nếu giá trị của biến answer là true đồng nghĩa với việc người dùng chọn OK, hàm sẽ tạo biến result và  gán giá trị cho biến result là chuỗi "Excellent. We'll play a nice game of chess."
// Nếu giá trị của biến answer là false, đồng nghĩa với việc người dùng chọn Cancel, hàm sẽ vẫn tạo biến result nhưng gán giá trị cho biến result là chuỗi "Maybe later then."
// Bất kể biến answer lưu giá trị gì, hàm processConfirm trả về biến result cho hàm gọi bằng câu lệnh return bên trong hàm.

function processConfirm(answer) { 
    if (answer === true){
        return "Excellent. We'll play a nice game of chess."
    } else {
        return "Maybe later then.";
    };
};
let answer = confirm("Hãy chọn ... !");
let result = processConfirm(answer);
console.log(result);


// Xây dựng hàm nhận vào một tham số là một mảng cho trước. Hàm thực hiện tìm giá trị nhỏ nhất trong mảng và trả về giá trị đó. Sử dụng hàm vừa xây dựng trên với mảng như sau:

let number = [ 9, 0 , 7 , 6 , -1, -5, 988, 56];
let min = number[0];
let count = 0;
for (let i = 0; i < number.length; i++){
    if(min > number[i]){
        min = number[i];
        count = i;
    } console.log(number[i]);
}; console.log("Giá trị nhỏ nhất là :", min, count);



function displayPul (arr){
    if (arr.length === 0){
        return {min: null, index: -1};
    }
    let min = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++){
    if(min > arr[i]){
        min = arr[i];
        index = i;
    } 
};
    return {min, index};
};

const arr = [3, 5, 1, 8, -3, 7, 8];
const arr2 = [7, 12, 6, 9, 20, 56, 89];
const arr3 = [];

const arr4 = [0, 0, 0, 0, 0, 0]


console.log(displayPul(arr));
console.log(displayPul(arr2));
console.log(displayPul(arr3));
console.log(displayPul(arr4));

// Viết một hàm sum() nhận vào hai số và trả về tổng của chúng, và thực hiện hiển thị lên màn hình bằng hàm alert()

function sum(a = 2,b = 2){
    return a + b;
};
alert(sum());


// Viết một hàm isEven nhận vào một số và trả về true nếu số đó là số chẵn, ngược lại trả về false.
// Yêu cầu người dùng nhập vào 1 số nguyên bất kỳ bằng hàm prompt()
// Hiển thị kết quả bằng alert()



function isEven(inp){
    while (isNaN(inp)){
        inp = +prompt("再度入力等してください")
    };
    if (inp % 2 === 0){
        return "偶数";
    } else if( inp % 2 !== 0){
        return "奇数。。。。 Ahihi";
    }
    else {
        return "奇数";
    } 
};
let inp = +prompt("番号を入力してください")
alert(isEven(inp));




// Cho người dùng nhập vào chuỗi ký tự và viết hàm kiểm tra xem đó có phải chuỗi ký tự đối xứng không:
// Người dùng nhập chuỗi bằng hàm prompt()
// Viết hàm isPalindrome() để kiểm tra chuỗi đối xứng
// Thực hiện thông báo cho người dùng bằng alert() có phải chuỗi đối xứng không

function isPalindrome(textInput){
    for (let i = 0; i < textInput.length / 2 ; i++){
        //Muốn lấy giá trị đầu là sym[i]
        //Muốn lấy giá trị cuối là sym.[sym.length -1 -i]
        if (textInput[i] !== textInput[textInput.length -1 -i]){
            return false;
        }
    }; return true;
};  
    let textInput = prompt("こちらに、記号を入力してください！");
    if (false){
        alert('không phải chuỗi đối xứng')
    } else {
        alert("Là chuỗi đối xứng");
    }

// đối xứng : Ví dụ 123 4 321; hoặc 123 b 321

//Kết quả sao ra không có đúng. Mong được các thầy giải đáp ạ !


// Tạo hàm tính tổng các phần tử trong mảng, với các mảng như sau:
// (Gợi ý: có thể dùng reduce() trong javascript)

function sum(total){
    let reduce = arr5.reduce(function(acc, cur){
        acc + cur;
        return acc;
}, 1);
};
const arr5 = [1, 2, 3, 4, 5, 6];
const arr6 = [10, 20, 30, 40, 50];
const arr7 = [1, 3, 5, 7, 9];