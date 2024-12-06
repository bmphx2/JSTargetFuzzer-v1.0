let v0 = [0.4031794521273987,240.12064921149658,2.220446049250313e-16,5.0,943611.5329922449,1000000.0];
const v1 = [824554.123515741,0.7246403749199398,1.7976931348623157e+308];
const v2 = [3.245257606085554,Infinity,-1.0,504.3071977069153,0.8249022917950087,1000000.0,1.5960816975308276,-1000000000000.0];
function f3(a4) {
    const o8 = {
        "d": v0,
        ...a4,
        set h(a6) {
            v0 += v2;
            Object.defineProperty(a4, v1, { configurable: true, value: a4 });
            super.e = a4;
            this.d;
        },
        ...v1,
        "c": v0,
        [v2]: a4,
        __proto__: v1,
    };
    return o8;
}
f3(v0);
f3(v0);
f3(v0);
const v14 = new Float64Array(12);
new BigUint64Array(64);
const v20 = new Uint16Array(2116);
v14.byteLength **= 64;
v20.buffer = v0;
const o23 = {
    "maxByteLength": 1024,
};
const v25 = new ArrayBuffer(16, o23);
new Uint8ClampedArray(v25);
