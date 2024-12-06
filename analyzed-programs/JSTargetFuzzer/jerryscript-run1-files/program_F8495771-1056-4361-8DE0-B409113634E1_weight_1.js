function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
}
const v7 = new F3(2147483648, 2147483648);
const v8 = new F3(v7, 65515);
new F3(v8, 65537, 65515, v8, v7);
new Uint16Array(3170);
new Function(2838);
new Float64Array(216);
let v20 = -(-9223372036854775808n);
v20 *= v20;
