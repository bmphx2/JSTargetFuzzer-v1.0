function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 3;
    this.h = 3;
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        const o9 = {
        };
        new Proxy(F0, o9);
        g = a7;
        this.h = a6;
    }
    new F4(3, 3, 1525);
    this.e = 3;
}
const v13 = new F0();
const v14 = new F0();
const v15 = new F0();
function f22(a23, a24) {
    const o51 = {
        __proto__: v14,
        "h": a24,
        get f() {
            for (let i27 = 0; i27 < 6; i27++) {
                new Uint16Array(64);
                new BigUint64Array(129);
                let v39 = 257;
                v39++;
                [Uint16Array];
                function f42() {
                    const o46 = {
                        ..."ydc9T",
                        [268435456]: 5,
                        __proto__: "ydc9T",
                        5: 268435456,
                        "a": 5,
                        "g": 5,
                        "c": "ydc9T",
                        ["ydc9T"]: "ydc9T",
                        536870889: "ydc9T",
                        [5]: 5,
                    };
                    return o46;
                }
                f42();
                f42();
                new Float32Array(v39);
            }
            return a24;
        },
    };
    return o51;
}
f22(16708, v15);
f22(-2044911794, v13);
f22(-3240, v13);
const t53 = [896.4748378334293,1000000000.0,Infinity];
t53.length **= -1258081034;
