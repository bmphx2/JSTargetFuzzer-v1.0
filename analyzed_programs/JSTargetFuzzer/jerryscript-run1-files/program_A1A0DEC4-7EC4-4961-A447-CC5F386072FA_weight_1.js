class C3 {
    static set b(a5) {
        function F6(a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            this.a = a8;
        }
        new F6(a5, 11);
        new F6(129, -2);
        new F6(129, a5);
    }
    [11] = 11;
    c;
    static [129];
    static [11];
    static [-2] = -2;
}
const v13 = new C3();
const v14 = new C3();
const v15 = new C3();
function f16(a17, a18) {
    Symbol.match;
    function F21() {
        if (!new.target) { throw 'must be called with new'; }
    }
    class C23 extends F21 {
    }
    const v24 = new C23();
    const v25 = [F21,F21,F21,F21];
    const v26 = [v24,v24];
    const v28 = v26[536870912];
    let v29;
    try { v29 = v28(); } catch (e) {}
    const v31 = new Uint8Array(v26, v28, v29);
    const v32 = ("seal").replaceAll(v29, v29);
    const v33 = v31[v25];
    try { new Uint8Array(v32, v24, v33, v33, ...v29); } catch (e) {}
    const o66 = {
        "h": a18,
        "f": v14,
        "b": a17,
        5: 11,
        __proto__: v15,
        valueOf(a36, a37, a38) {
            let {"c":v39,"f":v40,"h":v41,...v42} = this;
            let v44 = 268435439;
            const v47 = v44 ^ -2;
            function F48(a50, a51) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v53 = new F48();
            String(v53);
            Math.log(-2);
            ++v44;
            -(-1000000.0);
            -v47;
            `f${C3}MIN_SAFE_INTEGER`;
            v13[4089];
            !-2;
            Math.hypot(a36);
            return this;
        },
    };
    const t62 = [];
    t62.valueOf = Int32Array;
    Error(Error);
    return o66;
}
f16(129, 129);
f16(129, 11);
f16(129, -2);
class C78 extends (5).constructor {
}
if (v14) {
    function F79(a81, a82) {
        if (!new.target) { throw 'must be called with new'; }
        a82(F79);
    }
}
function F85(a87) {
    if (!new.target) { throw 'must be called with new'; }
}
class C88 extends F85 {
    constructor(a90, a91, a92) {
    }
    get e() {
        try { v14.toString(); } catch (e) {}
        super.e;
        a = 129;
        return C3;
    }
    /*
    constructor(a97, a98, a99) {
        let v100 = 2110820557n;
        v100 /= 11n;
    }
    */
}
