function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = f0;
}
new F1();
const v4 = new F1();
const v5 = new F1();
let v7 = 3.0;
({"f":v7,} = v5);
v5.f.__proto__;
let v11;
try { v11 = v7["valueOf"](v4); } catch (e) {}
const t14 = "valueOf";
t14[9223372036854775807] = v11;
b = true;
v7.valueOf = v7;
try { ("valueOf").trimEnd(); } catch (e) {}
(`bigint`)["split"]("split", 65535);
