const v1 = new Date();
const v5 = [-3571,5,-10,-3571,-3571];
const v6 = [5,-3571,v5];
[5,v6,v5,-3571];
const v11 = [Date,-63576,Date,-63576];
const v12 = [v6,-3571,v11,5,v11];
const v13 = [v12,-63576,-3571];
function F14(a16, a17, a18, a19) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a17;
    this.g = v12;
}
const v20 = new F14(-1950125931, -9007199254740991, v6, v5);
const v21 = new F14(-9007199254740991, -10, v11, v12);
const v22 = new F14(-10, -9007199254740991, v11, v13);
let v23;
try { v23 = v22.setUTCDate(v12, -10, v21); } catch (e) {}
v23.__proto__ = v20;
const v27 = (a28, a29) => {
    a29.a *= -1028246831;
    for (let v30 = 0; v30 < 32; v30++) {
        a29["p" + v30] = v30;
    }
    return v1;
};
