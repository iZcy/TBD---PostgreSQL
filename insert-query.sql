-- @block
-- LOCATION
BEGIN;

INSERT INTO public."LOCATION" (country, state, city, street) 
VALUES 
('Indonesia', 'Yogyakarta', 'Yogyakarta', 'Jalan Malioboro No. 123'),
('Indonesia', 'Jakarta', 'Jakarta', 'Jalan Sudirman No. 234'),
('Indonesia', 'Bali', 'Denpasar', 'Jalan Sunset No. 345'),
('Indonesia', 'Jawa Barat', 'Bandung', 'Jalan Braga No. 456'),
('Indonesia', 'Jawa Tengah', 'Semarang', 'Jalan Pahlawan No. 567'),
('Indonesia', 'Jawa Timur', 'Surabaya', 'Jalan Tunjungan No. 678'),
('Indonesia', 'Sumatera Utara', 'Medan', 'Jalan Thamrin No. 901'),
('Indonesia', 'Sumatera Selatan', 'Palembang', 'Jalan Demang Lebar Daun No. 112'),
('Indonesia', 'Kalimantan Timur', 'Balikpapan', 'Jalan Jendral Sudirman No. 223'),
('Indonesia', 'Sulawesi Utara', 'Manado', 'Jalan Sam Ratulangi No. 334'),
('Indonesia', 'Papua Barat', 'Sorong', 'Jalan Basuki Rahmat No. 445'),
('Indonesia', 'Nusa Tenggara Timur', 'Kupang', 'Jalan El Tari No. 556'),
('Indonesia', 'Aceh', 'Banda Aceh', 'Jalan Teuku Umar No. 667'),
('Indonesia', 'Aceh', 'Lhokseumawe', 'Jalan Tengku Agam No. 778'),
('Indonesia', 'Aceh', 'Langsa', 'Jalan Ahmad Yani No. 889'),
('Indonesia', 'Maluku', 'Ambon', 'Jalan Raya Pattimura No. 990'),
('Indonesia', 'Gorontalo', 'Gorontalo', 'Jalan Sultan Hasanuddin No. 1101'),
('Indonesia', 'Lampung', 'Bandar Lampung', 'Jalan Zainal Abidin No. 1212'),
('Indonesia', 'Sumatera Barat', 'Padang', 'Jalan Hayam Wuruk No. 2323'),
('Indonesia', 'Banten', 'Serang', 'Jalan KH Abdul Hamid No. 3434'),
('Indonesia', 'Banten', 'Tangerang', 'Jalan Gatot Subroto No. 4545'),
('Indonesia', 'Yogyakarta', 'Sleman', 'Jalan Magelang No. 5656'),
('Indonesia', 'Yogyakarta', 'Bantul', 'Jalan Parangtritis No. 6767'),
('Indonesia', 'Yogyakarta', 'Gunung Kidul', 'Jalan Wonosari No. 7878'),
('Indonesia', 'Yogyakarta', 'Kulon Progo', 'Jalan Wates No. 8989');

END;

-- @block
-- CONTACT
BEGIN;

