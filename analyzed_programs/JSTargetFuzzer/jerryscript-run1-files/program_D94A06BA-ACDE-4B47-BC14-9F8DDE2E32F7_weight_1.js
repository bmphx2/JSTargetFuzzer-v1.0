function F0() {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = 2147483647;
    t2.e = F0;
}
new F0();
new F0();
new F0();
try { (9007199254740992).padEnd(9007199254740992); } catch (e) {}
