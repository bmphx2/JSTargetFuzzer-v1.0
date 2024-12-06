function f0() {
    let v3 = -12;
    const o14 = {
        __proto__: "undefined",
        p(a5, a6) {
            return -10;
        },
        1: -10,
        n(a11) {
            --v3;
            return super.c;
        },
        "d": "undefined",
        2: v3,
        "b": "undefined",
        [v3]: "undefined",
        ..."undefined",
        "e": -10,
    };
    return o14;
}
const v15 = f0();
f0();
const v17 = f0();
const v20 = new Int32Array(3752);
const v24 = new Set();
for (let v25 = 0; v25 < 32; v25++) {
    v24["p" + v25] = v25;
}
const v29 = new Uint16Array(5);
const v32 = new Uint32Array(64);
const v34 = new WeakSet();
class C35 {
    static [v34] = v32;
    toString(a37, a38, a39) {
        try { a38["p"](...Uint32Array, a37, WeakSet, v29); } catch (e) {}
        return C35;
    }
    7 = v17;
}
const v42 = new C35();
const v43 = new C35();
const v44 = new C35();
class C45 {
    constructor(a47, a48) {
        v42[a48] = Int32Array;
        function F49(a51, a52, a53) {
            if (!new.target) { throw 'must be called with new'; }
            this.g = a47;
            this.f = v20;
            this.c = 5;
        }
        const v54 = new F49(v43, 5, a48);
        new F49(v44, 64, 3752);
        new F49(v20, C45, 3752);
        function f57() {
            return arguments;
        }
        const v59 = f57();
        v44.valueOf = a48;
        v54 instanceof Uint16Array;
        v42.a;
        [[v15,[v44,Uint16Array,f57,this,this]],3752,a47];
        function f66() {
            const o73 = {
                [v20](a68, a69, a70, a71) {
                    try { a69(a69); } catch (e) {}
                    return a68;
                },
                [this]: v20,
                ...v59,
            };
            return o73;
        }
        f66();
        f66();
    }
}
new C45(C45, C45);
