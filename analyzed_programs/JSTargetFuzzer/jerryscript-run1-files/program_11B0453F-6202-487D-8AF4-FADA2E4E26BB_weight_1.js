function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 6;
    this.a = 6;
    this.c = 6;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v4;
    this.c = a8;
}
new F6(v4);
new F6(v4);
const v11 = new F6(v4);
const v12 = [-567482.3508934954,1000000000000.0,1000000000.0,-280034.7202007498,3.0,-1.0,-1000000000000.0];
const v13 = [7.382042294363874,1000000.0,9.497989945655654e+307,1.2269877094809694,-1000000.0,769620.9420246596,-8.038619205244511e+307,-5.0,-1.0];
const v14 = [7.57612643028395e+307,-7.282605738305151e+307,-1e-15,0.1445438299024655,-1.7976931348623157e+308,-Infinity,-2.220446049250313e-16,-2.0,3.0124306925913715e+307,3.1488449706077564];
function F15(a17, a18, a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a17;
}
new F15(v12, v3, v11, v11);
new F15(v13, v12, v4, v11);
new F15(v14, v11, v3, v4);
const v24 = [];
const v25 = [v24,v24];
const v26 = [v14,v25];
[v25,v26,v12,v26,v25];
function* f37(a38, a39) {
    function f40(a41, a42, a43, a44) {
        Object.defineProperty(v25, 1, { enumerable: true, value: a38 });
        a44[8] |= 4.0;
        return arguments;
    }
    f37();
    return yield 45279;
}
f37(v26, 39366);
