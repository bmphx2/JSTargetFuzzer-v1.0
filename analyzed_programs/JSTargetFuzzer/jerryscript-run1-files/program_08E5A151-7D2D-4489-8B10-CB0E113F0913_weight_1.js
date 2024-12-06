new Int32Array(148);
new Int16Array(7);
new BigInt64Array(786);
new Uint8Array(3);
new Int8Array(257);
const v20 = new Int8Array(1024);
function f21(a22, a23) {
    const o33 = {
        __proto__: a23,
        "g": a23,
        ...v20,
        get a() {
            let [,v25] = v20;
            try { a23(v25, 65537); } catch (e) {}
            return 0;
        },
    };
    return o33;
}
f21(1024, 536870912);
f21(65537, 536870912);
f21(7, -9223372036854775808);
function f37() {
}
const v48 = ("symbol")[5];
v48 < v48;
v48[257] = "symbol";
f37(..."10", ..."unscopables", ..."symbol", "W");
new Uint8ClampedArray(9);
new Int8Array(2);
new Float32Array(15);
