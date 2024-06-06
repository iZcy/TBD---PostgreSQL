-- @block
SELECT * FROM public."TRANSACTION";

-- @block
SELECT * FROM public."FRANCHISE";

-- @block
SELECT * FROM public."DISCOUNT";

-- @block
SELECT * FROM public."CUSTOMER";

-- @block
-- See Transaction Details
CREATE VIEW Lihat_Transaksi AS
SELECT
    public."TRANSACTION".timestamp AS "Waktu Transaksi",
    public."PROFILE".full_name AS "Nama Pelanggan",
    public."BOOK".name AS "Judul Buku",
    CASE
        WHEN
            public."DISCOUNT".expire >= public."TRANSACTION".timestamp
            OR
            public."DISCOUNT".value IS NULL
        THEN public."BOOK".price
        ELSE (1 - public."DISCOUNT".value) * public."BOOK".price
    END AS "Nilai Bayar",
    public."BOOK".price AS "Harga Buku",
    CASE
        WHEN
            public."DISCOUNT".expire >= public."TRANSACTION".timestamp
            OR
            public."DISCOUNT".value IS NULL
        THEN 0
        ELSE public."DISCOUNT".value * 100
    END AS "Diskon (%)",
    CASE
        WHEN
            public."DISCOUNT".expire >= public."TRANSACTION".timestamp
        THEN 'Expired'
        WHEN
            public."DISCOUNT".value IS NULL
        THEN 'Tidak Pakai'
        ELSE 'Valid'
    END AS "Status Diskon"
    
    FROM public."TRANSACTION"
    INNER JOIN public."STOCK" ON
    public."TRANSACTION"._stock = public."STOCK".stock_key
    INNER JOIN public."CUSTOMER" ON
    public."TRANSACTION"._customer = public."CUSTOMER".customer_key
    INNER JOIN public."PROFILE" ON
    public."PROFILE".profile_key = public."CUSTOMER"._profile
    LEFT JOIN public."DISCOUNT" ON
    public."TRANSACTION"._discount = public."DISCOUNT".discount_key
    INNER JOIN public."BOOK" ON
    public."STOCK"._book = public."BOOK".book_key;

-- @block
-- See Employee Details
CREATE VIEW Lihat_Staff AS
SELECT 
    public."PROFILE".full_name AS "Nama",
    public."POSITION".title AS "Jabatan",
    public."FRANCHISE".name AS "Franchise",
    public."EMPLOYEE".recruited_at AS "Tanggal Rekrut",
    public."POSITION".salary AS "Gaji"

    FROM public."EMPLOYEE"
    INNER JOIN public."PROFILE" ON
    public."EMPLOYEE"._profile = public."PROFILE".profile_key
    INNER JOIN public."POSITION" ON
    public."EMPLOYEE"._position = public."POSITION".position_key
    INNER JOIN public."FRANCHISE" ON
    public."EMPLOYEE"._franchise = public."FRANCHISE".franchise_key;


-- @block
SELECT * FROM Lihat_Transaksi;

-- @block
SELECT * FROM Lihat_Staff;