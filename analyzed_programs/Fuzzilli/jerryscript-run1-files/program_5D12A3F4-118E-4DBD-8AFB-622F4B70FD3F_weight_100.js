function f0() {
}
function f1() {
    return f0;
}
const v4 = new Float32Array(10);
const v7 = new Uint8Array(9);
new Int8Array(255);
new Uint8ClampedArray(64);
const v16 = new Int32Array(255);
new Int8Array(222);
[-181.31057621260243,1000000000000.0,5.166480290078624e+307,-4.0,-1000000000.0,-519.9302429840159,266.9739455389715,-1.7976931348623157e+308];
[191.65270699095072,-983.8556263563487,0.0,Infinity,-938392.6245867866];
const v22 = [2.220446049250313e-16,-Infinity,8.564117249357349,-7.764097683325965e+307,-2.3424168685306057,0.546933755832097,-5.0,-2.1191738009783334,0.0,0.8663704158703335];
let v23 = 0;
do {
    Object.defineProperty(v7, "f", { enumerable: true, get: f1 });
    v22.c = f0;
    v4.__proto__ = v16;
    v23++;
} while (v23 < 10)
