function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a8;
    this.f = 536870889;
}
const v12 = new F6("raw", "raw", "a", 9223372036854775807);
new F6("a", "a", v12, 9223372036854775807);
new F6(9223372036854775807, "a", "65537", 3285);
Number["isSafeInteger"]();
const v19 = Date.__proto__;
const v22 = Uint8ClampedArray.__proto__;
try { v22(); } catch (e) {}
("reverse").matchAll(v19);
v19();
