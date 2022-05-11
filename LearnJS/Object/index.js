var orang = {
    namaDpn: "Andi",
    usia: 50,
    pekerjaan: "polisi",
    namaFull: function () {
        return this.namaDpn + "Karno";
    },
};
delete orang.pekerjaan;
orang.pekerjaan = "guru";
document.getElementById("text").innerHTML = `
<p>Nama panjang saya ${orang.namaFull()}</p>
<p>Biasa dipanggil ${orang.namaDpn}</p>
<p>Saya : </p>
<ul>
<li>Berusia : ${orang.usia}</li>
<li>pekerjaan : ${orang.pekerjaan}</li>
</ul>
`;
