function f0() {
    function f3() {
        return 2.0;
    }
    const v4 = [f3];
    const v6 = [v4,v4];
    new WeakMap(v6);
    const o28 = {
        p() {
            return "function";
        },
        __proto__: "function",
        get a() {
            try {
            } catch(e11) {
                function f12(a13, a14, a15) {
                    return WeakMap;
                }
            }
            return this;
        },
        ["n"](a17) {
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a17;
                this.h = a21;
                a21.e = "n";
            }
            new F18(2.0, "function");
            const v23 = new F18("function", "n");
            new F18("n", v23);
            return 2.0;
        },
        [f0](a26, a27) {
            this[5] = a27;
            return v6;
        },
        1000: f3,
    };
    return f0;
}
const v29 = f0();
const v30 = f0();
const v31 = f0();
const v32 = [v30,f0,f0,v29];
const v33 = [v29,v31];
const v35 = new v30();
const o36 = {
};
async function f37(a38, a39, a40) {
    Object.defineProperty(o36, "a", { writable: true, configurable: true, get: v35 });
    return a38;
}
const v41 = f37(Int16Array, Int16Array, f37);
[v33,v32,v31];
const v43 = [8877,-48488,4294967296,-4294967297,16,-9007199254740992];
[15,0,9007199254740990,4294967297,-7];
[9,-9007199254740992,-1,-1434467368,16,49398,-13,536870912,-21671];
const o60 = {
    "a": v35,
    [v43]: v29,
    "b": Int16Array,
    "f": v41,
    121: f37,
    get h() {
        return this;
    },
    valueOf() {
        delete this[this];
        let v49;
        try { v49 = this.valueOf(); } catch (e) {}
        v49.__proto__ = this;
        return v49;
    },
    m(a51, a52, a53) {
        const o54 = {
        };
        const v58 = new BigUint64Array(512);
        v58.fill(-9223372036854775808);
        return a51;
    },
};
const v61 = o60.m;
const o62 = {
    ...v61,
};
