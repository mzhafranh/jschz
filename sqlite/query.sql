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
CREATE TABLE ambil_matkul(
nim int,
id_matkul int, indeks varchar(3),
CONSTRAINT pk_ambil PRIMARY KEY (nim, id_matkul),
CONSTRAINT fk_ambil_mahasiswa FOREIGN KEY (nim) REFERENCES mahasiswa(nim),
CONSTRAINT fk_ambil_matkul FOREIGN KEY (id_matkul) REFERENCES matkul(id_matkul)
);
INSERT INTO ambil_matkul VALUES(13522001,135001,'A');
INSERT INTO ambil_matkul VALUES(18122001,181001,'C');
INSERT INTO ambil_matkul VALUES(18222001,182001,'B');
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
CREATE TABLE mahasiswa(
nim int,
nama_mahasiswa varchar(255) NOT NULL,
jenis_kelamin varchar(10) NOT NULL,
jurusan int,
pembimbing int,
CONSTRAINT pk_mahasiswa PRIMARY KEY (nim),
CONSTRAINT fk_jurusan FOREIGN KEY (jurusan) REFERENCES jurusan(id_jurusan),
CONSTRAINT fk_dosen FOREIGN KEY (pembimbing) REFERENCES dosen(nip)
);
INSERT INTO mahasiswa VALUES(13522001,'Arya Gunawan','laki-laki',135,198701012015021001);
INSERT INTO mahasiswa VALUES(13522002,'Vita Lestari','perempuan',135,198505212013022001);
INSERT INTO mahasiswa VALUES(18122001,'Dita Aprilianti','perempuan',181,198505212013022001);
INSERT INTO mahasiswa VALUES(18222001,'Fadhlan Adiguna','laki-laki',182,197010222010011001);
INSERT INTO mahasiswa VALUES(18222002,'Ibadurrahman Haris','laki-laki',182,197010222010011001);
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
COMMIT;
