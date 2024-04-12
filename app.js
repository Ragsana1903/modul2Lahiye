let shopGoods = [
    {
        "store_name": "Moda Dünyası",
        "store_address": "Bakı şəhəri, Nizami kuçəsi 5",
        "products": [
            { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
            { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
            { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
            { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
            { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
            { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
            { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
            { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
            { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
            { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 }
        ]
    },
    {
        "store_name": "Zərif Moda",
        "store_address": "Bakı şəhəri, 28 May kuçəsi 12",
        "products": [
            { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
            { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
            { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
            { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
            { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
            { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
            { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
            { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
            { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
            { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 }
        ]
    },
    {
        "store_name": "Əliyev Moda Mərkəzi",
        "store_address": "Bakı şəhəri, Azadlıq prospekti 89",
        "products": [
            { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
            { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
            { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
            { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
            { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
            { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
            { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
            { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
            { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
            { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
        ]
    }
]


let user = prompt("Admin yoxsa User (A və ya U) şəklində qeyd edin!");
let modaDünyası = [];
let zərifModa = [];
let eliyevModaMərkəzi = [];
while (user !== "A" && user !== "U") {
    user = prompt("Düzgün formatda daxil edin: Admin (A) və ya User (U)");
}
if (user == "A" || user == "U") {
    modaDünyası.push(shopGoods[0].store_name)
    modaDünyası.push(shopGoods[0].store_address)
    for (let i = 0; i < 10; i++) {
        modaDünyası.push(shopGoods[0].products[i])
    }
    console.log(modaDünyası);

    zərifModa.push(shopGoods[1].store_name)
    zərifModa.push(shopGoods[1].store_address)
    for (let i = 0; i < 10; i++) {
        zərifModa.push(shopGoods[1].products[i])
    }
    console.log(zərifModa);

    eliyevModaMərkəzi.push(shopGoods[2].store_name)
    eliyevModaMərkəzi.push(shopGoods[2].store_address)
    for (let i = 0; i < 10; i++) {
        eliyevModaMərkəzi.push(shopGoods[2].products[i])
    }
    console.log(eliyevModaMərkəzi);
}

let aramaKelimesi = prompt("Aramak istediğiniz ürünün adını giriniz:");
function urunAra() {
    let mehsul = [];
    let trim = aramaKelimesi.trim().toLowerCase();

    for (let i = 0; i < shopGoods.length; i++) {
        let magaza = shopGoods[i];
        for (let j = 0; j < magaza.products.length; j++) {
            let urun = magaza.products[j];
            if (urun.product_name.toLowerCase() === trim) {
                mehsul.push(magaza.store_name);
                mehsul.push(magaza.store_address);
                mehsul.push(urun.product_name);
                mehsul.push(urun.product_description);
                mehsul.push(urun.product_price);
                console.clear();
                console.log(mehsul);
                return;
            }
        }
    }

    while (true) {
        let aramaKelimesi1 = prompt("Lütfen ürün adını doğru yazın!");
        trim = aramaKelimesi1.trim().toLowerCase();
        if (trim === "end" || aramaKelimesi1 == false) {
            delete urunAra;
            delete deleteUrun;
            console.log("Program sonlandırıldı.");
            return;
        }
        for (let i = 0; i < shopGoods.length; i++) {
            let magaza = shopGoods[i];
            for (let j = 0; j < magaza.products.length; j++) {
                let urun = magaza.products[j];
                if (urun.product_name.toLowerCase() === trim) {
                    mehsul.push(magaza.store_name);
                    mehsul.push(magaza.store_address);
                    mehsul.push(urun.product_name);
                    mehsul.push(urun.product_description);
                    mehsul.push(urun.product_price);
                    console.clear();
                    console.log(mehsul);
                    return;
                }
            }
        }
        console.log("Üzgünüz, aradığınız ürün bulunamadı.");
    }
}

let deleteMehsul;

function deleteUrun() {
    while (true) {
        deleteMehsul = prompt("Silmek istediğiniz ürün adını yazın veya işlemi iptal etmek için 'end' yazın:");
        if (deleteMehsul == null || deleteMehsul.toLowerCase() == "end") {
            console.log("İşlem iptal edildi.");
            return;
        }

        let trim = deleteMehsul.trim().toLowerCase();
        let deletedFromStore = '';

        for (let i = 0; i < shopGoods.length; i++) {
            let magaza = shopGoods[i];
            for (let j = 0; j < magaza.products.length; j++) {
                let urun = magaza.products[j];
                if (urun.product_name.toLowerCase() === trim) {
                    deletedFromStore = magaza.store_name;
                    let index = magaza.products.findIndex(item => item.product_name.toLowerCase() === trim);
                    if (index !== -1) {
                        magaza.products.splice(index, 1);
                        for (let i = 0; i < shopGoods.length; i++) {
                            if (shopGoods[i].store_name == deletedFromStore) {
                                magaza.products.unshift(shopGoods[i].store_address)
                                magaza.products.unshift(shopGoods[i].store_name)
                            }
                        }
                        console.clear();
                        console.log(`${trim} ürünü ${deletedFromStore} mağazasından silindi.`);
                        console.log(magaza.products);
                        return;
                    }
                }
            }
        }
        console.log("Üzgünüz, belirttiğiniz ürün bulunamadı.");
    }
}

if (aramaKelimesi != null) {
    let trimmedKelime1 = aramaKelimesi.toLowerCase().trim()
    if (trimmedKelime1 != "end") {
        urunAra();
    } else {
        console.log("Arama işlemi iptal edildi.");
    }
    if (trimmedKelime1 !== "end" && trimmedKelime1.length > 0 && user == "A") {
        deleteUrun();
    } else if (trimmedKelime1 !== "end" || trimmedKelime1.length > 0) {
        console.log("Arama işlemi iptal edildi.");
    }
}

let shopName;

function shop() {
    while (true) {
        shopName = prompt("Lütfen bir mağaza adı girin:");
        if (shopName === "") {
            console.log("Mağaza adı doğru şekilde girilmedi.");
            break;
        } else if (shopName === "Moda Dünyası") {
            console.log(modaDünyası);
            break;
        } else if (shopName === "Zərif Moda") {
            console.log(zərifModa);
            break;
        } else if (shopName === "Əliyev Moda Mərkəzi") {
            console.log(eliyevModaMərkəzi);
            break;
        } else if (shopName === null || shopName.trim().toLowerCase() == "end") {
            console.log("Proqram Dayandi");
            break;
        } else {
            console.log("Girilen mağaza adı geçersiz.");
            continue;
        }
    }
}

if (deleteMehsul != null) {
    let trimmedKelime1 = deleteMehsul.toLowerCase().trim()
    if (trimmedKelime1 !== "end" && trimmedKelime1.length > 0) {
        shop()
    } else if (trimmedKelime1 !== "end" || trimmedKelime1.length > 0) {
        console.log("Arama işlemi iptal edildi.");
    }
}

let yeniQiymet;
function prizeMehsul() {
    while (true) {
        let urunAdi = prompt("Qiymetini deyismek isdediyiniz ürün adını yazın veya işlemi iptal etmek için 'end' yazın:");
        if (urunAdi == null || urunAdi.toLowerCase() === "end") {
            console.log("İşlem iptal edildi.");
            return;
        }
        if (urunAdi.trim() === "") {
            console.log("Lütfen bir ürün adı girin!");
            continue;
        }

        let trim = urunAdi.trim().toLowerCase();

        let urunVarMi = false;
        for (let i = 0; i < shopGoods.length; i++) {
            let magaza = shopGoods[i];
            for (let j = 0; j < magaza.products.length; j++) {
                let urun1 = magaza.products[j];
                if (urun1.product_name.toLowerCase() === trim) {
                    urunVarMi = true;
                    break;
                }
            }
            if (urunVarMi) {
                break;
            }
        }

        if (!urunVarMi) {
            console.log("Belirtilen ürün adı mevcut değil!");
            continue;
        }

        while (true) {
            yeniQiymet = prompt("Yeni Qiymedi yazin!");
            if (yeniQiymet == null || yeniQiymet.toLowerCase() === "end") {
                console.log("İşlem iptal edildi.");
                return;
            }
            if (yeniQiymet.trim() === "" || isNaN(yeniQiymet)) {
                console.log("Lütfen geçerli bir sayı girin!");
                continue;
            } else {
                break;
            }
        }

        for (let i = 0; i < shopGoods.length; i++) {
            let magaza = shopGoods[i];
            for (let j = 0; j < magaza.products.length; j++) {
                let urun = magaza.products[j];
                if (urun.product_name.toLowerCase() === trim) {
                    urun.product_price = yeniQiymet;
                    let priceArray = [];
                    priceArray.push(magaza.store_name);
                    priceArray.push(magaza.store_address);
                    priceArray.push(urun.product_name);
                    priceArray.push(urun.product_description);
                    priceArray.push(urun.product_price);
                    console.clear();
                    console.log(priceArray);
                    return;
                }
            }
        }
    }
}

if (shopName != null) {
    if (shopName !== "end" && shopName != null && user == "A") {
        prizeMehsul();
    } else if (shopName == "end" || shopName == null) {
        console.log("Arama işlemi iptal edildi.");
    }
}


let increaseMehsul;
function increase() {
    while (true) {
        increaseMehsul = prompt("mehsullari artan ve azalan sira ile duzek ?(artan ve ya azalan)!");
        let modaDünyasıArray = [];
        let zərifModaArray = []
        let eliyevModaMərkəziArray = []
        if (increaseMehsul == "artan") {
            modaDünyasıArray.push(shopGoods[0].store_name)
            modaDünyasıArray.push(shopGoods[0].store_address)
            modaDünyasıArray.push(shopGoods[0].products[4])
            modaDünyasıArray.push(shopGoods[0].products[3])
            modaDünyasıArray.push(shopGoods[0].products[8])
            modaDünyasıArray.push(shopGoods[0].products[0])
            modaDünyasıArray.push(shopGoods[0].products[1])
            modaDünyasıArray.push(shopGoods[0].products[9])
            modaDünyasıArray.push(shopGoods[0].products[2])
            modaDünyasıArray.push(shopGoods[0].products[7])
            modaDünyasıArray.push(shopGoods[0].products[5])
            modaDünyasıArray.push(shopGoods[0].products[6])
            zərifModaArray.push(shopGoods[1].store_name)
            zərifModaArray.push(shopGoods[1].store_address)
            zərifModaArray.push(shopGoods[1].products[8])
            zərifModaArray.push(shopGoods[1].products[2])
            zərifModaArray.push(shopGoods[1].products[5])
            zərifModaArray.push(shopGoods[1].products[9])
            zərifModaArray.push(shopGoods[1].products[4])
            zərifModaArray.push(shopGoods[1].products[6])
            zərifModaArray.push(shopGoods[1].products[3])
            zərifModaArray.push(shopGoods[1].products[1])
            zərifModaArray.push(shopGoods[1].products[7])
            zərifModaArray.push(shopGoods[1].products[0])

            eliyevModaMərkəziArray.push(shopGoods[2].store_name)
            eliyevModaMərkəziArray.push(shopGoods[2].store_address)
            eliyevModaMərkəziArray.push(shopGoods[2].products[8])
            eliyevModaMərkəziArray.push(shopGoods[2].products[5])
            eliyevModaMərkəziArray.push(shopGoods[2].products[4])
            eliyevModaMərkəziArray.push(shopGoods[2].products[9])
            eliyevModaMərkəziArray.push(shopGoods[2].products[2])
            eliyevModaMərkəziArray.push(shopGoods[2].products[7])
            eliyevModaMərkəziArray.push(shopGoods[2].products[3])
            eliyevModaMərkəziArray.push(shopGoods[2].products[6])
            eliyevModaMərkəziArray.push(shopGoods[2].products[1])
            eliyevModaMərkəziArray.push(shopGoods[2].products[0])
            console.clear()
            console.log(modaDünyasıArray);
            console.log(zərifModaArray);
            console.log(eliyevModaMərkəziArray);
        } else if (increaseMehsul === "end" || increaseMehsul == null) {
            console.log("Islem iptal edildi.");
            break;
        } else if (increaseMehsul == "azalan") {
            modaDünyasıArray.unshift(shopGoods[0].store_name)
            modaDünyasıArray.unshift(shopGoods[0].store_address)
            modaDünyasıArray.unshift(shopGoods[0].products[4])
            modaDünyasıArray.unshift(shopGoods[0].products[3])
            modaDünyasıArray.unshift(shopGoods[0].products[8])
            modaDünyasıArray.unshift(shopGoods[0].products[0])
            modaDünyasıArray.unshift(shopGoods[0].products[1])
            modaDünyasıArray.unshift(shopGoods[0].products[9])
            modaDünyasıArray.unshift(shopGoods[0].products[2])
            modaDünyasıArray.unshift(shopGoods[0].products[7])
            modaDünyasıArray.unshift(shopGoods[0].products[5])
            modaDünyasıArray.unshift(shopGoods[0].products[6])

            zərifModaArray.unshift(shopGoods[1].store_name)
            zərifModaArray.unshift(shopGoods[1].store_address)
            zərifModaArray.unshift(shopGoods[1].products[8])
            zərifModaArray.unshift(shopGoods[1].products[2])
            zərifModaArray.unshift(shopGoods[1].products[5])
            zərifModaArray.unshift(shopGoods[1].products[9])
            zərifModaArray.unshift(shopGoods[1].products[4])
            zərifModaArray.unshift(shopGoods[1].products[6])
            zərifModaArray.unshift(shopGoods[1].products[3])
            zərifModaArray.unshift(shopGoods[1].products[1])
            zərifModaArray.unshift(shopGoods[1].products[7])
            zərifModaArray.unshift(shopGoods[1].products[0])

            eliyevModaMərkəziArray.unshift(shopGoods[2].store_name)
            eliyevModaMərkəziArray.unshift(shopGoods[2].store_address)
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[8])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[5])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[4])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[9])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[2])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[7])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[3])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[6])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[1])
            eliyevModaMərkəziArray.unshift(shopGoods[2].products[0])
            console.clear()
            console.log(modaDünyasıArray);
            console.log(zərifModaArray);
            console.log(eliyevModaMərkəziArray)
        } else if (increaseMehsul != "azalan" && increaseMehsul != "artan" && increaseMehsul != "end" && increaseMehsul == "") {
            console.log("Duzgun deyer daxil edin");
            continue;
        }
    }
}

if (yeniQiymet != null) {
    if (yeniQiymet !== "end" && yeniQiymet != null) {
        increase();
    } else if (yeniQiymet == "end" || yeniQiymet == null) {
        console.log("Arama işlemi iptal edildi.");
    }
}

let basketMehsul;
function basketMehsul() {
    while (true) {
        basketMehsul = prompt("Sebete eklemek  istediğiniz ürün adını yazın veya işlemi iptal etmek için 'end' yazın:");
        if (basketMehsul == null || basketMehsul.toLowerCase() == "end") {
            console.log("İşlem iptal edildi.");
            return;
        } else if (basketMehsul == "") {
            console.log("Urun adi daxil edin!");
            continue;
        }

        let trim = basketMehsul.trim().toLowerCase();
        let basketFromStore = '';

        for (let i = 0; i < shopGoods.length; i++) {
            let magaza = shopGoods[i];
            for (let j = 0; j < magaza.products.length; j++) {
                let urun = magaza.products[j];
                if (urun.product_name.toLowerCase() === trim) {
                    basketFromStore = magaza.store_name;
                    let sebet = []
                    let basket = []
                    basket.push(magaza.store_name);
                    basket.push(magaza.store_address);
                    basket.push(urun.product_name);
                    basket.push(urun.product_description);
                    basket.push(urun.product_price);
                    sebet.push(basket)
                    console.clear()
                    console.log(`Sebete ${basketFromStore} urunu ugurla eklendi`);
                    console.log(`Sebetin toplam qiymeti ${urun.product_price} - dir`);
                }
            }
        }
        console.log("Üzgünüz, belirttiğiniz ürün bulunamadı.");
    }
}


if (increaseMehsul != null) {
    if (increaseMehsul !== "end" && increaseMehsul != null) {
        basketMehsul();
    } else if (increaseMehsul == "end" || increaseMehsul == null) {
        console.log("Arama işlemi iptal edildi.");
    }
}
