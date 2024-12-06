function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 50300;
    this.h = 50300;
    this.a = 50300;
}
const v3 = new F0();
const v4 = new F0();
new F0();
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a9;
    this.h = a8;
    this.b = v4;
}
new F6(v4, F0);
const v11 = new F6(v3, F6);
new F6(v4, F0, v11);
new WeakSet();
const v21 = [-1000000000.0,878.9185128627489,4.0,-2.0,0.09496991063728788,-645222.7257334667,-2.2250738585072014e-308,-1.502776907103365e+308,-1.7976931348623157e+308];
("object").caller;
let v23;
try { v23 = ("e").toUpperCase(); } catch (e) {}
try { v21.fill(v23); } catch (e) {}
v23 = v21;
let v25;
try { v25 = v21(); } catch (e) {}
const v26 = [-1000000000.0,1.0,Infinity,1000000.0,748878.5041059223];
[2.0,-2.7717152599678023,1e-15,-1000.0,-3.0,1000000.0];
const t27 = "e";
t27["species"] = v25;
v21 * v26;
const v32 = ["species",v21];
const v33 = [v21,"e"];
[[v33,v33,"e"],"e","object","e"];
["e",v32,[v33],v21];
with ("split") {
    for (let v40 = 0; v40 < 5; v40++) {
        length["b" + v40] = v40;
    }
}
