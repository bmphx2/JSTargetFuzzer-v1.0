new Int16Array(3);
new Uint8Array(3);
new Uint16Array(10);
let v15;
try { v15 = Uint8Array("prototype", -1886, -2147483648); } catch (e) {}
try { ("g").match(v15); } catch (e) {}
function f17(a18) {
    return a18;
}
class C19 extends f17 {
    static #c;
    #e;
    static #f = Int16Array;
}
