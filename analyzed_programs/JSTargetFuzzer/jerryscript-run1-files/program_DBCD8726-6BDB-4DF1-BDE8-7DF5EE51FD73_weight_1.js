function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a5;
    this.c = 1n;
    a5.h = a5;
}
new F3(-65536n);
new F3(1073741824n);
const v8 = new F3(1n);
new Int8Array(3534);
new Int16Array(257);
new Int8Array(127);
const v19 = new Date();
const v20 = [Date,Date,Date];
function f21(a22) {
    return a22;
}
class C23 extends f21 {
}
function F24(a26, a27, a28, a29) {
    if (!new.target) { throw 'must be called with new'; }
    v19.getUTCSeconds();
}
new F24(v19, v8, C23, v20);
for (let i34 = 0, i35 = 10; i34 < i35;) {
    ({"f":i35,"length":i34,...C23} = v20);
}