-- For Users
INSERT INTO public."CONTACT" (phone, email, website, instagram, whatsapp, line) 
VALUES 
('081234567890', 'yitzhak@gmail.com', '', '@bukuindonesia', '+6281234567890', 'yitzhak_line'),
('082345678901', 'edmund@gmail.com', '', '@penerbitnusantara', '+6282345678901', 'edmund_line'),
('081112233445', 'aline@gmail.com', '', '@tokobukujogja', '+6281112233445', 'aline_line'),
('087654321098', 'surya@gmail.com', '', '@gramedia', '+6287654321098', 'surya_line'),
('085678901234', 'amalia@gmail.com', '', '@gramediaselatan', '+6285678901234', 'amalia_line'),
('083456789012', 'aditya@gmail.com', '', '@gramediatimur', '+6283456789012', 'aditya_line'),
('089012345678', 'trisna@gmail.com', '', '@tokobukusby', '+6289012345678', 'trisna_line'),
('081231231231', 'ratih@gmail.com', '', '@bukuonline', '+6281231231231', 'ratih_line'),
('082132132132', 'danang@gmail.com', '', '@pustakajaya', '+6282132132132', 'danang_line'),
('084213213214', 'nadia@gmail.com', '', '@bukuremaja', '+6284213213214', 'nadia_line'),
('087987654321', 'jojo@gmail.com', '', '@gramediamks', '+6287987654321', 'jojo_line'),
('089987654321', 'nina@gmail.com', '', '@tokobukuaceh', '+6289987654321', 'nina_line'),
('081098765432', 'merry@gmail.com', '', '@tokobukubdg', '+6281098765432', 'merry_line'),
('083987654321', 'daniel@gmail.com', '', '@bukuonlinesmg', '+6283987654321', 'daniel_line'),
('081234567891', 'linda@gmail.com', '', '@bukubagus', '+6281234567891', 'linda_line'),
('081234567890', 'putri.utami@gmail.com', '', 'putriutami', '6281234567890', 'putriutami_line'),
('081234567891', 'budi.santoso@gmail.com', '', 'budisantoso', '6281234567891', 'budisantoso_line'),
('081234567892', 'sri.wijaya@gmail.com', '', 'sriwijaya', '6281234567892', 'sriwijaya_line'),
('081234567893', 'adi.nugroho@gmail.com', '', 'adinugroho', '6281234567893', 'adinugroho_line'),
('081234567894', 'dewi.anggraini@gmail.com', '', 'dewianggraini', '6281234567894', 'dewianggraini_line');

-- For Franchises
INSERT INTO public."CONTACT" (phone, email, website, instagram, whatsapp, line) 
VALUES 
('085098765432', 'penerbitsejahtera@penerbitsejahtera.co.id', 'www.penerbitsejahtera.co.id', '@penerbitsejahtera', '+6285098765432', 'ani_line'),
('087987654321', 'gramediasmg@gramediasmg.co.id', 'www.gramediasmg.co.id', '@gramediasmg', '+6287987654321', 'dika_line'),
('089098765432', 'tokobukuuny@tokobukuuny.co.id', 'www.tokobukuuny.co.id', '@tokobukuuny', '+6289098765432', 'andi_line'),
('081198765432', 'penerbitgembira@penerbitgembira.co.id', 'www.penerbitgembira.co.id', '@penerbitgembira', '+6281198765432', 'tina_line'),
('083198765432', 'bukubagus@bukubagus.co.id', 'www.bukubagus.co.id', '@bukubagus', '+6283198765432', 'rizki_line');

END;

-- @block
-- POSITION
INSERT INTO public."POSITION" (title, salary) 
VALUES 
('Pustakawan', 5500000),
('Asisten Perpustakaan', 5200000),
('Spesialis Katalogisasi', 5800000),
('Arsivar', 5400000),
('Pustakawan Referensi', 5900000),
('Pustakawan Akuisisi', 5600000),
('Teknisi Perpustakaan', 5100000),
('Koordinator Pinjam-Meminjam Antar Perpustakaan', 5700000),
('Petugas Perpustakaan', 4800000),
('Pustakawan Layanan Digital', 5600000),
('Pustakawan Anak', 5400000),
('Pustakawan Remaja', 5400000),
('Pustakawan Layanan Teknis', 5800000),
('Pustakawan Pengembangan Koleksi', 5800000),
('Pustakawan Sistem', 6200000),
('Pustakawan Layanan Instruksional', 5800000),
('Pustakawan Pengabdian Masyarakat', 5300000),
('Pustakawan Koleksi Khusus', 6100000),
('Manajer Arsip', 6300000),
('Direktur Perpustakaan', 7200000);

-- @block
-- PROFILE
BEGIN;

