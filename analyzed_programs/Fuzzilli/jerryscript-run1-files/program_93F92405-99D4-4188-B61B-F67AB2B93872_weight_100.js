const v1 = new Map();
const v2 = [v1,v1];
const v3 = [v2,v2,v2];
const v4 = [Map,v3,v2];
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a10;
    this.b = v2;
}
const v12 = new F8(v2, v4);
new F8(v3, v2);
const v14 = new F8(v2, v2);
const o15 = {
    __proto__: v2,
    "e": v12,
    [Map]: F8,
};
g = v4;
const v17 = new Map();
v17.toString = v17;
v14.c = v4;
