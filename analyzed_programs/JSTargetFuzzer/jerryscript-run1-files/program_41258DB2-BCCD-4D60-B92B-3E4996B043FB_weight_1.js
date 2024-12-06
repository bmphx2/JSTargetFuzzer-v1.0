function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -1073741824;
    this.c = -1073741824;
}
new F0();
new F0();
new F0();
new SyntaxError(SyntaxError);
const v15 = new Uint16Array();
v15.entries();
let {...v17} = v15;
