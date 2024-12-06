function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = f0;
    this.e = f0;
    this.a = f0;
}
new F1();
new F1();
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a9;
    let v11 = 0;
    while (v11 < 5) {
        function F16() {
            if (!new.target) { throw 'must be called with new'; }
            this.h = undefined;
        }
        new F16();
        const v22 = -(-9.390551668418595);
        Math.log(-9.390551668418595);
        Math.log2(v22);
        v11++;
    }
    for (let v29 = 0; v29 < 32; v29++) {
        this["p" + v29] = v29;
    }
}
const v32 = new F1();
new Float64Array(4096);
new Float32Array(3);
const t32 = "536870912";
t32[F1] = v32;
typeof "536870912" === "number";
new BigUint64Array(257);
const v48 = new BigInt64Array(2905);
new Uint16Array(5);
[[2.0],[-692.4555525142335]];
const v58 = new Uint8ClampedArray(119);
const v60 = 372 >= v58;
if (v60) {
    v60 !== -2;
} else {
    const t44 = 119;
    t44[9] = BigInt64Array;
}
const v64 = 10 == 0;
const o65 = {
    "done": v64,
    "value": 10,
};
v48 >= v60;
