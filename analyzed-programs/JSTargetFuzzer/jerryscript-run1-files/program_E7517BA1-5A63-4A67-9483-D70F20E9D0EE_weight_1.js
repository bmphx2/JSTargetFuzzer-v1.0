const v0 = [0.9292203313574392,1e-15,-Infinity,2.2250738585072014e-308];
const v1 = [4.0,-1.9376613697017042];
const v2 = [-2.220446049250313e-16,2.2250738585072014e-308,0.6967848834731385,-178454.9873876922,-999573.0970738259,1.5963723430670963e+308,-1000.0,-1.7976931348623157e+308];
function f3(a4) {
    const o13 = {
        ...v0,
        [a4]: v0,
        [-2]: a4,
        [-1]: v1,
        [v1](a6, a7) {
            super.b = !v2;
            f3[a7];
            return a4;
        },
        __proto__: v1,
        "c": v1,
    };
    return o13;
}
const v14 = f3(v2);
const v15 = f3(v0);
const v16 = f3(v0);
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v16;
    this.c = v14;
}
new F17(v14, v2);
const v22 = new F17(v16, v1, v16);
const v23 = new F17(v22, v0);
function F24(a26, a27, a28) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = v0;
    this.c = v15;
}
new f3(v22, f3, v14);
const v30 = new f3(v16, v22, v15);
new F24(v30, v23, F24);
("description")["repeat"](4096);
