function f0() {
}
class C1 extends f0 {
    o() {
        this[f0];
        new f0();
        try {
            let v5 = super.n(this, f0);
            let v6 = 0;
            while (v6 < 7) {
                v5 = this;
                v6++;
            }
        } catch(e10) {
        }
        return f0;
    }
    constructor() {
        super();
        let v12 = f0 == this;
        v12 -= v12;
        const v14 = [];
        Reflect.apply(this.o, this, v14);
    }
}
const v17 = new C1();
const v18 = new C1();
const v19 = new C1();
const v23 = [v17,14,-54555,14];
const v24 = [v23,v23,f0,C1,v23];
const v25 = [f0,v23,v18,v17,-54555];
function f26(a27, a28, a29) {
    const o30 = {
        __proto__: a27,
        "c": a28,
        "h": -54555,
        "g": v17,
        "d": v24,
        [v25]: a27,
        "b": a28,
        "f": v25,
        ...a28,
        "a": v17,
        "e": -268435456,
        ...C1,
        ...v17,
        ...v23,
        ...v19,
    };
    return o30;
}
f26(v24, v17, -268435456);
f26(f26(v25, v18, 14), v18, -54555);
function f34() {
}
const v37 = new Int32Array(3713);
const v40 = new Uint16Array(1024);
const v43 = new Uint8ClampedArray(5);
const v44 = [-14,-1731844252,7,-6,10,11,2147483649];
[127,268435439,8,127,-1049439289];
const v46 = [9,-65535];
v37.g = Uint16Array;
function f47(a48, a49) {
    v46["keys"](...v44, a49, ...v43, 5, ..."keys");
}
const v53 = new Promise(f47);
let v55 = v53["catch"](f34);
v55 = v40;
