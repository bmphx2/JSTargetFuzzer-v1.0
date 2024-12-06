function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = F0;
    this.a = -10;
}
new F0();
new F0();
new F0();
new Uint16Array(127);
new Int8Array(8);
const v14 = new BigUint64Array(16);
function f15() {
}
function f16() {
    const o22 = {
        get match() {
            new f15(16, this);
            return f15;
        },
        "h": f15,
        ...v14,
        "g": f15,
        "a": f15,
        ...f15,
    };
    return o22;
}
f16();
f16();
f16();
let v28 = Int32Array;
let v29 = new v28(4096);
new Uint32Array(129);
let v35 = new Int16Array(512);
[,v28,v35,v29] = v35;
const t35 = 127;
t35.g += 4096;
const v37 = Symbol.iterator;
const o46 = {
    [v37]() {
        let v39 = 10;
        const o45 = {
            next() {
                v39--;
                const v43 = v39 == 0;
                const o44 = {
                    "match": v43,
                    "value": v39,
                };
                return o44;
            },
        };
        return o45;
    },
};
