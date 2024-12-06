const v1 = new Date();
function F2(a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a4;
}
const v5 = new F2(v1);
const v6 = new F2(v5);
new F2(F2);
const v12 = Symbol.iterator;
const o21 = {
    [v12]() {
        let v14 = 10;
        const o20 = {
            next() {
                v14--;
                const v18 = v14 == 0;
                const o19 = {
                    "done": v18,
                    "value": v14,
                };
                return o19;
            },
        };
        return o20;
    },
};
[["race",[v6]],"-14",v5];
new Uint8ClampedArray(4096);
o21[F2];
const t28 = "-14";
t28[2] = o21;
new Int8Array(13);
new Uint16Array(8);
new Object(3);
