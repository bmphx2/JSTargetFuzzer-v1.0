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
        const o19 = {
            [v10]() {
                let v12 = 10;
                const o18 = {
                    next() {
                        v12--;
                        const v16 = v12 == 0;
                        const o17 = {
                            "done": v16,
                            "value": v12,
                        };
                        return o17;
                    },
                };
                return o18;
            },
        };
    }
}
const v20 = new C6();
new C6();
new C6();
function f23() {
    return v20;
}
new Int8Array(168);
new Int32Array(9);
new Int16Array(2);
new Set();
new WeakMap();
new WeakSet();
const v62 = new URIError(512);
const v65 = new Int16Array(447);
new Uint32Array(2438);
function f72() {
}
v62.description <<= 2006448021;
const v80 = [2.220446049250313e-16,-1.7976931348623157e+308,-3.4833326659982795,-1000000000000.0,0.0,2.220446049250313e-16,-4.191721618721404,1.4104645033139904e+308];
("1073741824").match(v80.copyWithin(v80, 129));
new Uint8Array(0);
const v90 = [-8,4294967295,148900462];
let v91 = RegExp.bind("2147483647", v90);
const v93 = new BigUint64Array(127);
function f94(a95, a96) {
    const o97 = {
        "f": a95,
        ...v91,
        "e": a96,
    };
    return o97;
}
f94(v91, 26357);
f94(v90, 26357);
f94(v80, 2);
v91 /= v93;
new WeakSet();
new BigInt64Array(2, -14, v65);
([5]).reverse();
