function f0() {
    function f3() {
        return 2.0;
    }
    const v4 = [f3];
    new WeakMap([v4,v4]);
    const o25 = {
        p() {
            return "function";
        },
        __proto__: "function",
        get a() {
            try {
            } catch(e11) {
                function f12(a13, a14, a15) {
                    return f12;
                }
            }
            return this;
        },
        ["n"](a17) {
            function F18(a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.c = a17;
                this.h = a21;
                this.e = "n";
            }
            new F18(2.0, "function");
            const v23 = new F18("function", "n");
            new F18("n", v23);
            return 2.0;
        },
    };
    return f0;
}
const v26 = f0();
const v27 = f0();
const v28 = f0();
const v29 = [v27,f0,f0,v26];
const v30 = [v27,v28];
const v32 = new Int16Array();
const o33 = {
};
async function f34(a35, a36, a37) {
    Object.defineProperty(o33, "a", { writable: true, configurable: true, get: v32 });
    return a35;
}
f34(Int16Array, Int16Array, f34);
[v30,v29,v28];
[8877,-48488,4294967296,-4294967297,16,-9007199254740992];
[15,0,9007199254740990,4294967297,-7];
[9,-9007199254740992,-1,-1434467368,16,49398,-13,536870912,-21671];
const o57 = {
    get h() {
        return this;
    },
    valueOf() {
        delete this[this];
        let v46;
        try { v46 = this.valueOf(); } catch (e) {}
        v46.__proto__ = this;
        return v46;
    },
    m(a48, a49, a50) {
        const o51 = {
        };
        const v55 = new BigUint64Array(512);
        v55.fill(-9223372036854775808);
        return o33;
    },
};
const v58 = o57.m;
const o59 = {
    ...v58,
};
