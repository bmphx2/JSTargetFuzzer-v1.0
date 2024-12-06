class C3 {
    static valueOf(a5) {
        const t2 = 1e-15;
        t2.__proto__ = a5;
        return a5;
    }
    o(a7) {
        let v8 = 0;
        while (v8 < 8) {
            v8++;
        }
        return 1e-15;
    }
}
const v15 = new C3();
new C3();
const v17 = new C3();
class C18 extends C3 {
    constructor(a20, a21) {
        super();
        const v25 = -(-40226);
        (-40226) ** 257;
        Math.expm1(-40226);
        let v28 = v25 % v25;
        --v28;
        -40226 >>> -40226;
    }
    c = v15;
}
const v31 = new C18(v15, v15);
const v32 = new C18(v17, v17);
new C18(v32, v31);
const v39 = new Array(10);
let v41 = 4096;
function f43(a44, a45, a46, a47) {
    const o57 = {
        "d": v41,
        ...a47,
        "e": a45,
        set b(a49) {
            function F50(a52, a53) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a52;
            }
            new F50(a47, 129);
            new F50(a46, a46);
            new F50(F50, 481111932);
        },
    };
    return o57;
}
let v58 = f43(v41, 481111932, 129, v39);
f43(10, 481111932, 10, f43);
f43(v58, v41, 481111932, v41);
v58.g;
try {
    let v62;
    try { v62 = v58.isSealed(); } catch (e) {}
    v58 = v62;
    v41 = v62;
} catch(e63) {
    e63[0] = e63;
    try { e63(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
