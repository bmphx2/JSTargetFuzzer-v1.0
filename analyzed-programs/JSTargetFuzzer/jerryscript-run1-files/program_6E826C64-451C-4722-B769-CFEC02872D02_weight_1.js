function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 12;
    this.b = 12;
}
new F0();
new F0();
const v5 = new F0();
const v6 = [3.73546240425968];
const v7 = [-1000000000.0,1.7976931348623157e+308,-1000.0,-171.7667792665036,154968.17031339952];
const v8 = [3.7419185724448397e+307,133.7754595748695,2.220446049250313e-16,-5.625895259342293,9.769906364872227e+305,-2.2250738585072014e-308,0.505706424130095,-7.15219829005277e+307,-1000.0,-761213.6357667416];
let v9 = 0;
function F15(a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = this;
    this.c = a17;
    this.a = 432036284;
}
const v19 = new F15(v6, 432036284);
const v20 = new F15(v7, v19);
new F15(v8, -1633838765);
const v23 = Date();
v7 instanceof F0;
let [] = v6;
v9--;
function F26(a28, a29, a30) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a30;
    this.b = a29;
    this.f = 432036284;
}
new F26(v23, 432036284, -1633838765);
new F26(v20, 432036284, -1633838765);
new F26(v19, -1633838765, 2);
const v34 = [v5,Date];
for (let v35 = 0; v35 < 5; v35++) {
    v34["p" + v35] = v35;
}
v34["reverse"]();
