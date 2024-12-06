function f8(a9, a10) {
    const o12 = {
        get b() {
            return a9;
        },
    };
    return o12;
}
const v13 = f8();
const v14 = f8(5, v13);
class C15 extends f8 {
    constructor(a17, a18) {
        super();
        const v19 = `
        `;
        eval(v19);
    }
}
new C15(v14, 5);
for (const v23 in v13) {
}
const v31 = new Uint32Array(181);
let v33 = BigUint64Array;
let v34 = new v33(1);
let v35 = 253;
[v35,,v33,v34] = v31;
try { v33["abs"](181, 1, v33); } catch (e) {}
new Uint16Array(v35);
for (let i48 = 0; i48 < 2; i48++) {
    const v54 = new Function("x");
    v54.name;
}
Function();
