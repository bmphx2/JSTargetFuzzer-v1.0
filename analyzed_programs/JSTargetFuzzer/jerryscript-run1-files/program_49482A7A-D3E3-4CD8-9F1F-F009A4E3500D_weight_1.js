function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 64;
    this.a = 64;
}
new F0();
new F0();
new F0();
new Array(9);
const v15 = [1073741823,45671,2,-1564349818,62319,-1584081008,9007199254740991];
function f16() {
    return f16;
}
const v18 = [f16];
Reflect.apply(v15.sort, v15, v18);
