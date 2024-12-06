function f0() {
}
function f1() {
    return f0;
}
const v2 = [1e-15,NaN,499630.83589053643,NaN,-1.785397157023669e+308,Infinity];
const v3 = [-2.220446049250313e-16,-73.68819812618699,-6.221654963072048,0.46571862513615225,-1000.0,NaN,0.48346805027557527];
const v4 = [3.2730410933486844,-0.4904805360129778];
const v5 = [v4,f0];
const v6 = [v4,f0,v5,v4,f1];
[v2,v5,f1];
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v4;
    this.__proto__ = f0;
}
new F8(v6, f0, F8);
const v13 = new F8(v6, v3);
new F8(v3, v13);
const v17 = new BigUint64Array(7);
try { v17.every(BigUint64Array); } catch (e) {}
