function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.c = 4294967295;
}
new F0();
new F0();
new F0();
const v7 = [6];
v7.length = v7;
function F17(a19, a20) {
    if (!new.target) { throw 'must be called with new'; }
}
const v21 = new F17(F17, "bigint");
("bigint").match(v21);
