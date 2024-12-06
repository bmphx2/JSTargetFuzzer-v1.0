function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    a5.b = a5;
    this.c = a5;
}
Function();
new F3(10000);
const v9 = new F3(-62161);
const v10 = new F3(9007199254740992);
[[-62161,-62161,[v10,-62161],F3],v9];
new String(-62161);
