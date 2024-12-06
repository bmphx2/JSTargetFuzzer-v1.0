function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = new Uint16Array(416);
    try { v4.find(Uint32Array); } catch (e) {}
    this.f = 2147483648;
    this.c = 2147483648;
}
const v8 = new F0();
const v9 = new F0();
const v10 = new F0();
const v11 = [v8,v10,v8,v10,v8];
[v9,v10];
[v11,v11,v9,v11,v9];
const v18 = new Date(Date);
Reflect.apply(v18.toUTCString, v18);
