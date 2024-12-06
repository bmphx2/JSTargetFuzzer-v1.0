const v0 = [9,0,39582];
[-4096,37262,-1,-2,16,-536870912];
const v2 = [1517271379,-535553625,0,-256,65537,0,1433847523,-1024,-2];
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a5;
    this.d = v0;
    this.b = a5;
}
const v7 = new F3(v0, v2, v2, v2);
const v8 = new F3(v7, v0);
new F3(v8, v2);
let v19 = 44256;
const v22 = new Uint32Array(858);
const v24 = new Uint16Array();
function f25(a26, a27, a28, a29) {
    const o34 = {
        m(a31, a32, a33) {
            v19 ^= a33;
            return 858;
        },
    };
    return o34;
}
const v35 = f25("symbol", 858, "symbol");
for (const v36 in v22) {
    const v38 = [v36,f25,Reflect];
    Reflect.apply(v35.m, v24, v38);
}
