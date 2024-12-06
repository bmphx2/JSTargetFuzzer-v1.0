const v2 = new Uint16Array(15);
let v4 = Int16Array;
const v5 = new v4(256);
new Int8Array(128);
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 256;
    this.e = a11;
    this.d = v5;
}
const v14 = new F9(128, 256, v4);
new F9(15, 128, v2);
new F9(128, 128, 128);
v14[13] = v2;
v4 &&= v4;
const t15 = 15;
t15[3] = 40767;
const v24 = Symbol.iterator;
const o33 = {
    [v24]() {
        let v26 = 10;
        const o32 = {
            next() {
                v26--;
                const v30 = v26 == 0;
                const o31 = {
                    "done": v30,
                    "value": v26,
                };
                return o31;
            },
        };
        return o32;
    },
};
