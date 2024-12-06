const v1 = new WeakMap();
class C5 {
    #e = WeakMap;
    o(a7, a8) {
        a7 = a8;
        let v9;
        try { v9 = WeakMap(this); } catch (e) {}
        this.d *= 1073741825;
        v1["has"](a8, v1.d, a7, a7);
        return v9;
    }
    0;
    static b;
    static #d = WeakMap;
    static 2147483647 = 1073741825;
}
let v13 = new C5();
const v14 = new C5();
let v15 = new C5();
let v21 = 39577;
const v22 = C5.b;
v13 *= v22;
[v21,...v15] = v22;
let v23 = 0;
while (v23 < 10) {
    let v26;
    try { v26 = v1.has(v14); } catch (e) {}
    typeof v26 === "bigint";
    v23++;
}
