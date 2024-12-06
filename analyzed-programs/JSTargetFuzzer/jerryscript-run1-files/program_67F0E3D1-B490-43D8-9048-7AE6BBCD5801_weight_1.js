function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -355677476;
    this.c = -355677476;
}
new F0();
new F0();
const v5 = new F0();
function f6() {
    return v5;
}
let v8 = 536870887;
class C10 {
    [7] = 7;
    e = -7117;
    static set h(a12) {
        for (let v13 = 0; v13 < 9; v13++) {
            [...v8] = a12;
            a12 <<= v13;
        }
        for (let v14 = 0; v14 < 32; v14++) {
            this["p" + v14] = v14;
        }
    }
}
new C10();
new C10();
new C10();
const v25 = new Float64Array(231);
function f26(a27, a28, a29) {
    return f26;
}
const v31 = new Uint32Array();
const o32 = {
};
const v34 = new Proxy(v31, o32);
function F35(a37, a38, a39, a40) {
    if (!new.target) { throw 'must be called with new'; }
    v34.toString = f26;
}
const v41 = new F35();
new F35(Proxy, v41, v41, v31);
function f43() {
    return f43;
}
class C44 extends f43 {
}
try {
    function f45() {
        return C44;
    }
    function f46(a47, a48, a49, a50) {
        const o51 = {
            "construct": f45,
        };
        return a48;
    }
} finally {
}
3650 * v25;
-1679320101 === 1341;
