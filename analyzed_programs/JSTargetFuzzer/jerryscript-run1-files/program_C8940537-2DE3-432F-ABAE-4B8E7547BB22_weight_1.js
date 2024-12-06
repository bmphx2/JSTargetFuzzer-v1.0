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
    const o49 = {
        129: a32,
        [a31]: v21,
        "b": v22,
        "h": v29,
        m(a34) {
            Number(5n);
            const v45 = [-41810,1760702626,2147483649,14,-1,11,-96478631,701517730];
            try { v45.reduceRight(); } catch (e) {}
            ("10000")["endsWith"](65535);
            v21[2147483648];
            return a31;
        },
    };
    return o49;
}
const v50 = f30(v29, v21);
f30(v29, v21);
f30(v29, v29);
[-51113,4,11955,1227781436];
[-49726,907886158,-6,16,268435456,-11,248806450,-2147483648,268435439,268435456];
[37828,65536,327,10000,-1,-8,-65535];
new BigUint64Array(v50);
new Uint32Array(255);
new Int16Array(8);
let v67 = -20593;
class C68 {
    constructor(a70) {
        const v72 = [];
        Reflect.apply(("SevCf").trimStart, this, v72);
        -2.220446049250313e-16 & "SevCf";
    }
    static o(a77, a78) {
        new Uint8Array(8);
        new Uint16Array(181);
        new Int32Array(367);
        return Uint16Array;
    }
}
const v88 = new C68(v67);
const v89 = new C68(-2.220446049250313e-16);
const v90 = new C68(v88);
const v92 = new Set();
function f93() {
    return "SevCf";
}
class C94 extends f93 {
    65537;
    constructor(a96, a97) {
        super();
        switch (a96) {
            default:
                --v67;
                var d = v90;
                break;
        }
        v92 % this;
        const v101 = Symbol.iterator;
        const o110 = {
            [v101]() {
                let v103 = 10;
                const o109 = {
                    next() {
                        v103--;
                        const v107 = v103 == 0;
                        const o108 = {
                            "done": v107,
                            "value": v103,
                        };
                        return o108;
                    },
                };
                return o109;
            },
        };
        return o110;
        function f111() {
        }
        ([1073741824,13,65535,53754,-65537,5450,1073741825,-675462158,-1385526357])["filter"](f111);
    }
}
const v115 = new C94(v89, v90);
new C94(v88, C94);
new C94(C68, 8);
v89 | v89;
v89["m"];
if (v89 == v115) {
    let v125 = 436817333;
    const v126 = v125--;
    let v127 = ~C94;
    Math.clz32(v125);
    --v127;
    Math.sin(v127);
    v127 ^ v126;
    !"string";
} else {
    C94.valueOf = f93;
}