INSERT INTO public."PROFILE" (full_name, nickname, profession, date_born, date_death, gender, _contact, _birth_place, _address) 
VALUES 
('Putri Utami', 'Putri', 'Pustakawan', '1975-03-15', NULL, 'Female', 5, 1, 5),
('Budi Santoso', 'Budi', 'Arsivar', '1980-07-20', '2005-09-15', 'Male', 10, 2, 10),
('Sri Wijaya', 'Sri', 'Pustakawan Referensi', '1978-11-10', NULL, 'Female', 15, 3, 15),
('Adi Nugroho', 'Adi', 'Pustakawan Akuisisi', '1985-05-25', NULL, 'Male', 20, 4, 20),
('Dewi Anggraini', 'Dewi', 'Teknisi Perpustakaan', '1982-09-30', '2010-03-20', 'Female', 3, 5, 3),
('Agus Setiawan', 'Agus', 'Koordinator Pinjam-Meminjam Antar Perpustakaan', '1976-12-05', NULL, 'Male', 17, 6, 17),
('Siti Rahayu', 'Rahayu', 'Petugas Perpustakaan', '1979-04-18', NULL, 'Female', 8, 7, 8),
('Rudi Hartono', 'Rudi', 'Pustakawan Layanan Digital', '1983-08-22', NULL, 'Male', 12, 8, 12),
('Eka Pratiwi', 'Eka', 'Pustakawan Anak', '1987-01-12', NULL, 'Female', 1, 9, 1),
('Darma Wijaya', 'Darma', 'Pustakawan Remaja', '1984-06-28', NULL, 'Male', 19, 10, 19),
('Rini Susanti', 'Rini', 'Pustakawan Layanan Teknis', '1977-10-17', NULL, 'Female', 6, 11, 6),
('Firman Setiawan', 'Firman', 'Pustakawan Pengembangan Koleksi', '1974-04-03', '2019-11-30', 'Male', 14, 12, 14),
('Lia Suryani', 'Lia', 'Pustakawan Sistem', '1981-11-28', NULL, 'Female', 18, 13, 18),
('Heru Nugroho', 'Heru', 'Pustakawan Layanan Instruksional', '1989-07-15', NULL, 'Male', 4, 14, 4),
('Maya Rahmawati', 'Maya', 'Pustakawan Pengabdian Masyarakat', '1986-02-09', NULL, 'Female', 16, 15, 16),
('Rizky Firmansyah', 'Rizky', 'Pustakawan Koleksi Khusus', '1973-05-20', NULL, 'Male', 11, 16, 11),
('Diana Wulandari', 'Diana', 'Manajer Arsip', '1970-08-14', NULL, 'Female', 2, 17, 2),
('Hari Santoso', 'Hari', 'Direktur Perpustakaan', '1972-12-10', NULL, 'Male', 7, 18, 7),
('Sri Wahyuni', 'Sri', 'Pustakawan', '1971-06-05', NULL, 'Female', 13, 19, 13),
('Yoga Prasetyo', 'Yoga', 'Asisten Perpustakaan', '1979-09-18', NULL, 'Male', 9, 20, 9);


END;

-- @block
BEGIN;

-- AUTHOR
INSERT INTO public."AUTHOR" (_profile, joined_at) 
VALUES 
(3, '2021-02-14'),
(17, '2020-05-23'),
(6, '2019-11-30'),
(11, '2020-07-15'),
(8, '2021-08-20'),
(14, '2020-12-01'),
(2, '2021-03-10'),
(19, '2019-09-25'),
(5, '2021-01-05'),
(12, '2020-06-18'),
(1, '2021-04-22'),
(15, '2020-08-09'),
(4, '2021-07-14'),
(10, '2019-10-03'),
(7, '2020-03-19'),
(18, '2021-09-27'),
(9, '2020-11-11'),
(20, '2021-05-31'),
(13, '2019-12-21'),
(16, '2020-02-06');

END:

-- @block
-- CUSTOMER
BEGIN;

