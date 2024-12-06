function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
    this.b = a5;
    this.d = a5;
}
new F3(1.2616842759012228e+308, 1.2616842759012228e+308);
new F3(-4.0, -4.0);
new F3(1.2616842759012228e+308, -3.0);
new Array(4096);
new BigUint64Array(9);
new Int8Array(127);
const v21 = new Int16Array(1917);
new Int16Array(v21, 9, 9);
let v23 = 0;
do {
    v23++;
} while (v23 < 9)
