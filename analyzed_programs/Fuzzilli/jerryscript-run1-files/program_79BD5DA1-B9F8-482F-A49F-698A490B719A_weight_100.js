function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    const t2 = 65535;
    t2.c = a5;
    const t4 = 65535;
    t4.b = 65535;
}
new F3(2147483647);
new F3(1);
new F3(65535);
const v19 = [30600];
const o21 = {
    [v19]: 4294967296,
};
