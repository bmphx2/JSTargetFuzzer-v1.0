function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.e = a5;
    this.c = a5;
}
function f6() {
    return F3;
}
const t8 = 1000;
t8[1000] = -1;
const v8 = Symbol.unscopables;
const t11 = 55882;
t11[v8] = v8;
const v9 = new F3(1000);
new F3(-1);
const v11 = new F3(1000);
[,v11,,,];
[[F3,v9,-1,55882,,],,1000];
const v17 = [943620025];
const v18 = [-4294967295];
const o22 = {
    valueOf() {
        this.d >>>= -1;
        return v17;
    },
};
Object.defineProperty(v18, "b", { enumerable: true, value: 14 });
v17.includes(14);
