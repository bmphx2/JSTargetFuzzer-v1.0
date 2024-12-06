const v5 = new Int32Array(3);
new Uint16Array(128);
let v11 = new Int32Array(8);
class C12 extends Int32Array {
    get c() {
        const o14 = {
        };
        new Proxy(this, o14);
        try { Int32Array(o14, 128, 3); } catch (e) {}
        return Int32Array;
    }
    constructor(a19, a20, a21) {
        super(a20);
    }
}
new C12(227999789, 3, -1);
new C12(227999789, 128, 128);
new C12(-1, 128, 268435440);
const v30 = new Int32Array(2083);
new Uint8Array(255);
const v36 = new Int16Array(7);
function f37(a38, a39, a40) {
    const o47 = {
        "h": Int32Array,
        set e(a42) {
            e = a39;
            [a40,a39];
            [v30];
            [Int16Array,Uint8Array];
            this.h;
        },
        __proto__: v36,
        "b": Uint8Array,
        "c": 255,
        ...a38,
        1053877365: a39,
    };
    return o47;
}
const v48 = f37(2083, 255, 7);
const v49 = f37(v48, 7, 2083);
const v51 = f37(f37, 255, 7).e;
let v52;
try { v52 = v51(255, 2083, Int16Array, v48); } catch (e) {}
let v53;
try { v53 = v11.some(v52); } catch (e) {}
try { v53.at(v5, v52, 3); } catch (e) {}
v11 = v5;
v48[-2] &= 2083;
v36[-1] -= 7;
let v55 = 10;
for (; v55--;) {
    v49.h;
    v49[Symbol.toPrimitive] = 7;
}
