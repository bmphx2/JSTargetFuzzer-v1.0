const v3 = [7,-1,-504221910,-1073741824,7,-9007199254740992];
const v4 = [-4096,-2147483647,5,-536870912];
const v5 = [268435456,-49670,2147483649,20393];
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v4;
}
const v10 = new F6(v3, v4);
new F6(v5, v3);
new F6(v3, v3);
const v14 = new Set();
const v15 = v10.__proto__;
const o16 = {
};
const v18 = new Proxy(v3, o16);
v18[v15] = v18;
try { v14.delete(F6); } catch (e) {}
new F6(v4, v3);
