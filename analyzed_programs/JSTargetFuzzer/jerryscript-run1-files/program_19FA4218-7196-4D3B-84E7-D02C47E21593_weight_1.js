function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.replace = a5;
}
new F3(-6741, 9007199254740991);
const v8 = new F3(-2020237679, 9007199254740991, F3);
new F3(9007199254740991, -6741, -6741, v8, -2020237679);
function f13() {
    return 2.0;
}
const o18 = {
};
const v21 = [10000];
Reflect.apply(("delete").repeat, o18, v21);
