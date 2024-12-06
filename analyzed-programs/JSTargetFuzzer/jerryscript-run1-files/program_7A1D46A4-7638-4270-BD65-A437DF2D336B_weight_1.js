function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = 5;
    this.d = 5;
}
new F0(F0, F0, F0);
new F0();
new F0();
new SyntaxError(SyntaxError, SyntaxError);
const v15 = new Uint16Array();
v15.entries();
let {...v17} = v15;
