class C3 {
    get b() {
        ("number")[this];
        for (let v6 = 0; v6 < 32; v6++) {
            this["p" + v6] = v6;
        }
        return this;
    }
    toString(a10) {
        const t9 = "j43G";
        t9[a10] /= a10;
        const o11 = {
        };
        new Proxy(this, o11);
        return 0;
    }
}
const v14 = new C3();
const v15 = new C3();
const v16 = new C3();
function f17(a18, a19, a20, a21) {
    const o28 = {
        ...C3,
        __proto__: v15,
        "a": "number",
        ["number"]: a18,
        get b() {
            a20.g = 0;
            const v24 = [a18,this,a20,v14];
            Reflect.apply(a20.toString, this, v24);
            try { v15.toString(); } catch (e) {}
            return a19;
        },
        "e": v15,
        "h": a21,
    };
    return o28;
}
const v29 = f17(v15, C3, v14, v14);
const v30 = f17(v16, v14, v16, v14);
f17(v14, v29, v16, "j43G");
new Map();
[0];
const v35 = ["number",v30,v14,"number"];
[v35,v15,0,v35];
const v42 = new Float32Array(16);
new BigUint64Array(129);
new Float32Array(837);
class C52 {
    constructor(a54) {
        const v56 = [];
        const v57 = ("SevCf").trimStart;
        Reflect.apply(v57, this, v56);
        const v59 = -2.220446049250313e-16 & v57;
        function f60(a61) {
            return v59;
        }
        class C62 extends f60 {
            246 = v42;
        }
    }
    static o(a64, a65) {
        new Uint8Array(8);
        new Uint16Array(181);
        new Int32Array(367);
        return Uint16Array;
    }
}
const v75 = new C52(-20593);
const v76 = new C52(-2.220446049250313e-16);
const v77 = new C52(v75);
const v79 = new Set();
function f80() {
    return "SevCf";
}
class C81 extends f80 {
    65537;
    constructor(a83, a84) {
        super();
        switch (a83) {
            default:
                --a83;
                var d = v77;
                break;
        }
        v79 % this;
        const v88 = Symbol.iterator;
        const o97 = {
            [v88]() {
                const o96 = {
                    next() {
                        let v91 = this;
                        v91--;
                        const v94 = 10 == 0;
                        const o95 = {
                            "done": v94,
                            "value": 10,
                        };
                        return o95;
                    },
                };
                return o96;
            },
        };
    }
}
const v98 = new C81(v76, v77);
const v99 = new C81(v75, v35);
const v100 = new C81(C52, v99);
v76 | v76;
(837)[v100];
if (v79 == v98) {
    let v108 = 436817333;
    const v109 = v108--;
    let v110 = ~C81;
    Math.clz32(v108);
    --v110;
    Math.sin(v110);
    v110 ^ v109;
    !"string";
} else {
    C81.valueOf = Set;
}
