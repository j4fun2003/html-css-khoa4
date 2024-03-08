// ex1
console.log("vd1");
let person = { name: "HungHVd" };
const member = [person];
person = null;
console.log(member); // "HungHVd"

// tạo đối tượng person tham chiếu đến địa chỉ vùng nhớ chứa giá trị {name:"HungHVd"}
// khi gán dối tượng person cho mảng member thì mảng member sẽ trỏ đến địa chỉ vùng nhớ của đối tượng person
// việc gán null cho person làm cho person không trỏ đến vùng nhớ ban đầu nữa nhưng vùng nhớ đó vẫn tồn tại do vẫn còn 1 tham chiếu đến nó là member

// ex2
console.log("vd2");
var a = "HungHVd";
function test() {
  console.log(a); //undifined
  var a = "HaoHVp";
  console.log(a); // HaoHVp
}
test();
console.log(a); // HungHVd

// Khi hàm test được thực thi, khởi tạo vùng nhớ stack để cấp phát các giá trị
// Cơ chế hosting trong javascript tự động hoisted biến local a lên trên đầu của hàm test(var a) lúc này console.log đầu sẽ không nhận được giá trị của biến a(undifined)
// Sau đó a được gán giá trị (a = "HaoHVp") nên ở console.log số 2 trả về kết quả a là HaoHVp
// Sau khi hàm test được thực thi, bộ nhớ stack giải phóng (biến a không còn mang giá trị cục bộ của hàm) lúc này console.log cuối cùng mang giá trị biến toàn cục


// ex3
console.log("vd3");
var a1 = "HungHVd";
if (true) {
  console.log(a1);
  var a1 = "HaoNHp";
  console.log(a1);
}
console.log(a1);

// ex4
console.log("vd4");
let a2 = "HungHVd";
if (true) {
  let a2 = "HaoNHp";
  console.log(a2);
}
console.log(a2);

// Khai báo chuỗi a global scope giá trị "HungHVd";
// Trong khối điều kiện if khởi tạo biến local a2 và thay đổi giá trị a2 = "HaoNHp" nên console.log lúc này là HaoNHp;
// Sau khi thoát khỏi khối điều kiện thì console.log lúc này in ra giá trị a2 = "HungHVd" do a2 khởi tạo ban đầu là global 
