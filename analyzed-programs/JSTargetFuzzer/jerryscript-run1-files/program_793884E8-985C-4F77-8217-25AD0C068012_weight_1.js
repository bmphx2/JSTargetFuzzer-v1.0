let v0 = 10;
const v2 = new Int8Array(v0);
const v5 = new Int32Array(10);
const v8 = new Int8Array(8);
const v9 = [v0,Int32Array,Int8Array,v8];
const v10 = [v9];
[v10,8,v10,v10,8];
function f12(a13, a14, a15, a16) {
    const o25 = {
        "g": v9,
        "f": v10,
        ...a16,
        m(a18, a19) {
            ({"length":a13,} = a16);
            v10[1073741824] <<= a18;
            let v21;
            try { v21 = this["findIndex"](); } catch (e) {}
            return v21;
        },
        [v10]: v5,
        p(a23, a24) {
            v0 = a23;
            return this;
        },
        "b": 8,
        "h": 8,
        "a": a13,
        "d": v8,
        "b": Int8Array,
    };
    return o25;
}
f12(8, 10, v0, v10);
f12(8, 10, 8, v9);
f12(v0, 8, 8, v10)[8];
Object.defineProperty(v2, Int8Array, { configurable: true, enumerable: true, set: f12 });
try { v2.reduce(f12, v8); } catch (e) {}
typeof 10 === "number";
class C37 extends Set {
    constructor(a39, a40) {
        super(a40);
    }
}
new C37("o", "asyncIterator");
