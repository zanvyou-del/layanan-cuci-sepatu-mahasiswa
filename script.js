const form = document.getElementById("formPenjemputan");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    // Mengambil data dari form
    const nama = document.getElementById("nama").value.trim();
    const layanan = document.getElementById("layanan").value;
    const jumlah = document.getElementById("jumlah").value;

    const jumlahSepatu = Number(jumlah);

    // Validasi nama
    if (nama === "") {
        alert("Nama harus diisi!");
        return;
    }

    // Validasi jumlah sepatu
    if (jumlah.trim() === "" || isNaN(jumlahSepatu) || jumlahSepatu <= 0) {
        alert("Jumlah sepatu harus berupa angka lebih dari 0!");
        return;
    }

    // Menentukan harga berdasarkan layanan
    let harga = 0;

    if (layanan === "Deep Clean") {
        harga = 50000;
    } else if (layanan === "Unyellowing") {
        harga = 65000;
    } else if (layanan === "Fast Clean") {
        harga = 35000;
    }

    const total = harga * jumlahSepatu;

    // Dialog konfirmasi
    const konfirmasi = confirm(
        "Konfirmasi penjemputan sepatu?\n\n" +
        "Nama: " + nama + "\n" +
        "Layanan: " + layanan + "\n" +
        "Jumlah sepatu: " + jumlahSepatu + " pasang\n" +
        "Total harga: " + total.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        })
    );

    // Jika pengguna memilih OK
    if (konfirmasi) {

        document.getElementById("hasil").style.display = "block";

        document.getElementById("detailPesanan").textContent =
            "Nama: " + nama +
            " | Layanan: " + layanan +
            " | Jumlah: " + jumlahSepatu + " pasang";

        document.getElementById("totalHarga").textContent =
            "Total harga: " +
            total.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumFractionDigits: 0
            });

        alert("Pemesanan berhasil dikonfirmasi!");

        form.reset();

    } else {
        alert("Pemesanan dibatalkan.");
    }

});
