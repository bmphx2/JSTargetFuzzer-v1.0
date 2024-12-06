function f0() {
}
new Date();
const v3 = [2067254898,-4294967295,1143254234,-10,3,15,-9007199254740992,-9007199254740991,536870912];
const v4 = [-9007199254740991,-4845];
const v5 = [-42270,10,9223372036854775807,54559,18688,-806569400];
let v7 = 4294967295;
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v3;
    this.a = a11;
    this.b = v7;
}
new F9(v4, v5);
new F9(v3, v3);
const v15 = new F9(v3, v3);
let v18 = v15[Symbol.unscopables];
const v19 = `
    const v20 = v19 == v15;
    const t19 = v20 ? v19 : v15;
    t19[v7] &&= v7;
    v7 = -1;
    v18 = v20;
`;
eval(v19);
