function f6() {
    return 1000.0;
}
function F10(a12, a13, a14, a15) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a12;
    this.h = F10;
}
const v16 = new F10(536870912n, 2147483647n, "deref", "deref");
const v17 = new f6(-1529351440n, 2147483647n, v16, "number");
new F10(-9.296118995510152e+307, -1529351440n, v17, "VN");
const v20 = new WeakSet();
const v21 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
RegExp["apply"](v20, ("1073741824").match(v21.copyWithin(v20, v20, WeakSet)), 0.3048329002741119, v21);
