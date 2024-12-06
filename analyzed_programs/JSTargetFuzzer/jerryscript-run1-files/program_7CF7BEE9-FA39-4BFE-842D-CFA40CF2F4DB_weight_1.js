function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a5;
}
new F3(F3, 1);
new F3(F3, 775123433);
const v9 = new F3(-65535, 775123433);
new Int16Array(10, v9);
new Uint16Array(115, Int16Array, F3, v9);
new Int8Array(90);
const v20 = new Date();
v20.setUTCSeconds();
