function f0() {
    const o9 = {
        set e(a5) {
            /\w|\d[\ca]/gisum;
            /foo(?=bar)baz/is;
            /M(x)(x)(x)\4*/yis;
        },
    };
    const o26 = {
        __proto__: 9007199254740990,
        "h": 9007199254740990,
        "b": 9007199254740990,
        [2.0](a11, a12) {
            a12[-1] = 2.0;
            const o13 = {
            };
            o13[2] = this;
            const o22 = {
                ...-11,
                __proto__: o13,
                valueOf(a19, a20) {
                    this - a19;
                    return a19;
                },
                "call": f0,
                "a": a11,
                "get": f0,
                "getOwnPropertyDescriptor": f0,
                "getPrototypeOf": f0,
                "setPrototypeOf": Proxy,
            };
            new Proxy(a11, o22);
            new Proxy(a12, o13);
            return o13;
        },
        "d": -11,
        1078: 2.0,
        "f": 9007199254740990,
    };
    return o26;
}
f0();
f0();
f0();
new Int16Array(12);
new Uint8ClampedArray(256);
new Uint16Array(10);
function F43(a45, a46) {
    if (!new.target) { throw 'must be called with new'; }
    for (const v48 in "delete") {
    }
}
let v49 = new F43(F43, F43);
const v51 = new Uint32Array(181);
let v53 = BigUint64Array;
new v53(1);
let v55 = 253;
[v55,,v53,v49] = v51;
([8]).push(-4294967296, -4294967295n);
("9").replace("9");
try { v53["abs"](181, v55, v53); } catch (e) {}
new Uint16Array(v55);
try { Uint32Array(Symbol, Uint32Array, Symbol); } catch (e) {}
function f76(a77, a78, a79) {
    const o87 = {
        o(a81, a82, a83, a84) {
            eval();
            return a79;
        },
    };
    return a79;
}
for (let i89 = 0; i89 < 2; i89++) {
    const v95 = new Function("x");
    v95.name;
}
Function();
