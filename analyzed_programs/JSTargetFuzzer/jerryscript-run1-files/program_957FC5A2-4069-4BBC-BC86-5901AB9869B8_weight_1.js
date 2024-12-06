function f0() {
    const o4 = {
        "h": 2147483647,
        [2147483647]: 2.2250738585072014e-308,
        [-6]: 2.2250738585072014e-308,
        "c": -6,
        256: 2147483647,
        ...2147483647,
        __proto__: 2147483647,
        "b": -6,
        536870888: 2.2250738585072014e-308,
        "e": 2.2250738585072014e-308,
        "f": 2147483647,
        [2.2250738585072014e-308]: -6,
    };
    return o4;
}
const v5 = f0();
f0();
f0();
new Uint32Array(5);
new Float64Array(15);
new Int16Array(3);
let v19 = -1992735215;
function f20(a21, a22) {
    const o30 = {
        "d": v5,
        set b(a24) {
            let v25;
            try { v25 = a24(a24, this); } catch (e) {}
            v19 = a22;
            v25.valueOf = a24;
        },
        get c() {
            const v27 = [this];
            const v28 = [545904634,a21,v27,this,v27];
            [v28,a21,v28];
            return 5;
        },
    };
    return o30;
}
f20(638957980, v19);
f20(v19, 545904634);
f20(v19, v19);
new Int32Array(249);
new Int32Array(2380);
const v42 = new Float32Array(3269);
v42[v42] = v42;
class C44 {
    [Int32Array] = 249;
    static [2380];
    a;
}
new C44();
new C44();
new C44();
