// Nama : Afridho Ikhsan
// NPM : 2210631170002

#include <iostream>
using namespace std;

int fungsiKompres(char karakter[], int length) {
    int i = 0, j = 0; // variabel i sebagai syarat untuk perulangan di bawah terjadi yang nantinya akan diincrement setiap perulangan terjadi, dan variabel j akan menjadi indeks array yang menunjukkan panjang array sesudah dikompresi
    while (i < length) { // looping yang terjadi jika nilai variable i lebih sedikit dibanding panjang array awal
        karakter[j++] = karakter[i];
        int jmlhChar = 1; //variabel yang menampung jumlah karakter yang sama muncul
        while (i < length-1 && karakter[i] == karakter[i+1]) { //perulangan saat index kurang dari panjang array awal dikurangi 1 dan array [i] sama dengan array [i+1]
            jmlhChar++; //increment variabel jumlah char ketika syarat while terpenuhi yang artinya jumlah char yg sama bertambah 1
            i++;
        }
        if (jmlhChar > 1) {
            string jmlchar = to_string(jmlhChar); //variabel jmlhChar (int) dikonversi menjadi string agar dapat digunakan pada array
            for (int k = 0; k < jmlchar.length(); k++) {
                karakter[j++] = jmlchar[k]; //string hasil konversi masuk ke dalam array chars hasil kompresi
            }
        }
        i++;
    }
    return j; //mengembalikan nilai j yang menunjukkan length hasil kompresi chars yang menjadi variabel compressed length di int main
}

int main() {
  //  char chars[] = {'a', 'a', 'b', 'b', 'c', 'c', 'c'}; // deklarasi awal isi array karakter chars
    cout<< "Mau masukkan berapa char?: ";
    int arrayLength;
    cin>>arrayLength;
    char chars[arrayLength++];
    cout<<endl<<"Input array karakter chars: ";
    for (int j = 0; j < arrayLength-1; j++) {
        cin>>chars[j];
    }
    int length = sizeof(chars)/sizeof(chars[0]);
    int lengthSetelahDiKompresi = fungsiKompres(chars, length); //lengthSetelahDiKompresi = variabel yang akan menunjukkan panjang array sesudah dikompresi. di titik ini program akan memanggil function yang sudah dibuat sebelum nya yaitu fungsiKompres
    cout << lengthSetelahDiKompresi << ", ["; //Menampilkan length hasil kompresi
    for (int i = 0; i < lengthSetelahDiKompresi; i++) {
        cout << "'" << chars[i] << "'"; //Menampilkan karakter yang sudah dikompresi
        if (i < lengthSetelahDiKompresi-1) {
            cout << ", ";
        }
    }
    cout << "]" << endl;
    return 0;
}