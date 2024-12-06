function f0() {
}
let v1 = "number";
let v4 = 1000;
let v6 = -1024;
const v10 = [-2147483648n,-6n,-6n];
const v11 = [v10,-8n,v6,-2147483648n,"symbol"];
const v12 = ["symbol",-2147483648n,-8n,v10];
let v13 = v11.__proto__;
({"c":v6,"d":v1,"length":v13,...v4} = v11);
v1?.[v13];
v1[0] = "MAX_SAFE_INTEGER";
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.g = a18;
    this.d = v10;
}
new F15(v11, -2147483648n, v6, -6n);
new F15(v4, -8n, v6, v12);
new F15(v1, -6n, v12, "symbol");
