function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a9;
    a8.c = 257n;
}
const v10 = new F6(-3n, -32388n);
const v11 = new F6(10000n, v10);
new F6(10000n, v11);
new Uint8ClampedArray(1000);
new Float32Array(1000);
new Int16Array(233);
/(?:a{5,1000000}){3,1000000}/gsu;
