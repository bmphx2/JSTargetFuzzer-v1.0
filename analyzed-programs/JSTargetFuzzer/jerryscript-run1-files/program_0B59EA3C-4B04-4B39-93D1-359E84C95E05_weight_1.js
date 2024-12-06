class C3 {
    #a = "symbol";
    constructor(a5) {
        const t3 = "symbol";
        t3.length = a5;
        async function f6(a7, a8) {
            const t6 = "b";
            t6.length &= a5;
            const v9 = ("symbol")[0];
            Object.defineProperty(v9, 3, { writable: true, value: v9 });
            return await this;
        }
        f6(f6, f6);
    }
    #c;
    static 10;
    ["symbol"];
}
const v12 = new C3(C3);
const v13 = new C3("symbol");
const v14 = new C3(NaN);
class C15 extends C3 {
    10 = v14;
    constructor(a17, a18) {
        let v16 = this;
        super(v14);
        const v19 = v12 || v16;
        const t26 = "symbol";
        t26[65535] = v14;
        v16 = "symbol";
        for (let v20 = 0; v20 < 32; v20++) {
            v19["p" + v20] = v20;
        }
    }
    static 2147483649;
    static [NaN] = v14;
    a = "b";
}
const v23 = new C15("symbol", C3);
new C15("symbol", v23);
const v25 = new C15(v14, C3);
const v28 = new Uint32Array(127);
const v31 = new Int16Array(52);
const v34 = new Uint16Array(1);
const t44 = "b";
t44[127] |= 127;
const t46 = "b";
t46[v34] = 52;
try { v12.toJSON(); } catch (e) {}
const v36 = ("b")[v13];
delete v14[1073741825];
new Array(1);
let v41;
try { v41 = v36(C15, ...v31, C3, ...v28, ...NaN, v25); } catch (e) {}
function f42() {
    return v41;
}
