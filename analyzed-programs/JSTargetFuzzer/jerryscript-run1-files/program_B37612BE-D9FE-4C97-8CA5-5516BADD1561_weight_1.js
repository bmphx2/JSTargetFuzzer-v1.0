function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = f0;
    f0.c = f0;
    this.h = f0;
}
const v3 = new F1();
const v4 = new F1();
const v5 = new F1();
[-828931810,-1025763239,-10,-2002471029,600094827];
const v7 = [4096,1073741824,2147483649];
[8,4294967297,13,49368,48331,4096,6,10,-13224];
function f12() {
    return 2147483648;
}
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f12;
    this.f = f12;
    this.h = a17;
}
new F13(2147483648, -134187446, -131404330, v5);
new F13(v7, v4, -131404330, v3);
new F13(v7, v5, 2147483648, v5);
let v22 = 10;
for ((() => {
        class C23 {
        }
    })();
    v22--;
    ) {
}
