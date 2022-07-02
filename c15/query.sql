PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE jurusan(
id_jurusan int, nama_jurusan varchar(255) NOT NULL,
CONSTRAINT pk_jurusan PRIMARY KEY (id_jurusan)
);
INSERT INTO jurusan VALUES(135,'Informatika');
INSERT INTO jurusan VALUES(181,'Telekomunikasi');
INSERT INTO jurusan VALUES(182,'Sistem Informasi');
CREATE TABLE matkul(
id_matkul int,
nama_matkul varchar(255) NOT NULL,
sks int,
CONSTRAINT pk_matkul PRIMARY KEY (id_matkul)
);
INSERT INTO matkul VALUES(135001,'Pengenalan Komputasi',3);
INSERT INTO matkul VALUES(135002,'Dasar Pemrograman',2);
INSERT INTO matkul VALUES(181001,'Jaringan Komputer',3);
INSERT INTO matkul VALUES(182001,'Organisasi Manajemen Perusahaan Industri',2);
INSERT INTO matkul VALUES(135003,'Data Mining',3);
INSERT INTO matkul VALUES(135004,'Organisasi Komputer',3);
INSERT INTO matkul VALUES(135005,'Pemodelan Basis Data',2);
INSERT INTO matkul VALUES(182002,'Probabilitas dan Statistika',2);
INSERT INTO matkul VALUES(182003,'Matematika STI',3);
INSERT INTO matkul VALUES(135006,'Rekayasa Perangkat Lunak',3);
INSERT INTO matkul VALUES(135007,'Matematika Diskrit',3);
INSERT INTO matkul VALUES(182004,'Manajemen Basis Data',3);
INSERT INTO matkul VALUES(182005,'Analisis Kebutuhan Sistem',3);
INSERT INTO matkul VALUES(182006,'Manajemen Sumberdaya STI',3);
INSERT INTO matkul VALUES(135008,'Algoritma dan Struktur Data',3);
INSERT INTO matkul VALUES(182007,'Arsitektur Komputer',3);
CREATE TABLE ambil_matkul(
nim int,
id_matkul int, indeks varchar(3), tahun_ajaran TEXT,
CONSTRAINT pk_ambil PRIMARY KEY (nim, id_matkul),
CONSTRAINT fk_ambil_mahasiswa FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
CONSTRAINT fk_ambil_matkul FOREIGN KEY (id_matkul) REFERENCES matkul(id_matkul)
);
INSERT INTO ambil_matkul VALUES(13522001,135001,'A','2022/2023');
INSERT INTO ambil_matkul VALUES(18122001,181001,'C','2022/2023');
INSERT INTO ambil_matkul VALUES(18222001,182001,'B','2022/2023');
INSERT INTO ambil_matkul VALUES(13522001,135003,'B','2022/2023');
INSERT INTO ambil_matkul VALUES(13522001,135005,'A','2022/2023');
INSERT INTO ambil_matkul VALUES(13522001,135007,'A','2022/2023');
INSERT INTO ambil_matkul VALUES(18222002,182001,'A','2022/2023');
INSERT INTO ambil_matkul VALUES(18222002,182003,'B','2022/2023');
INSERT INTO ambil_matkul VALUES(13522002,135001,'B','2022/2023');
INSERT INTO ambil_matkul VALUES(13522003,135002,'C','2022/2023');
INSERT INTO ambil_matkul VALUES(18222002,182004,'B','2022/2023');
INSERT INTO ambil_matkul VALUES(18222002,182006,'B','2022/2023');
INSERT INTO ambil_matkul VALUES(13522003,135003,'D','2022/2023');
INSERT INTO ambil_matkul VALUES(18222001,182002,'D','2022/2023');
CREATE TABLE mengajar_jurusan(
id_jurusan int,
nip int,
CONSTRAINT pk_mengajar_jurusan PRIMARY KEY (id_jurusan, nip),
CONSTRAINT fk_mengajar_jurusan FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan),
CONSTRAINT fk_mengajar_dosen FOREIGN KEY (nip) REFERENCES dosen(nip)
);
INSERT INTO mengajar_jurusan VALUES(135,198701012015021001);
INSERT INTO mengajar_jurusan VALUES(181,197010222010011001);
INSERT INTO mengajar_jurusan VALUES(182,198505212013022001);
INSERT INTO mengajar_jurusan VALUES(182,198602012015022001);
INSERT INTO mengajar_jurusan VALUES(135,198002007010022001);
CREATE TABLE mengajar_matkul(
nip int,
id_matkul int,
CONSTRAINT pk_mengajar_matkul PRIMARY KEY (nip, id_matkul),
CONSTRAINT fk_mengajar_dosen FOREIGN KEY (nip) REFERENCES dosen(nip),
CONSTRAINT fk_mengajar_matkul FOREIGN KEY (id_matkul) REFERENCES matkul(id_matkul)
);
INSERT INTO mengajar_matkul VALUES(198701012015021001,135001);
INSERT INTO mengajar_matkul VALUES(197010222010011001,181001);
INSERT INTO mengajar_matkul VALUES(198505212013022001,182001);
INSERT INTO mengajar_matkul VALUES(198505212013022001,182003);
INSERT INTO mengajar_matkul VALUES(198701012015021001,135003);
INSERT INTO mengajar_matkul VALUES(198701012015021001,135004);
INSERT INTO mengajar_matkul VALUES(198002007010022001,135006);
INSERT INTO mengajar_matkul VALUES(198002007010022001,135002);
INSERT INTO mengajar_matkul VALUES(198602012015022001,182002);
INSERT INTO mengajar_matkul VALUES(198602012015022001,182004);
INSERT INTO mengajar_matkul VALUES(198602012015022001,182006);
CREATE TABLE mahasiswa(
nim int,
nama_mahasiswa varchar(255) NOT NULL,
jenis_kelamin varchar(10) NOT NULL,
id_jurusan int,
pembimbing int, tanggal_lahir text,
CONSTRAINT pk_mahasiswa PRIMARY KEY (nim),
CONSTRAINT fk_jurusan FOREIGN KEY (id_jurusan) REFERENCES jurusan(id_jurusan),
CONSTRAINT fk_dosen FOREIGN KEY (pembimbing) REFERENCES dosen(nip)
);
INSERT INTO mahasiswa VALUES(13522001,'Arya Gunawan','laki-laki',135,198701012015021001,'2003-08-02');
INSERT INTO mahasiswa VALUES(13522002,'Vita Lestari','perempuan',135,198505212013022001,'2004-02-04');
INSERT INTO mahasiswa VALUES(18122001,'Dita Aprilianti','perempuan',181,198505212013022001,'2005-01-10');
INSERT INTO mahasiswa VALUES(18222001,'Fadhlan Adiguna','laki-laki',182,197010222010011001,'2004-10-10');
INSERT INTO mahasiswa VALUES(18222002,'Ibadurrahman Haris','laki-laki',182,197010222010011001,'2003-12-11');
INSERT INTO mahasiswa VALUES(13522003,'Agus Kurnia','laki-laki',135,198701012015021001,'2005-01-02');
INSERT INTO mahasiswa VALUES(13522004,'Rahma Putri','perempuan',135,198701012015021001,'2004-08-10');
CREATE TABLE dosen(
nip int,
nama_dosen varchar(255) NOT NULL,
jenis_kelamin varchar(10) NOT NULL,
gaji int,
CONSTRAINT pk_dosen PRIMARY KEY (nip)
);
INSERT INTO dosen VALUES(198701012015021001,'Ahmad Hidayat','laki-laki',6000000);
INSERT INTO dosen VALUES(198505212013022001,'Rina Mediaswati','perempuan',6500000);
INSERT INTO dosen VALUES(197010222010011001,'Ari Kurniawan','laki-laki',8000000);
INSERT INTO dosen VALUES(198602012015022001,'Riza Hartadi','laki-laki',6000000);
INSERT INTO dosen VALUES(198002007010022001,'Mira Voni','perempuan',8000000);
CREATE TABLE membimbing(
nip int,
nim int,
CONSTRAINT pk_membimbing PRIMARY KEY (nip, nim),
CONSTRAINT fk_membimbing_mahasiswa FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
CONSTRAINT fk_membimbing_dosen FOREIGN KEY (nip) REFERENCES dosen(nip)
);
INSERT INTO membimbing VALUES(198701012015021001,135002);
INSERT INTO membimbing VALUES(197010222010011001,181001);
INSERT INTO membimbing VALUES(198505212013022001,182002);

