function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
const o5 = {
};
const v7 = new Proxy(v4, o5);
v7 > v7;
new Int32Array(148);
new Int16Array(7);
new BigInt64Array(786);
new Uint8Array(3);
new Int8Array(257);
const v27 = new Int8Array(1024);
function f28(a29, a30) {
    const o40 = {
        __proto__: a30,
        "g": a30,
        ...v27,
        get a() {
            let [,v32] = v27;
            try { a30(v32, 65537); } catch (e) {}
            return 0;
        },
    };
    return o40;
}
f28(1024, 536870912);
f28(65537, 536870912);
f28(7, -9223372036854775808);
function f44() {
}
const v55 = ("symbol")[5];
v55 < v55;
v55[257] = "symbol";
f44(..."10", ..."unscopables", ..."symbol", "W");
new Uint8ClampedArray(9);
new Int8Array(2);
new Float32Array(15);
