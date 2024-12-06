function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1357571296;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
function f6(a7, a8) {
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v11 = new F9();
    class C12 extends F9 {
    }
    const v13 = new C12();
    const v14 = [F9,F9,F9,F9];
    const v15 = [v13,v13];
    const v17 = v15[536870912];
    let v18;
    try { v18 = v17(); } catch (e) {}
    const v20 = new Uint8Array(v15, v17, v18);
    const v22 = new Uint8ClampedArray(C12, v18, v18);
    const v23 = ("seal").replaceAll(v18, v18);
    v22["set"](v11);
    const v26 = v20[v14];
    try { new Uint8Array(v23, v13, v26, v26, ...v18); } catch (e) {}
    const o35 = {
        n(a29, a30) {
            a7[1] = v5;
            return a8;
        },
        "e": a8,
        get c() {
            const v33 = new WeakMap();
            try { v33.get(v3); } catch (e) {}
            return v4;
        },
    };
    try {
    } catch(e36) {
        function f37(a38, a39, a40) {
            return f37;
        }
    }
    return o35;
}
f6(v5, v5);
f6(f6, v3);
f6(v3, v3);
const v48 = new BigUint64Array(BigUint64Array, BigUint64Array, BigUint64Array);
new Uint8ClampedArray(3598);
const v54 = 2147483649 && -2147483649n;
v54 & v54;
v48[Symbol.iterator] = 7;
const v60 = new Float32Array(Symbol, 7, 7);
v60[-1] = BigUint64Array;