/*PERUBAHAN TABLE UNTUK C15
ALTER TABLE mahasiswa RENAME jurusan TO id_jurusan;
ALTER TABLE ambil_matkul ADD COLUMN tahun_ajaran TEXT;
ALTER TABLE mahasiswa ADD COLUMN tanggal_lahir TEXT;
*/

/*
TASK 1
*/
SELECT * FROM mahasiswa NATURAL JOIN jurusan;

/*
TASK 2
*/
SELECT nim, nama_mahasiswa, (cast(strftime('%Y.%m%d', 'now') - strftime('%Y.%m%d', tanggal_lahir) as int)) AS umur FROM mahasiswa WHERE  umur < 20; 

/*
TASK 3
*/
SELECT nim, nama_mahasiswa, nama_matkul, indeks FROM mahasiswa NATURAL JOIN ambil_matkul NATURAL JOIN matkul WHERE indeks = "B" OR indeks = "AB"  OR indeks = "A";

/*
TASK 4
*/
SELECT nim, nama_mahasiswa, sum(sks) as total_sks FROM mahasiswa NATURAL JOIN ambil_matkul NATURAL JOIN matkul GROUP BY nim HAVING sum(sks) > 10;

/*
TASK 5
*/
SELECT nim, nama_mahasiswa FROM mahasiswa NATURAL JOIN ambil_matkul NATURAL JOIN matkul WHERE nama_matkul = "Data Mining";

/*
TASK 6
*/
SELECT nama_dosen, count(nim) as jumlah_mahasiswa FROM dosen NATURAL JOIN mengajar_matkul NATURAL JOIN ambil_matkul GROUP BY nip; 

/*
TASK 7
*/
SELECT nim, nama_mahasiswa, (cast(strftime('%Y.%m%d', 'now') - strftime('%Y.%m%d', tanggal_lahir) as int)) AS umur FROM mahasiswa ORDER BY umur ASC;

/*
TASK 8
*/
SELECT nim, nama_mahasiswa, nama_jurusan, nip, nama_dosen, nama_matkul, indeks FROM mahasiswa NATURAL JOIN jurusan NATURAL JOIN ambil_matkul NATURAL JOIN matkul NATURAL JOIN mengajar_matkul NATURAL JOIN dosen WHERE indeks = "D" OR indeks = "E";

COMMIT;
