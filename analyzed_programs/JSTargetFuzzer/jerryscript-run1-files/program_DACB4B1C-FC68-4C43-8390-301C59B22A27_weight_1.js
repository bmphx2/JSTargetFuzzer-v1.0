function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.h = "toString";
}
const v7 = new F3("-7", "toString");
const v8 = new F3("-7", v7);
const v9 = new F3("15", "toString");
[v9,"toString",F3,"source","caller"];
[v9,"-7"];
[v8];
-Infinity;
256 % "caller";
