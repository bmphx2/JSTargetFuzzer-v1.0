const v2 = new Array(2);
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = v2;
    this.a = v2;
    this.h = a5;
}
new F3(F3);
new F3(F3);
const v8 = new F3(2);
const o14 = {
    [undefined]: v8,
};
v2.__proto__ = Array;
Array ** 7n;
typeof undefined === "bigint";
new Int16Array(127);
new Uint16Array(3);
new BigUint64Array(257);
