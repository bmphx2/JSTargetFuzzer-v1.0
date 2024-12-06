let v12 = 5;
class C14 {
}
const v15 = new C14(v12, -13n);
v12 = 4096;
function F17(a19, a20, a21, a22) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a20;
}
new F17(536870889n, v12, "MIN_VALUE", 2147483647);
new F17(15n, 4096, v15, 6699);
new F17(-13n, 129, "bigint", 4096);
const v27 = [4096,"string"];
Reflect.apply(("string").padStart, v15, v27);
