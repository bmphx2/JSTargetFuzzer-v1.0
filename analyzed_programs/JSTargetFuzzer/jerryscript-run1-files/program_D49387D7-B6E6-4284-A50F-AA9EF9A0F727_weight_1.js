const v2 = new Float64Array(9);
const v5 = new Float64Array(255);
let v7 = Uint32Array;
const v8 = new v7(10);
let v9;
try { v9 = v2.entries(); } catch (e) {}
new Float64Array(10, v9, v9);
let v11;
try { v11 = v9(v8, v8, v9, v2); } catch (e) {}
new Float64Array(10, 9, v11);
v7 = v11;
function f13(a14, a15, a16) {
    const o40 = {
        set g(a18) {
            const v19 = v5[824484902];
            function F20(a22, a23, a24) {
                if (!new.target) { throw 'must be called with new'; }
                a24.f = v19;
                this[this];
                const v27 = Symbol.iterator;
                const o36 = {
                    [v27]() {
                        let v29 = 10;
                        const o35 = {
                            next() {
                                v29--;
                                const v33 = v29 == 0;
                                const o34 = {
                                    "done": v33,
                                    "value": v29,
                                };
                                return o34;
                            },
                        };
                        return o35;
                    },
                };
                this.e = Float64Array;
                this.b = a14;
            }
            new F20(255, 255, a15);
            new F20(9, a16, a14);
            new F20(a16, v19, a16);
        },
    };
    return o40;
}
f13(255, 9, 255);
const o42 = {
    __proto__: v8,
    9: v2,
    "e": Float64Array,
};
f13(255, 9, 10);
f13(9, 10, 10);
new BigInt64Array(256);
const v53 = new Uint32Array(227);
new Uint16Array(129);
function F57(a59, a60) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a60;
}
new F57(256, 129);
new F57(v53, 227);
new F57(v53, 129);
function f64() {
}
new Uint8Array(227);
let v78 = RegExp.bind("2147483647", [-8,4294967295,148900462]);
new Int32Array(v78);
v78 /= v78;
new WeakSet();
new BigInt64Array(2);
([5]).reverse();
