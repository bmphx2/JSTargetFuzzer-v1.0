function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 128;
    this.a = F0;
    const t4 = 128;
    t4.d = 128;
}
new F0();
new F0();
new F0();
new WeakMap();
const v16 = WeakMap.replace;
(`bigint`)["split"]("split", v16);
