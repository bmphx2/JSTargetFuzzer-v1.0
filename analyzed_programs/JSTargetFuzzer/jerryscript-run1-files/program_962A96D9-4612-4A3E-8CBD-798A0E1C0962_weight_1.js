new Float64Array(5);
new Float32Array(10);
new Uint16Array(9);
function f12() {
    return Float32Array;
}
let v18 = -1992735215;
function f19(a20, a21) {
    const o29 = {
        "d": a20,
        set b(a23) {
            let v24;
            try { v24 = a21(a23, this); } catch (e) {}
            v18 = a21;
            v24.valueOf = a23;
        },
        get c() {
            const v26 = [this];
            const v27 = [545904634,a20,v26,this,v26];
            [v27,a20,v27];
            return a21;
        },
    };
    return o29;
}
f19(638957980, v18);
f19(v18, 545904634);
f19(v18, v18);
new Int32Array(249);
new Int32Array(2380);
const v41 = new Float32Array(3269);
v41[v41] = v41;
class C43 {
    [Int32Array] = 249;
    static [545904634];
    a;
}
new C43();
new C43();
new C43();
