new Date();
function F5(a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a7;
    this.c = F5;
    this.a = 255n;
}
new F5(-65536n);
new F5(-65536n);
new F5(-65536n);
const v16 = new BigInt64Array(512);
for (const v18 of v16) {
    v18 != v18;
}
