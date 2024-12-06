function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a6;
}
const v7 = new F3(1073741823, 1073741823);
const v8 = new F3(1073741823, 1073741823);
new F3(1073741823, 1073741823);
new Uint32Array(1024);
new BigInt64Array(89);
const v18 = new Uint8ClampedArray(4);
const v19 = BigInt64Array & 1073741823;
const v21 = [v8];
Reflect.apply(v18.filter, v7, v21);
const v24 = v8.h;
const v28 = v24 && v24;
Math.tanh(v24);
!v28;
Math.imul(v19, 16);
