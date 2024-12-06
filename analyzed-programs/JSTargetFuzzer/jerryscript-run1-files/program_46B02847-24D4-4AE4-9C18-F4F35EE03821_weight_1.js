let v0 = "o";
function F13(a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a16;
    this.a = a16;
    this.c = -4294967297;
}
new F13(2.220446049250313e-16, -1.7976931348623157e+308);
const v18 = new F13(-1.7976931348623157e+308, 692489.6180742404);
const v19 = new F13(692489.6180742404, 692489.6180742404);
const v20 = [130520245,-184173509];
const v22 = new Date();
function f23() {
    let v24 = v22.__proto__;
    v0 = v24;
    delete v18[127];
    v22[v18] = v24;
    v24 = v19;
    return Date;
}
const v26 = Date(f23);
const v28 = [v20,[v26,v26,v22]];
v22[[v28]] ^= f23;
(v28 && v22) % 6344;
