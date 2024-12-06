function F0() {
    if (!new.target) { throw 'must be called with new'; }
    10 > 10 ? 10 : 10;
    let v5;
    try { v5 = this.o(F0); } catch (e) {}
    v5 = this;
    this.valueOf = this;
    this.d = 10;
    this.f = 10;
    this.e = 10;
}
const v6 = new F0(F0);
new F0();
new F0();
const v13 = new Map();
let v16;
try { v16 = v6.p(4294967296n, Map, 1772284152n); } catch (e) {}
new Set();
Object.defineProperty(v13, 16, { writable: true, configurable: true, enumerable: true, value: v16 });
new Map();
let v22 = -513909666n;
v22 ^= 6n;
