function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = 10;
    this.c = a5;
    this.e = a5;
}
const v6 = new F3(-1);
new F3(-1, v6, v6);
new F3(-1);
Function();
