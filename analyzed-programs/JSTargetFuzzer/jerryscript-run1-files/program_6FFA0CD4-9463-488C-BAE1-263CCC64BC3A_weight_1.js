function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = f0;
}
new F1();
new F1();
const v5 = new F1();
const v6 = [v5];
[f0,v6,[v6,v6,v5,v5]];
[3.0,749060.7240443013,-2.220446049250313e-16,1.7976931348623157e+308,3.0,753.4601652350336,0.6243564191789909,0.0,1000000.0];
[-2.633562873203767e+307,2.220446049250313e-16];
[-1.0];
const v16 = new Date();
v16.getMilliseconds();
