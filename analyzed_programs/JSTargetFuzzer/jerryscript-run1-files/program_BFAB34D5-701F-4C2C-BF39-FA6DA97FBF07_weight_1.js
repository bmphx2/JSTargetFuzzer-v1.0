function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = false;
    this.h = false;
    this.c = false;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v3;
}
new F9(v4, "string", "d", "number");
new F9(v5, "string", v5, "number");
const v17 = new F9(v4, "string", v4, "string");
[v17,false,"number"];
const v19 = [v17,"number",v17];
[v19,v19,false,false];
const v21 = [-4.0,5.267598917723435,-996.6120199189111,1e-15,2.0,-7.148815115622263,-313951.5478481223];
const v22 = [-847.679624957061,-5.0,-14850.162098716013,4.83379548594629,1e-15,-Infinity];
function f23(a24, a25) {
    a25();
    return f23;
}
new Promise(f23);
const v29 = [-Infinity,1.0808308614091993e+308];
function f30(a31, a32) {
    const o55 = {
        129: a32,
        [a31]: v21,
        "b": v22,
        "h": v29,
        m(a34) {
            const v37 = new BigInt64Array(1148);
            for (const v38 in v37) {
                14 + v38;
            }
            Number(5n);
            const v51 = [-41810,1760702626,2147483649,14,-1,11,-96478631,701517730];
            try { v51.reduceRight(); } catch (e) {}
            ("10000")["endsWith"](65535);
            v21[2147483648];
            return a31;
        },
    };
    return o55;
}
const v56 = f30(v29, v21);
f30(v29, v21);
f30(v29, v29);
[-51113,4,11955,1227781436];
[-49726,907886158,-6,16,268435456,-11,248806450,-2147483648,268435439,268435456];
[37828,65536,327,10000,-1,-8,-65535];
new BigUint64Array(v56);
new Uint32Array(255);
new Int16Array(8);
let v73 = -20593;
class C74 {
    constructor(a76) {
        const v78 = [];
        Reflect.apply(("SevCf").trimStart, this, v78);
        -2.220446049250313e-16 & "SevCf";
    }
    static o(a83, a84) {
        new Uint8Array(8);
        new Uint16Array(181);
        new Int32Array(367);
        return Uint16Array;
    }
}
const v94 = new C74(v73);
const v95 = new C74(-2.220446049250313e-16);
const v96 = new C74(v94);
const v98 = new Set();
function f99() {
    return "SevCf";
}
class C100 extends f99 {
    65537;
    constructor(a102, a103) {
        super();
        switch (a102) {
            default:
                --v73;
                var d = v96;
                break;
        }
        v98 % this;
        const v107 = Symbol.iterator;
        const o116 = {
            [v107]() {
                let v109 = 10;
                const o115 = {
                    next() {
                        v109--;
                        const v113 = v109 == 0;
                        const o114 = {
                            "done": v113,
                            "value": v109,
                        };
                        return o114;
                    },
                };
                return o115;
            },
        };
        return o116;
        function f117() {
        }
        ([1073741824,13,65535,53754,-65537,5450,1073741825,-675462158,-1385526357])["filter"](f117);
    }
}
const v121 = new C100(v95, v96);
new C100(v94, C100);
new C100(C74, 8);
v95 | v95;
v95["m"];
if (v95 == v121) {
    let v131 = 436817333;
    const v132 = v131--;
    let v133 = ~C100;
    Math.clz32(v131);
    --v133;
    Math.sin(v133);
    v133 ^ v132;
    !"string";
} else {
    C100.valueOf = f99;
}
