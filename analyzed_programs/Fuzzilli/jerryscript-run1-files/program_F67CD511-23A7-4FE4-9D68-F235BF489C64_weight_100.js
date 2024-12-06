function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
    this.d = f0;
}
new F1();
new F1();
new F1();
new Array(1024);
[1000.0];
[1.7976931348623157e+308,-2.220446049250313e-16,-1e-15];
[4.500744792439523,-2.220446049250313e-16,-0.0,2.2250738585072014e-308,-0.0];
const v20 = new Array(7);
-v20;
const t15 = 1024;
t15[5] = -332885.23199684033;
let v22 = v20 || 1024;
v22 = 536870888;
