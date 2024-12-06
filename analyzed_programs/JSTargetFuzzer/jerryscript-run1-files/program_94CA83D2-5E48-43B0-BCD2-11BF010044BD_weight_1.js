const v0 = [];
function f1() {
    const o6 = {
        get d() {
            e = this;
            const v3 = super.a;
            super.e = v3;
            try { v3(v0); } catch (e) {}
            function f5() {
                return v3;
            }
            return v3;
        },
        "c": v0,
        "b": v0,
        ...v0,
    };
    return o6;
}
const v7 = f1();
const v8 = f1();
const v9 = f1();
function f10() {
    return f1;
}
class C11 {
    static o(a13, a14, a15) {
        return delete v0[2460];
    }
    o(a18, a19, a20) {
        a18 ** this;
        const v22 = f1();
        Object.defineProperty(v8, "d", { writable: true, set: f10 });
        super.h = f1;
        const v23 = v8.c;
        function F24(a26, a27, a28) {
            if (!new.target) { throw 'must be called with new'; }
            this.d = f1;
            this.f = v9;
            v22[21] = v23;
            this.a = f10;
            for (let v29 = 0; v29 < 32; v29++) {
                v23["p" + v29] = v29;
            }
            this.c = a27;
        }
        new F24(a18, v23, a20);
        new F24(v23, v7, v7);
        new F24(a20, v8, v7);
        return f1;
    }
}
const v35 = new C11();
const v36 = new C11();
new C11();
function f38(a39, a40) {
    const o58 = {
        __proto__: v35,
        [v0]: v7,
        get a() {
            f1 ^ this;
            const v44 = Symbol.iterator;
            const o57 = {
                [v44]() {
                    let v46 = 10;
                    const o56 = {
                        next() {
                            v46--;
                            function f49() {
                                this.g;
                                return arguments;
                            }
                            f49(f49, a40);
                            const v54 = v46 == 0;
                            const o55 = {
                                "done": v54,
                                "value": v46,
                            };
                            return o55;
                        },
                    };
                    return o56;
                },
            };
            return a40;
        },
    };
    return o58;
}
f38(v7, v36);
f38(v9, v36);
f38(v36, v36);
let v63 = 536870912;
let v64 = 1073741824;
class C65 {
    constructor(a67) {
        let v68 = 127 + v64;
        v63 *= v68;
        v68++;
        127 && 31657;
        Math.atanh(31657);
        Math.log10(31657);
        v64 ^ 127;
        --v64;
    }
}
const v77 = new C65(v64);
const v78 = new C65(v64);
new C65(v64);
v78.d = v77;
let v87 = 1470252707;
const v88 = v87++;
Math.log1p(v88);
65536 << v88;
for (let v91 = 0; v91 < 32; v91++) {
    C65["p" + v91] = v91;
}
