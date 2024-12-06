function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a8;
    this.b = a8;
    this.g = 5;
}
const v10 = new F6("p", "3");
const v11 = new F6("64", F6);
const v12 = new F6("p", v11);
v12.g = v10;
5 instanceof F6;
Math.round(v10);
const v18 = 1073741825 | v11;
v12 || -5.0;
v18 * v10;
const t14 = "64";
t14[13] &= -5.0;
