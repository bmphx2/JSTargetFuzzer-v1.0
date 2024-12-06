let v2 = new Int32Array(7);
const v5 = new BigInt64Array(3);
if (BigInt64Array) {
    v2 <<= v2;
} else {
    for (let v6 = 0; v6 < 32; v6++) {
        const v8 = "p" + v6;
        function f9(a10, a11, a12, a13) {
            try { a11.p(3, v6); } catch (e) {}
            return v8;
        }
        f9(Int32Array, 7, v6, 3);
        v2[v8] = v6;
    }
}
new Uint16Array(3);
class C22 extends Int32Array {
    get a() {
        const o24 = {
        };
        new Proxy(Uint16Array, o24);
        let v34 = 3.0 ^ v5;
        let v35 = v34++;
        ++v35;
        Math.sqrt(v35);
        const o38 = {
            "maxByteLength": 20,
        };
        const v40 = new SharedArrayBuffer(20, o38);
        new BigInt64Array(v40);
        return 754.0466414981913;
    }
    e;
    static [Int32Array] = Uint16Array;
    [Int32Array] = v2;
    c = 3;
}
new C22();
new C22();
new C22();
function f47() {
    return 3;
}
const v48 = [1073741823,45671,2,-1564349818,62319,-1584081008,9007199254740991];
function f49() {
    return f49;
}
const v51 = [f49];
Reflect.apply(v48.sort, v48, v51);