INSERT INTO public."CUSTOMER" (_profile, joined_at) 
VALUES 
(15, '2020-11-14'),
(3, '2021-02-25'),
(12, '2020-06-10'),
(8, '2021-09-03'),
(18, '2020-12-18'),
(5, '2021-03-11'),
(9, '2020-01-22'),
(14, '2021-04-27'),
(1, '2020-05-19'),
(17, '2021-07-30'),
(10, '2020-08-08'),
(4, '2021-11-21'),
(20, '2020-03-14'),
(7, '2021-10-07'),
(2, '2020-02-11'),
(13, '2021-06-16'),
(6, '2020-04-29'),
(19, '2021-05-05'),
(16, '2020-09-12'),
(11, '2021-01-01');

END;

-- @block
-- EMPLOYEE
BEGIN;

INSERT INTO public."EMPLOYEE" (_profile, _position, recruited_at) 
VALUES 
(3, 7, '2021-05-10'),
(8, 4, '2020-08-15'),
(12, 9, '2021-03-25'),
(5, 2, '2020-10-01'),
(18, 6, '2021-07-20'),
(9, 8, '2020-11-30'),
(14, 3, '2021-04-05'),
(1, 10, '2020-01-15'),
(17, 1, '2021-09-10'),
(10, 5, '2020-02-20'),
(4, 11, '2021-06-30'),
(20, 7, '2020-03-12'),
(7, 4, '2021-11-05'),
(2, 9, '2020-04-18'),
(13, 2, '2021-08-22'),
(6, 6, '2020-12-07'),
(19, 8, '2021-01-25'),
(16, 3, '2020-05-28'),
(11, 10, '2021-10-15'),
(15, 5, '2020-07-01');

ENd;

-- @block
BEGIN;

INSERT INTO public."DISTRIBUTOR" (name, local_price) 
VALUES 
('Maju Jaya', 15000),
('Mitra Sejahtera', 16000),
('Berkah Abadi', 15500),
('Bintang Makmur', 17000),
('Agung Jaya', 16500),
('Sinar Makmur', 15500),
('Maju Bersama', 16000),
('Sentosa Jaya', 14500),
('Makmur Jaya', 17000),
('Indah Sejahtera', 15500),
('Jaya Abadi', 16500),
('Maju Sejahtera', 15000),
('Makmur Bersama', 17500),
('Berkah Maju', 16000),
('Harapan Jaya', 15500),
('Berkah Sejahtera', 16500),
('Maju Makmur', 16000),
('Berkah Bersama', 15000),
('Jaya Makmur', 17000),
('Maju Sentosa', 15500);

END;

-- @block
-- PUBLISHER
BEGIN;

INSERT INTO public."PUBLISHER" (_location, _contact, year_founded) 
VALUES 
(6, 16, 1995),
(8, 10, 1988),
(12, 18, 2000),
(4, 14, 1979),
(9, 3, 1998),
(2, 7, 1985),
(15, 11, 2005),
(10, 17, 1973),
(7, 19, 1980),
(13, 5, 1990),
(11, 9, 2003),
(3, 1, 1975),
(16, 20, 1983),
(5, 13, 1993),
(20, 2, 1988),
(17, 12, 1978),
(1, 15, 1997),
(18, 8, 2001),
(19, 4, 1971),
(14, 6, 1987);

END;

-- @block
-- BOOK
BEGIN;

INSERT INTO public."BOOK" (name, publication_year, pages, main_price) 
VALUES 
('Seribu Cerita', 2009, 320, 50000),
('Raja Gombal', 2016, 280, 45000),
('Sembilan Wali', 2013, 360, 55000),
('Pulau Pari', 2018, 400, 60000),
('Cinta di Kota', 2010, 340, 52000),
('Pahlawan Malam', 2019, 380, 58000),
('Kisah Hidupku', 2011, 320, 50000),
('Mimpi Sejuta', 2017, 420, 62000),
('Bunga Angin', 2014, 350, 53000),
('Api Hidup', 2008, 300, 48000),
('Senja di Pantai', 2015, 400, 60000),
('Hujan di Hatiku', 2012, 380, 58000),
('Rindu Tanah Air', 2007, 360, 55000),
('Dewi Purnama', 2020, 400, 60000),
('Cahaya Pohon', 2006, 320, 50000),
('Lautan Kenangan', 2018, 440, 65000),
('Misteri Gurun', 2010, 340, 52000),
('Rahasia Hutan', 2014, 380, 58000),
('Perjalanan Bukit', 2012, 360, 55000),
('Jelajah Sungai', 2008, 300, 48000);

