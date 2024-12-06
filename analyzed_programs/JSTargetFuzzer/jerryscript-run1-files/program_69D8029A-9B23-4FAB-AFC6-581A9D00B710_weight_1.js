class C3 {
    static 1 = "source";
    static get a() {
        for (let v5 = 0; v5 < 32; v5++) {
            const t4 = "source";
            t4["p" + v5] = v5;
        }
        for (let v8 = 0; v8 < 32; v8++) {
            const t8 = "source";
            t8["p" + v8] = v8;
        }
        return this;
    }
}
new C3();
new C3();
new C3();
new Uint16Array(69);
new Int32Array(9);
const v25 = new Set(Symbol.unscopables["toString"]());
new Uint32Array(v25);
new Int32Array(4);
const v33 = new Uint32Array(181);
let v35 = BigUint64Array;
let v36 = new v35(1);
let v37 = 253;
[v37,,v35,v36] = v33;
try { v35["abs"](181, v37, v35); } catch (e) {}
new Uint16Array(v37);
for (let i50 = 0; i50 < 2; i50++) {
    const v56 = new Function("x");
    v56.name;
}
Function();
