function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f0;
}
const v3 = new F1();
const v4 = new F1();
new F1();
const v13 = Promise.resolve();
v13.finally(v13, v4, v3, v13);
("65537").match(([-16,4]).slice(45103));
