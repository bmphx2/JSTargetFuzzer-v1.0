function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.a = "toString";
}
new F3("string");
const v7 = new F3("A6");
new F3(v7);
function f9() {
    return "string";
}
new WeakMap();
const v12 = [];
for (const v15 in [[v12,v12,v12],v12]) {
}