END;

-- @block
-- DISCOUNT
BEGIN;

INSERT INTO public."DISCOUNT" (code, value, expire) 
VALUES 
('HARIINI', 0.1, '2024-12-31'),
('HEMAT50', 0.5, '2024-11-30'),
('BELIDUA', 0.2, '2024-10-31'),
('PROMO123', 0.3, '2024-09-30'),
('SPESIAL', 0.4, '2024-08-31'),
('MURAH', 0.15, '2024-07-31'),
('POTONGAN', 0.25, '2024-06-30'),
('DISKON100', 1.0, '2024-05-31'),
('SPECIAL30', 0.3, '2024-04-30'),
('DISKON75', 0.75, '2024-03-31'),
('HARGAHARIAN', 0.2, '2024-02-29'),
('SUPERHEMAT', 0.35, '2024-01-31'),
('MANTAP', 0.1, '2023-12-31'),
('HEMATPLUS', 0.25, '2023-11-30'),
('PEMBAJAKAN', 0.45, '2023-10-31'),
('BELIDUAEMPAT', 0.4, '2023-09-30'),
('EKSKLUSIF', 0.2, '2023-08-31'),
('DISKONBESAR', 0.5, '2023-07-31'),
('BELITIGA', 0.3, '2023-06-30'),
('MURAHMERIAH', 0.2, '2023-05-31');

END;

-- @block
-- FRANCHISE
BEGIN;

INSERT INTO public."FRANCHISE" (_owner, _location, _distributor, name) 
VALUES 
(5, 18, 3, 'Warung Buku Ceria'),
(10, 7, 14, 'Toko Buku Mutiara'),
(15, 12, 1, 'Buku Impian'),
(20, 19, 10, 'Pustaka Abadi'),
(3, 5, 16, 'Surga Buku'),
(8, 3, 20, 'Tokobuku Bahagia'),
(13, 9, 7, 'Buku Ajaib'),
(18, 17, 4, 'Warung Buku Sejahtera'),
(1, 2, 15, 'Pustaka Jaya'),
(6, 16, 9, 'Buku Inspirasi'),
(11, 11, 6, 'Toko Buku Serba Ada'),
(16, 13, 11, 'Buku Terang'),
(4, 6, 18, 'Toko Buku Kreatif'),
(9, 4, 8, 'Buku Berkah'),
(14, 1, 17, 'Toko Buku Cerdas'),
(19, 20, 5, 'Pustaka Bintang'),
(2, 8, 12, 'Buku Pintar'),
(7, 14, 19, 'Toko Buku Modern'),
(12, 10, 2, 'Buku Ilmiah'),
(17, 15, 13, 'Pustaka Cemerlang');

END;

-- @block
-- TRANSACTION
BEGIN;

