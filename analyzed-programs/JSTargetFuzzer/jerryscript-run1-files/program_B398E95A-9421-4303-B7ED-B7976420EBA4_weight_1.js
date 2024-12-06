function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = 1024;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
v3.h %= 2972;
v5.__proto__ = v3;
const v11 = new Uint32Array(2972);
const v14 = new Float64Array(191);
new BigUint64Array(2319);
let v23 = -1992735215;
function f24(a25, a26) {
    const o34 = {
        "d": a25,
        set b(a28) {
            let v29;
            try { v29 = a28(a28, this); } catch (e) {}
            v23 = a26;
            v29.valueOf = a28;
        },
        get c() {
            const v31 = [this,this,v14];
            const v32 = [545904634,a25,v31,a25,v31];
            [v32,a25,v32];
            return a26;
        },
    };
    return o34;
}
f24(638957980, v23);
f24(v23, 545904634);
const v39 = f24(f24(v23, v23), ...v14, 2319, 1073741824n, 249, v3);
let v40;
try { v40 = v23(1073741824n, v39); } catch (e) {}
const t36 = 1;
t36[1] = v40;
try { v11.toString(); } catch (e) {}
new Array(249);
new Int32Array(2380);
switch (v40) {
    case v14:
        let [v48,v49,v50,v51] = v40;
        break;
}
const v54 = new Float32Array(3269, v4, 2380);
v54[v54] = v54;
class C56 {
    [Int32Array] = 249;
    static [2380];
    f;
}
new C56();
new C56();
new C56();
