var kesempatan = 3;
var hasil = "";
var angkaRandom = parseInt(Math.random() * 10);
var konfirmasi = true;

alert("Tebak angka 1-10.\n" + "Kamu punya " + kesempatan + " kesempatan.");

while (kesempatan > 0) {
    var tebakanPlayer = prompt("Masukkan angka tebakan: ");

    if (tebakanPlayer == angkaRandom) {
        kesempatan = 0;
        hasil = "Tebakan anda BENAR!\n" + "Angka yang dicari adalah angka " + tebakanPlayer;
    } else if (tebakanPlayer != angkaRandom) {
        kesempatan = kesempatan - 1;

        hasil = (tebakanPlayer < angkaRandom) ? "Tebakan anda terlalu RENDAH!\n" : "Tebakan anda terlalu TINGGI!\n";

        if (kesempatan != 0) {

            hasil += "Anda mempunyai " + kesempatan + " kesempatan";
        } else {
            hasil += "Kesempatan anda telah habis.\n" + "Terima kasih telah bermain tebak angka.";
        }

    } else {
        hasil = "Angka yang anda masukan salah!";
    }

    alert(hasil);

}