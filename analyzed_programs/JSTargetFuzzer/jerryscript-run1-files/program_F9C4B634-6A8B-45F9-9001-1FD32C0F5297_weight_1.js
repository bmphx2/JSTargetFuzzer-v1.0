function f0() {
}
new Date();
function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a9;
    this.b = f0;
    this.a = a8;
}
const v12 = new F6(536870889, 536870889, F6, 147786199);
const v13 = new F6(536870889, v12, v12, 536870889);
new F6(147786199, v12, v13, 147786199);
v12.g = 536870889;
v12.__proto__ = Date;
for (let i19 = 0; i19 < 3; i19++) {
    typeof i19 === "string";
}
