function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -306645406;
    this.b = -306645406;
    this.c = -306645406;
}
new F0();
new F0();
const v5 = new F0();
class C6 {
    set c(a8) {
        this.d = v5;
        const v10 = Symbol.iterator;
        const o27 = {
            [v10]() {
                let v12 = 10;
                const o26 = {
                    next() {
                        v12--;
                        for (let i17 = 0; i17 < 3; i17++) {
                            typeof i17;
                        }
                        const v24 = v12 == 0;
                        const o25 = {
                            "done": v24,
                            "value": v12,
                        };
                        return o25;
                    },
                };
                return o26;
            },
        };
    }
}
const v28 = new C6();
const v29 = new C6();
new C6();
function f31() {
    return v28;
}
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const v70 = new URIError(512);
const v73 = new Int16Array(447);
new Uint32Array(2438);
function f80() {
}
v70.description <<= 2006448021;
const v88 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v88.copyWithin(v88, 129));
new Uint8Array(0);
const v98 = [-8,4294967295,148900462];
let v99 = RegExp.bind("2147483647", v98);
const v101 = new BigUint64Array(127);
function f102(a103, a104) {
    const o107 = {
        __proto__: v29,
        "c": 1.4266636170347573e+308,
        get f() {
            delete this[this];
            return this;
        },
        "f": a103,
        ...v99,
        "e": a104,
    };
    return o107;
}
f102(v99, 26357);
f102(v98, 26357);
f102(v88, 2);
v99 /= v101;
new WeakSet();
new BigInt64Array(2, -14, v73);
([5]).reverse();
