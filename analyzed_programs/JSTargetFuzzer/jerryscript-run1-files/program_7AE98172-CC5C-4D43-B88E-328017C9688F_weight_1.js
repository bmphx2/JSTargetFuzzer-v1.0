new WeakMap();
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = a8;
}
new F5(-128, -128);
new F5(-128, 4294967296);
new F5(-128, -41015);
[260.26390325621514,-Infinity,-380.9463898045568,4.0];
[783105.559616717,2.2250738585072014e-308];
[3.0,0.8498425507470464];
let v18 = 1073741824n;
v18 &= v18;
