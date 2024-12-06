function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = -1;
    this.h = -1;
}
new F0();
new F0();
new F0();
const v7 = "boolean" % "boolean";
const v10 = new Uint16Array(0);
const v13 = new BigInt64Array(443);
const v16 = new Float32Array(242);
v10[2] = v7;
("boolean")[67];
let v25 = 1145699990;
0 >>> v13;
v16 ^ v16;
v25--;
v16 ** -1000000000000.0;
!(!v25);
const v37 = new WeakMap();
const v40 = Symbol.iterator;
const o49 = {
    [v40]() {
        let v42 = 10;
        const o48 = {
            next() {
                v42--;
                const v46 = v42 == 0;
                const o47 = {
                    "done": v46,
                    "value": v42,
                };
                return o47;
            },
        };
        return o48;
    },
};
v37.has(WeakMap);
