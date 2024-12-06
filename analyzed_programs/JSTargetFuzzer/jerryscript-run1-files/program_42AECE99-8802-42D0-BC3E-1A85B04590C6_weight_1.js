new Date();
const v8 = [-1000.0,1000];
const v9 = [v8,Date,16];
const v10 = [16,Date];
function F11(a13, a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a13;
}
new F11(-7.335352276869537e+307, 14, v10, v9);
new F11(-7.335352276869537e+307, 16, v8, v10);
new F11(4.450977334359445e+306, 1000, v8, v10);
try { (1000n).sign(255); } catch (e) {}
