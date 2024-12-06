function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = -5;
}
new F3(12);
new F3(-5);
new F3(-5);
function f9() {
    return 2147483648;
}
const v15 = new Uint32Array(181);
let v17 = BigUint64Array;
let v18 = new v17(1);
let v19 = 253;
[v19,,v17,v18] = v15;
try { v17["abs"](181, v19, v17); } catch (e) {}
new Uint16Array(v19);
for (let i32 = 0;
    i32 < 2;
    (() => {
        i32++;
        const v38 = Uint32Array.__proto__;
        const v39 = [2.0,-Infinity,-54545.83767271729,-3.0,266795.13323978847,-1.7976931348623157e+308,125522.99740415509,0.27235185992394717,-6.421621912778832];
        try { v39.every(v38); } catch (e) {}
        ([-5.0,1000000000.0,-1000.0,488.27073138489004,-3.0,-Infinity,293.1919086306507,-1000000.0,708.7041237902058,0.8900144891864099]).shift();
    })()) {
    const v44 = new Function("x");
    v44.name;
}
Function();
