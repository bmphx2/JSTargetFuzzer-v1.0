function f3() {
    return 4294967295;
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a6;
    this.e = 4294967295;
    a6.d = 3;
}
const v8 = new F4(4294967295, -16);
const v9 = new F4(3, 3);
new F4(3, -16);
[[3,[v8,v9,v8,v8,v9],v9,F4,F4],v8];
[-369044843,536870889,64,-671154099,268435439,-6670];
[2147483648,-42421929,-256,536870889];
[512,12,-10068,-128,1,-65536];
const v18 = ([7,-1127585119,2147483647]).constructor;
class C19 extends v18 {
}
new v18();
