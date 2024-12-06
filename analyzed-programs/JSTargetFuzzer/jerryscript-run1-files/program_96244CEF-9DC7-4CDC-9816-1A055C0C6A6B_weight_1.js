function f0() {
    const o8 = {
        get g() {
            try {
                const v5 = super.imul();
                if (v5 < this) {
                    f0 = v5;
                } else {
                    super.f = 172025.5688063763;
                }
            } catch(e7) {
            }
            return "enL";
        },
        4294967296: "getFloat32",
        "f": "enL",
        __proto__: "enL",
        "d": "getFloat32",
        "c": 172025.5688063763,
        ..."enL",
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
let v11 = f0();
let v14 = 1418494220;
class C15 extends f0 {
    get a() {
        const v17 = v11 && this;
        v14++;
        v11 = v9;
        let v19;
        try { v19 = v17.setPrototypeOf(this, v14); } catch (e) {}
        return v19;
    }
    set g(a21) {
        v11.d = this;
        Object.defineProperty(v10, "d", { writable: true, configurable: true, enumerable: true, set: f0 });
        v10[2] = a21;
    }
    static 2147483647;
}
new C15();
new C15();
new C15();
Math.sqrt(11 != [1000000000000.0]);
