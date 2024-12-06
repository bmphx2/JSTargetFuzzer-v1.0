function f0() {
    const o8 = {
        get e() {
            this.__proto__ = this;
            let v5;
            try { v5 = ("n").includes(this); } catch (e) {}
            Object.defineProperty(this, v5, { configurable: true, value: "n" });
            const v6 = -5.0 === this;
            v6 ? -5.0 : this;
            return v6;
        },
        "c": 14,
        ["n"]: -5.0,
    };
    return o8;
}
const v9 = f0();
const v10 = f0();
const v11 = f0();
new Int8Array(2);
const v17 = new Int16Array(4);
function f18(a19, a20, a21) {
    const o22 = {
        "a": Int8Array,
        "f": Int16Array,
        __proto__: v17,
    };
    return o22;
}
f18(v10, v11, v9);
f18(v10, v9, v9);
f18(v11, v9, v11);
new Uint8Array(8);
([2036046200,-9223372036854775807,-61646])["map"](parseInt);
