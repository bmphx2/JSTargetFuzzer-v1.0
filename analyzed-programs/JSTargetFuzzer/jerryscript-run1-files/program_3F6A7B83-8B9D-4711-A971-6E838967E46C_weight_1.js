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
            } while (v6 < 10)
            new Proxy(f0, o4);
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
function f18() {
    return f1;
}
[v17,v15,-6];
const v21 = [v16,v15];
const v22 = [v16,v16];
v21[8] = v21;
f1 == v22;
new Uint8Array(71);
new Uint8ClampedArray(3);
new BigUint64Array(255);
([363539.4421347175]).every(parseFloat);
