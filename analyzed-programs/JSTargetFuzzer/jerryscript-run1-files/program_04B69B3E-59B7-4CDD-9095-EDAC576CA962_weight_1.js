let v2 = -1281440418;
class C3 {
    static {
        let v5 = -4.0 > v2;
        if (v5) {
        } else {
            let v9;
            try { v9 = v2(); } catch (e) {}
            ({"d":v9,"f":v5,...v2} = this);
        }
    }
    [v2];
    13;
    static #e = -4.0;
}
const v10 = new C3();
const v11 = new C3();
const v12 = new C3();
const v14 = new WeakMap();
function f15(a16, a17, a18) {
    const o19 = {
        __proto__: v11,
        [C3]: v11,
        [-1]: a17,
        "e": v2,
        536870887: v2,
        "a": v14,
        ...v10,
        "b": a18,
        ...C3,
        "f": a16,
        [10]: C3,
        "d": WeakMap,
        152: WeakMap,
        478563948: a17,
    };
    return o19;
}
const v20 = f15(v10, v14, v2);
const v21 = f15(v11, v20, v10);
f15(v14, v12, v11);
new C3();
try { v21["setFloat32"](v11, v2); } catch (e) {}
for (let v29 = 0; v29 < 32; v29++) {
    const t44 = "setFloat32";
    t44["p" + v29] = v29;
}
v14.e ^= -4.0 << v20;
