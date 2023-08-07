#include <iostream>

using namespace std;
void tampilGaris() {
    cout<<"---"<<endl;
}

int f(int x) {
    int hasil;
    hasil = (x*x + 2*x);
    return hasil;
}

int pangkat(int r, int s) {
 int hasilPangkat = 1;

 for(int x = 1; x <= s; x++) {
   hasilPangkat = hasilPangkat * r;
 }

 return hasilPangkat;
}

int main() {
    int a,b;
    char lagi;
    while( toupper(lagi) != 'T') {
        tampilGaris();
        cout<<"Masukkan nilai a : ";
        cin>>a;
        cout<<"Masukkan nilai b : ";
        cin>>b;
        // cout<<"Halo"<<endl;
        // cout<<f(a)<<endl;
        // cout<<f(2)<<endl;
        
        cout<<"Jadi hasil dari perpangkatan nilai a dan b adalah : ";
        cout<<pangkat(a,b)<<endl;
        tampilGaris(); 
        cout<<"Mau coba lagi? ";
        cin>>lagi;
    }
    
}