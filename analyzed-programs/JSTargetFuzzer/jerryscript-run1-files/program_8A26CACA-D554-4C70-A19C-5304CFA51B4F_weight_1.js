function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
}
new F3(446774851, -16);
const v8 = new F3(-16, 446774851);
const v9 = new F3(446774851, -16);
[F3,v8,v9,v9];
[F3,446774851,[v9,1024],1024,v9];
function f13() {
    return f13;
}
const v21 = ("toString").trimLeft;
try { v21("toString", -1); } catch (e) {}
