function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a6;
}
new F3(-4294967297, 127);
const v8 = new F3(2147483649, 127);
new F3(127, v8);
const v15 = new Uint32Array(Uint32Array, Int16Array, Uint32Array);
const v17 = 125563.20783278253 - v15;
const v18 = [1.7976931348623157e+308,-7.132348077024275,-55.152548489457104];
v18[65535n] = v17;
for (let v20 = 0; v20 < 5; v20++) {
    v18.splice(v20, v20, Int16Array);
}
