function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a5;
    this.source = "function";
    this.g = "faA";
}
class C6 extends F3 {
    g;
    static c;
}
new C6();
const v8 = new C6();
new C6();
new F3("faA");
for (const v11 in v8) {
}
new F3("global");
new F3("faA");
("451")[1439];