INSERT INTO public."TRANSACTION" (_discount, _franchise, _customer, "timestamp") 
VALUES 
(4, 10, 8, '2024-01-15 08:30:00'),
(NULL, 5, 15, '2024-02-20 10:45:00'),
(1, 17, 3, '2024-03-25 14:20:00'),
(9, 12, 11, '2024-04-10 16:55:00'),
(NULL, 20, 19, '2024-05-05 12:10:00'),
(NULL, 8, 1, '2024-06-15 09:25:00'),
(NULL, 13, 14, '2024-07-20 11:30:00'),
(8, 2, 6, '2024-08-28 13:40:00'),
(6, 18, 12, '2024-09-05 15:15:00'),
(10, 7, 16, '2024-10-10 17:20:00'),
(11, 15, 4, '2024-11-12 18:45:00'),
(NULL, 4, 9, '2024-12-17 19:50:00'),
(NULL, 19, 18, '2025-01-22 20:30:00'),
(14, 6, 2, '2025-02-25 21:55:00'),
(15, 1, 17, '2025-03-30 22:40:00'),
(16, 16, 13, '2025-04-05 23:10:00'),
(NULL, 3, 7, '2025-05-10 08:30:00'),
(18, 11, 10, '2025-06-15 09:45:00'),
(19, 14, 5, '2025-07-20 10:20:00'),
(NULL, 9, 20, '2025-08-25 11:35:00');

END;

-- @block
-- BOOK_WRITTEN_AUTHOR
BEGIN;

INSERT INTO public."BOOK_WRITTEN_AUTHOR" (_book, _author) 
VALUES 
(9, 15),
(16, 2),
(4, 8),
(13, 18),
(2, 7),
(5, 20),
(3, 12),
(1, 4),
(12, 9),
(6, 1),
(17, 13),
(15, 6),
(18, 5),
(10, 3),
(7, 11),
(14, 16),
(11, 19),
(8, 10),
(20, 14),
(19, 15),
(3, 18),
(14, 6),
(1, 13),
(17, 8),
(5, 11);

END;

-- @block
-- BOOK_BOUGHT_CUSTOMER
BEGIN;

INSERT INTO public."BOOK_BOUGHT_CUSTOMER" (_book, _customer, date, price, quantity) 
VALUES 
(1, 10, '2024-01-15', 100000, 2),
(2, 2, '2024-02-20', 150000, 1),
(3, 6, '2024-03-25', 80000, 3),
(4, 1, '2024-04-10', 120000, 1),
(5, 18, '2024-05-05', 90000, 2),
(6, 13, '2024-06-15', 110000, 1),
(7, 5, '2024-07-20', 130000, 2),
(8, 16, '2024-08-28', 95000, 1),
(9, 19, '2024-09-05', 70000, 3),
(10, 3, '2024-10-10', 135000, 1),
(11, 9, '2024-11-12', 105000, 2),
(12, 15, '2024-12-17', 125000, 1),
(13, 14, '2025-01-22', 100000, 2),
(14, 20, '2025-02-25', 145000, 1),
(15, 7, '2025-03-30', 80000, 3),
(16, 8, '2025-04-05', 115000, 1),
(17, 11, '2025-05-10', 95000, 2),
(18, 4, '2025-06-15', 120000, 1),
(19, 17, '2025-07-20', 110000, 2),
(20, 12, '2025-08-25', 130000, 1);

END;

-- @block
-- CUSTOMER_WISHLIST_BOOK
BEGIN;

INSERT INTO public."CUSTOMER_WISHLIST_BOOK" (_customer, _book) 
VALUES 
(1, 5),
(2, 12),
(3, 8),
(4, 17),
(5, 3),
(6, 20),
(7, 9),
(8, 14),
(9, 6),
(10, 11),
(11, 16),
(12, 1),
(13, 18),
(14, 4),
(15, 10),
(16, 15),
(17, 7),
(18, 2),
(19, 19),
(20, 13);

END;

-- @block
-- CUSTOMER_WISHLIST_BOOK
BEGIN;

INSERT INTO public."CUSTOMER_WISHLIST_BOOK" (_customer, _book) 
VALUES 
(1, 5),
(1, 12),
(2, 17),
(2, 3),
(3, 20),
(4, 9),
(4, 14),
(5, 6),
(5, 11),
(5, 16),
(6, 1),
(7, 18),
(8, 4),
(9, 10),
(10, 15),
(10, 7),
(10, 2),
(11, 19),
(12, 8),
(13, 12),
(14, 3),
(16, 9),
(17, 14),
(17, 6),
(18, 11),
(19, 18),
(20, 4);

END;