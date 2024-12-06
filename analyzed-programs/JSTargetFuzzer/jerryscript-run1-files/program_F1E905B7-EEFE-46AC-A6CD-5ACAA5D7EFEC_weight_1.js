function F6(a8, a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 1.6626517316069918e+308;
    this.g = 581418.8286392167;
    this.h = -959.965440592095;
}
new F6(1.6626517316069918e+308, 0.14165781232241514, -959.965440592095, 581418.8286392167);
new F6(1.6626517316069918e+308, 0.14165781232241514, -959.965440592095, 0.14165781232241514);
const v14 = new F6(-959.965440592095, -1.7976931348623157e+308, 581418.8286392167, 581418.8286392167);
const v17 = [11,-4096,-128,-4294967296,-8089,7,-128];
const v18 = [v17];
const v19 = [268435441,v18];
function f20(a21, a22) {
    const o23 = {
    };
    return o23;
}
const v24 = [9007199254740990];
v24.length = 13;
const o26 = {
    __proto__: v24,
    1: v14,
};
o26.indexOf(13);
const v28 = f20();
const v30 = [f20];
const v31 = v17.flatMap;
Reflect.apply(v31, v19, v30);
for (let i = 0; i < 5; i++) {
    v28.__proto__ = v18;
    const v33 = [];
    v33.values;
    Reflect.apply(f20, v31, v33);
}
