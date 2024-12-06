function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = "yEu";
    t2.c = a6;
}
const v7 = new F3("yEu", "yEu");
new F3("object", "yEu");
const v9 = new F3("e", "e");
function f13(a14, a15) {
    const o34 = {
        set d(a17) {
            const v19 = Symbol.iterator;
            const o33 = {
                [v19]() {
                    let v21 = 10;
                    const o32 = {
                        next() {
                            v21--;
                            let v25;
                            try { v25 = new a17(F3, Symbol, this, Symbol); } catch (e) {}
                            ["0",v21,v19];
                            [v19,Symbol,f13,v21];
                            [v9,v25,this];
                            const v30 = v21 == 0;
                            const o31 = {
                                "done": v30,
                                "value": v21,
                            };
                            return o31;
                        },
                    };
                    return o32;
                },
            };
        },
    };
    return o34;
}
const v35 = v7;
Math.round("e");
Math.log2(4294967295);
Math.cosh(-5.0);
-(-5.0);
Math.atanh(7);
f13("e", v7);
f13("symbol", v7);
f13("yEu", Math);
new BigInt64Array(256);
const v56 = new Uint32Array(227);
new Uint16Array(129);
function F60(a62, a63) {
    if (!new.target) { throw 'must be called with new'; }
    const t52 = "XZIhy";
    t52.f = a63;
}
new F60(256, 129);
new F60(v56, 227);
new F60(v56, 129);
function f67() {
}
Object.defineProperty(v9, 0, { configurable: true, enumerable: true, get: f13, set: f13 });
v35[2] = 0.0;
Math.c;
const v77 = -128 * "yEu";
Math.min(v77);
~v77;
let v82 = Uint8Array;
new v82(227);
const v88 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v88);
v82 /= v88;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
