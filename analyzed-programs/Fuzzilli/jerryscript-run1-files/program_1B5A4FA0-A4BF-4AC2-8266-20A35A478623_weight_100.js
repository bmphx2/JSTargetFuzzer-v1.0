function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = f0;
}
const v3 = new F1();
let v4 = new F1();
const v5 = new F1();
const v6 = new f0();
const v8 = Symbol.iterator;
const o17 = {
    [v8]() {
        let v10 = 10;
        const o16 = {
            next() {
                v10--;
                const v14 = v10 == 0;
                const o15 = {
                    "done": v14,
                    "value": v10,
                };
                return o15;
            },
        };
        return o16;
    },
};
class C18 extends f0 {
    static p(a20, a21) {
        a20.valueOf = f0;
        const v23 = super.e;
        this[v4 = this] = C18;
        v3.c *= C18;
        arguments.c = this;
        a20 /= a21;
        a21 ^ arguments;
        a20 * F1;
        try { v23.valueOf(); } catch (e) {}
        return v5;
    }
    f;
    static [v3] = f0;
    static [v4] = v4;
}
new C18();
const v28 = new C18();
new C18();
const v30 = [681637401,2147483649,-4294967296,1000,-44484,-4294967296];
[256,127,8,-978043057,16,1773011285,127,1073741825];
[617158011,-9007199254740990];
let v35 = 6;
const v36 = v35--;
2 % 2;
const v38 = -v35;
Math.random();
v36 || !v38;
const v43 = new Uint8ClampedArray(2);
const v46 = new Float32Array(13);
const v49 = new Float64Array(7);
v30.valueOf = f0;
delete v5[v46];
const o53 = {
    "maxByteLength": 4294967295,
    "f": F1,
    __proto__: v28,
    "h": f0,
    "c": v6,
    "g": Uint8ClampedArray,
};
const v55 = new ArrayBuffer(64, o53);
new Uint8ClampedArray(v55);
new Float64Array(128);
const v63 = new Uint16Array(1000, Uint16Array);
new Float32Array(4081);
let v67 = 10;
for (;
    (() => {
        const v68 = v67--;
        const v69 = [-1658616837,-4294967296,2147483648,-221122270,-9007199254740990,-65536,234770389,2,65537];
        const o70 = {
            "prototype": v69,
        };
        return v68;
    })();
    (() => {
        let v74;
        try { v74 = ("number").codePointAt(1000); } catch (e) {}
        ("boolean")[v74];
    })()) {
    v43[8] = v63;
    const t91 = "subarray";
    t91.a = v43["subarray"](4081, 2);
    const t93 = "subarray";
    t93[-2147483647n] = v49;
    Math.acos(Math);
    Math.E;
    const o88 = {
    };
    new Proxy(Math, o88);
}
