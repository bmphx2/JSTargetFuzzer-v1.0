function f0() {
}
function f1() {
    const o14 = {
        [f0]() {
            f0();
            const o4 = {
            };
            let v6 = 0;
            do {
                c = f0;
                this.__proto__;
                v6++;
            } while (v6 == 10)
            new Proxy(f0, o4, f1);
            let [,,v12,...v13] = this;
            return Proxy;
        },
        1931: f0,
        "c": f0,
        2: f0,
        "a": f0,
    };
    return o14;
}
const v15 = f1();
const v16 = f1();
const v17 = f1();
function f18(a19, a20) {
    const o21 = {
        3: f0,
    };
    return o21;
}
f18(v17, v17);
const v23 = f18(v17, v17);
const v24 = f18(v23, v23);
function f25() {
    return f1;
}
function* f26(a27, a28) {
    a28[Symbol.isConcatSpreadable] = v24;
    yield a27;
    return v23;
}
f26(v15, v16);
[v17,v15,-6];
const v35 = [v16,v15];
const v36 = [v16,v16];
v35[8] = v35;
f1 == v36;
new Uint8Array(71);
new Uint8ClampedArray(3);
new BigUint64Array(255);
([363539.4421347175]).every(parseFloat);
