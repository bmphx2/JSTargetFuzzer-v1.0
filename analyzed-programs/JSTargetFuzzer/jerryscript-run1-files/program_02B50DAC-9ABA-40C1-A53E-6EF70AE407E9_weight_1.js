new Uint8Array(4000);
Number.NaN = 23462;
const v8 = [Infinity,7.771821347908961e+307,0.47279638134182167,1000000.0,-1000.0,-924781.997015073,6.566625761778173,1000000000000.0,1000000000.0];
const v9 = [-361040.7831500884,-1.7976931348623157e+308,-8.997086225431573];
const v12 = [v9,[13,v8]];
function f13() {
    return v12;
}
class C14 extends f13 {
}
new C14();
const v18 = new Int16Array(5);
const v21 = new BigInt64Array(1052);
new Set([5.0]);
const v26 = new Date();
function f27(a28, a29) {
    const o30 = {
        "e": a29,
        "b": f27,
        [a29]: a29,
        "c": v26,
        "g": a29,
        ...a28,
        ...a29,
        "a": a28,
        ...a28,
        __proto__: a28,
        "h": a28,
        ...Date,
        ...v26,
        ...v26,
    };
    return f27;
}
new Float32Array(9);
v21.toString = 5;
[] = v18;
v18[BigInt64Array];
const o39 = {
    "maxByteLength": 65535,
};
const v41 = new ArrayBuffer(1360, o39);
new Int16Array(v41);
new Float64Array(5);
new Int8Array(3);
function F51(a53, a54) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a54;
}
new F51(257n, 1073741825n);
const v56 = new F51(1073741825n, 257n);
let v57 = new F51(1073741825n, 255n);
const v62 = "length" | v56;
const o66 = {
    valueOf() {
        try { this["replace"](); } catch (e) {}
        const t56 = "fAll7";
        t56.__proto__ = "length";
        return v62;
    },
};
let v68 = 2;
Math.trunc(v57);
v57--;
v68--;
const v73 = [];
try { new v73(); } catch (e) {}
function F75() {
    if (!new.target) { throw 'must be called with new'; }
}
class C77 {
    constructor(a79, a80) {
        function f82() {
            arguments[536870912] = arguments;
            delete arguments[arguments];
            return a79;
        }
        f82();
    }
}
v68 << v57;
Math.floor(v57);
