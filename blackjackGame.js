let _money = 100;
document.querySelector('.money').innerHTML = _money;
document.querySelector('#message').style.visibility = 'hidden';
function betGame() {
    _money = _money - 5;
    let _new_money = _money;
    document.querySelector('.money').innerHTML = _new_money;
    
    if(_money <= -5) {
        document.getElementById("message").innerHTML = "your balance is insufficient to play.";
        let _new_money = 0;
        document.querySelector('.money').innerHTML = _new_money;
    }   
    document.querySelector('.button1').style.visibility = 'hidden';
}

function getCard() {
    if(document.querySelector('.button1').style.visibility != 'hidden') {
        alert("BET 5€ PLEASE!");
        return 0;
    }
    document.querySelector('.nameApp').innerHTML = '';
    document.querySelector('.button4').style.visibility = 'hidden';
    document.querySelector('.button2a').style.visibility = 'hidden';
    let _totalCards = 0;
    let _totalCards2 = 0;

    let _cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let _cards2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let _typeCards = ['Karo', 'Kupa', 'Maca', 'Sinek'];
    let _typeCards2 = ['Karo', 'Kupa', 'Maca', 'Sinek'];

    let _cardsCroupier = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let _cards2Croupier = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let _typeCardsCroupier = ['Karo', 'Kupa', 'Maca', 'Sinek'];
    let _typeCards2Croupier = ['Karo', 'Kupa', 'Maca', 'Sinek'];
    
    // MATH RANDOM 
    let _type = _typeCards[Math.floor(Math.random()*_typeCards.length)];
    let _type2 = _typeCards2[Math.floor(Math.random()*_typeCards2.length)];
    
    let _typeCroupier = _typeCardsCroupier[Math.floor(Math.random()*_typeCardsCroupier.length)];
    let _type2Croupier = _typeCards2Croupier[Math.floor(Math.random()*_typeCards2Croupier.length)];

    let _item = _cards[Math.floor(Math.random()*_cards.length)];
    let _item2 = _cards2[Math.floor(Math.random()*_cards2.length)];
    let _itemCroupier = _cardsCroupier[Math.floor(Math.random()*_cardsCroupier.length)];
    let _item2Croupier = _cards2Croupier[Math.floor(Math.random()*_cards2Croupier.length)];

    let _gelenKart = (_item + ' ' + _type + ' - ' + _item2 + ' ' + _type2);
    document.querySelector('.gelenKart').innerHTML = _gelenKart;
    
    let _gelenKartCroupier = (_itemCroupier + ' ' + _typeCroupier + ' - ' + _item2Croupier + ' ' + _type2Croupier);
    document.querySelector('.gelenKartCroupier').innerHTML = _gelenKartCroupier;

    //  PLAYER BJ
    if(((_item === 10 || _item === 'J' || _item === 'Q' || _item === 'K') && _item2 === 'A') ||
        (_item === 'A' && (_item2 === 10 || _item2 === 'J' || _item2 === 'Q' || _item2 === 'K'))) {
    let _bj = "BLACKJACK!!!";
    document.querySelector('.bj').innerHTML = _bj;
    }    
    else {
    document.querySelector('.bj').innerHTML = '';
    }

    //  CROUPIER BJ
    if(((_itemCroupier === 10 || _itemCroupier === 'J' || _itemCroupier === 'Q' || _itemCroupier === 'K') && _item2Croupier === 'A') ||
        (_itemCroupier === 'A' && (_item2Croupier === 10 || _item2Croupier === 'J' || _item2Croupier === 'Q' || _item2Croupier === 'K'))) {
    let _bjCroupier = "BLACKJACK!!!";
    document.querySelector('.bjCroupier').innerHTML = _bjCroupier;
    }    
    else {
    document.querySelector('.bjCroupier').innerHTML = '';
    }

    // PLAYER SWITCH:
    switch(_item) {
        case 2:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/iki_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/iki_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/iki_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/iki_s.png';
                break;
            }
        break;
        case 3:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/uc_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/uc_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/uc_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/uc_s.png';
                break;
            }
        break;
        case 4:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/dort_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/dort_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/dort_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/dort_s.png';
                break;
            }
        break;
        case 5:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/bes_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/bes_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/bes_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/bes_s.png';
                break;
            }
        break;
        case 6:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/alti_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/alti_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/alti_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/alti_s.png';
                break;
            }
        break;
        case 7:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/yedi_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/yedi_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/yedi_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/yedi_s.png';
                break;
            }
        break;
        case 8:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/sekiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/sekiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/sekiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/sekiz_s.png';
                break;
            }
        break;
        case 9:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/dokuz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/dokuz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/dokuz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/dokuz_s.png';
                break;
            }
        break;
        case 10:
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/on_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/on_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/on_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/on_s.png';
                break;
            }
        break;
        case 'J':
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/vale_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/vale_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/vale_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/vale_s.png';
                break;
            }
        break;
        case 'Q':
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/kiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/kiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/kiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/kiz_s.png';
                break;
            }
        break;
        case 'K':
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/papaz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/papaz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/papaz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/papaz_s.png';
                break;
            }
        break;
        case 'A':
            switch(_type) {
                case 'Karo':
                document.querySelector('#img1').src = 'cards/as_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1').src = 'cards/as_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1').src = 'cards/as_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1').src = 'cards/as_s.png';
                break;
            }
        break;
        
    }
    switch(_item2) {
        case 2:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/iki_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/iki_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/iki_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/iki_s.png';
                break;
            }
        break;
        case 3:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/uc_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/uc_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/uc_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/uc_s.png';
                break;
            }
        break;
        case 4:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/dort_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/dort_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/dort_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/dort_s.png';
                break;
            }
        break;
        case 5:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/bes_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/bes_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/bes_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/bes_s.png';
                break;
            }
        break;
        case 6:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/alti_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/alti_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/alti_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/alti_s.png';
                break;
            }
        break;
        case 7:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/yedi_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/yedi_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/yedi_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/yedi_s.png';
                break;
            }
        break;
        case 8:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/sekiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/sekiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/sekiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/sekiz_s.png';
                break;
            }
        break;
        case 9:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/dokuz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/dokuz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/dokuz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/dokuz_s.png';
                break;
            }
        break;
        case 10:
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/on_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/on_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/on_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/on_s.png';
                break;
            }
        break;
        case 'J':
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/vale_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/vale_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/vale_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/vale_s.png';
                break;
            }
        break;
        case 'Q':
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/kiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/kiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/kiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/kiz_s.png';
                break;
            }
        break;
        case 'K':
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/papaz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/papaz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/papaz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/papaz_s.png';
                break;
            }
        break;
        case 'A':
            switch(_type2) {
                case 'Karo':
                document.querySelector('#img2').src = 'cards/as_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2').src = 'cards/as_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2').src = 'cards/as_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2').src = 'cards/as_s.png';
                break;
            }
        break;
    }
    if(_item == _cards[9]) {
        _item = 10;
    }
    if(_item == _cards[10]) {
        _item = 10;
    }
    if(_item == _cards[11]) {
        _item = 10;
    }
    if(_item == _cards[12]) {
        _item = 11;
    }
    if(_item2 == _cards2[9]) {
        _item2 = 10;
    }
    if(_item2 == _cards2[10]) {
        _item2 = 10;
    }
    if(_item2 == _cards2[11]) {
        _item2 = 10;
    }
    if(_item2 == _cards2[12]) {
        _item2 = 11;
    }
    _totalCards = _item + _item2;
    document.querySelector('.totalCards').innerHTML = _totalCards;

    // CROUPIER SWITCH:
    switch(_itemCroupier) {
        case 2:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/iki_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/iki_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/iki_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/iki_s.png';
                break;
            }
        break;
        case 3:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/uc_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/uc_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/uc_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/uc_s.png';
                break;
            }
        break;
        case 4:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/dort_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/dort_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/dort_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/dort_s.png';
                break;
            }
        break;
        case 5:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/bes_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/bes_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/bes_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/bes_s.png';
                break;
            }
        break;
        case 6:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/alti_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/alti_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/alti_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/alti_s.png';
                break;
            }
        break;
        case 7:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/yedi_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/yedi_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/yedi_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/yedi_s.png';
                break;
            }
        break;
        case 8:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/sekiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/sekiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/sekiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/sekiz_s.png';
                break;
            }
        break;
        case 9:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/dokuz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/dokuz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/dokuz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/dokuz_s.png';
                break;
            }
        break;
        case 10:
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/on_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/on_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/on_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/on_s.png';
                break;
            }
        break;
        case 'J':
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/vale_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/vale_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/vale_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/vale_s.png';
                break;
            }
        break;
        case 'Q':
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/kiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/kiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/kiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/kiz_s.png';
                break;
            }
        break;
        case 'K':
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/papaz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/papaz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/papaz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/papaz_s.png';
                break;
            }
        break;
        case 'A':
            switch(_typeCroupier) {
                case 'Karo':
                document.querySelector('#img1Croupier').src = 'cards/as_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img1Croupier').src = 'cards/as_k.png';
                break;
                case 'Maca':
                document.querySelector('#img1Croupier').src = 'cards/as_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img1Croupier').src = 'cards/as_s.png';
                break;
            }
        break;
        
    }
    switch(_item2Croupier) {
        case 2:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/iki_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/iki_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/iki_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/iki_s.png';
                break;
            }
        break;
        case 3:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/uc_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/uc_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/uc_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/uc_s.png';
                break;
            }
        break;
        case 4:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/dort_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/dort_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/dort_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/dort_s.png';
                break;
            }
        break;
        case 5:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/bes_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/bes_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/bes_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/bes_s.png';
                break;
            }
        break;
        case 6:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/alti_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/alti_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/alti_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/alti_s.png';
                break;
            }
        break;
        case 7:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/yedi_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/yedi_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/yedi_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/yedi_s.png';
                break;
            }
        break;
        case 8:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/sekiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/sekiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/sekiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/sekiz_s.png';
                break;
            }
        break;
        case 9:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/dokuz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/dokuz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/dokuz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/dokuz_s.png';
                break;
            }
        break;
        case 10:
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/on_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/on_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/on_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/on_s.png';
                break;
            }
        break;
        case 'J':
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/vale_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/vale_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/vale_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/vale_s.png';
                break;
            }
        break;
        case 'Q':
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/kiz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/kiz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/kiz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/kiz_s.png';
                break;
            }
        break;
        case 'K':
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/papaz_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/papaz_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/papaz_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/papaz_s.png';
                break;
            }
        break;
        case 'A':
            switch(_type2Croupier) {
                case 'Karo':
                document.querySelector('#img2Croupier').src = 'cards/as_karo.png';
                break;
                case 'Kupa':
                document.querySelector('#img2Croupier').src = 'cards/as_k.png';
                break;
                case 'Maca':
                document.querySelector('#img2Croupier').src = 'cards/as_m.png';
                break;
                case 'Sinek':
                document.querySelector('#img2Croupier').src = 'cards/as_s.png';
                break;
            }
        break;
    }
    if(_itemCroupier == _cardsCroupier[9]) {
        _itemCroupier = 10;
    }
    if(_itemCroupier == _cardsCroupier[10]) {
        _itemCroupier = 10;
    }
    if(_itemCroupier == _cardsCroupier[11]) {
        _itemCroupier = 10;
    }
    if(_itemCroupier == _cardsCroupier[12]) {
        _itemCroupier = 11;
    }
    if(_item2Croupier == _cards2Croupier[9]) {
        _item2Croupier = 10;
    }
    if(_item2Croupier == _cards2Croupier[10]) {
        _item2Croupier = 10;
    }
    if(_item2Croupier == _cards2Croupier[11]) {
        _item2Croupier = 10;
    }
    if(_item2Croupier == _cards2Croupier[12]) {
        _item2Croupier = 11;
    }
    _totalCards2 = _itemCroupier + _item2Croupier;
    document.querySelector('.totalCards2').innerHTML = _totalCards2;
}

function giveNewCard() {
document.querySelector('.button2a').style.visibility = 'visible';
let _cards3 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let _item3 = _cards3[Math.floor(Math.random()*_cards3.length)];
let _totalCards3 = 0;
let _typeCards3 = ['Karo', 'Kupa', 'Maca', 'Sinek'];
let _type3 = _typeCards3[Math.floor(Math.random()*_typeCards3.length)];

let _gelenKart3 = (document.querySelector('.gelenKart').innerHTML + ' - ' + _item3 + ' ' + _type3);
document.querySelector('.gelenKart3').innerHTML = _gelenKart3;

switch(_item3) {
case 2:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/iki_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/iki_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/iki_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/iki_s.png';
        break;
    }
break;
case 3:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/uc_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/uc_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/uc_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/uc_s.png';
        break;
    }
break;
case 4:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/dort_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/dort_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/dort_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/dort_s.png';
        break;
    }
break;
case 5:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/bes_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/bes_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/bes_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/bes_s.png';
        break;
    }
break;
case 6:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/alti_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/alti_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/alti_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/alti_s.png';
        break;
    }
break;
case 7:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/yedi_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/yedi_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/yedi_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/yedi_s.png';
        break;
    }
break;
case 8:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/sekiz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/sekiz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/sekiz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/sekiz_s.png';
        break;
    }
break;
case 9:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/dokuz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/dokuz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/dokuz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/dokuz_s.png';
        break;
    }
break;
case 10:
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/on_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/on_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/on_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/on_s.png';
        break;
    }
break;
case 'J':
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/vale_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/vale_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/vale_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/vale_s.png';
        break;
    }
break;
case 'Q':
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/kiz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/kiz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/kiz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/kiz_s.png';
        break;
    }
break;
case 'K':
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/papaz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/papaz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/papaz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/papaz_s.png';
        break;
    }
break;
case 'A':
    switch(_type3) {
        case 'Karo':
        document.querySelector('#img3').src = 'cards/as_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img3').src = 'cards/as_k.png';
        break;
        case 'Maca':
        document.querySelector('#img3').src = 'cards/as_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img3').src = 'cards/as_s.png';
        break;
    }
break;
}
if(_item3 == _cards3[9]) {
    _item3 = 10;
}
if(_item3 == _cards3[10]) {
    _item3 = 10;
}
if(_item3 == _cards3[11]) {
    _item3 = 10;
}
if(_item3 == _cards3[12]) {
    _item3 = 11;
}
document.querySelector('.totalCards').style.visibility = 'hidden';
_totalCards3 = Number(document.querySelector('.totalCards').innerHTML) + _item3;
document.querySelector('.totalCards3').innerHTML = _totalCards3;
document.querySelector('.totalCards').innerHTML = 0;
document.querySelector('.button1').style.visibility = 'hidden';
document.querySelector('.button2').style.visibility = 'hidden';

}

function giveNewCard1() {
let _cards4 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
let _item4 = _cards4[Math.floor(Math.random()*_cards4.length)];
let _totalCards4 = 0;
let _typeCards4 = ['Karo', 'Kupa', 'Maca', 'Sinek'];
let _type4 = _typeCards4[Math.floor(Math.random()*_typeCards4.length)];

let _gelenKart4 = document.querySelector('.gelenKart3').innerHTML + ' - ' + _item4 + ' ' + _type4;
document.querySelector('.gelenKart4').innerHTML = _gelenKart4;

switch(_item4) {
case 2:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/iki_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/iki_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/iki_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/iki_s.png';
        break;
    }
break;
case 3:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/uc_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/uc_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/uc_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/uc_s.png';
        break;
    }
break;
case 4:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/dort_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/dort_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/dort_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/dort_s.png';
        break;
    }
break;
case 5:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/bes_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/bes_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/bes_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/bes_s.png';
        break;
    }
break;
case 6:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/alti_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/alti_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/alti_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/alti_s.png';
        break;
    }
break;
case 7:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/yedi_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/yedi_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/yedi_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/yedi_s.png';
        break;
    }
break;
case 8:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/sekiz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/sekiz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/sekiz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/sekiz_s.png';
        break;
    }
break;
case 9:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/dokuz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/dokuz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/dokuz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/dokuz_s.png';
        break;
    }
break;
case 10:
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/on_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/on_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/on_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/on_s.png';
        break;
    }
break;
case 'J':
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/vale_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/vale_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/vale_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/vale_s.png';
        break;
    }
break;
case 'Q':
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/kiz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/kiz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/kiz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/kiz_s.png';
        break;
    }
break;
case 'K':
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/papaz_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/papaz_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/papaz_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/papaz_s.png';
        break;
    }
break;
case 'A':
    switch(_type4) {
        case 'Karo':
        document.querySelector('#img4').src = 'cards/as_karo.png';
        break;
        case 'Kupa':
        document.querySelector('#img4').src = 'cards/as_k.png';
        break;
        case 'Maca':
        document.querySelector('#img4').src = 'cards/as_m.png';
        break;
        case 'Sinek':
        document.querySelector('#img4').src = 'cards/as_s.png';
        break;
    }
break;
}
if(_item4 == _cards4[9]) {
    _item4 = 10;
}
if(_item4 == _cards4[10]) {
    _item4 = 10;
}
if(_item4 == _cards4[11]) {
    _item4 = 10;
}
if(_item4 == _cards4[12]) {
    _item4 = 11;
}

document.querySelector('.totalCards3').style.visibility = 'hidden';
_totalCards4 = Number(document.querySelector('.totalCards3').innerHTML) + _item4;
document.querySelector('.totalCards4').innerHTML = _totalCards4;
document.querySelector('.totalCards3').innerHTML = 0;
document.querySelector('.button2a').style.visibility = 'hidden';
}

function doNothing() {

    
    document.querySelector('.button2').style.visibility = 'hidden';
    document.querySelector('.button2a').style.visibility = 'hidden';
    document.querySelector('.button3').style.visibility = 'hidden';
    let _a = Number(document.querySelector('.totalCards').innerHTML);
    let _b = Number(document.querySelector('.totalCards3').innerHTML);
    let _c = Number(document.querySelector('.totalCards4').innerHTML);
    let _d = Number(document.querySelector('.totalCards2').innerHTML);
    let _e = Number(document.querySelector('.totalCards3Croupier').innerHTML);
    
    // FIRST PART BEGIN
    if(_d < 16 && _d > 0 && _a <= 21 && _b == 0 && _c == 0 && _e == 0) {
        croupierTurn();
    }
    else {
        rules();
    }
    // FIRST PART END
    // SECOND PART BEGIN 2.1
    if(_b <= 21 && _b > 0 && _a == 0) {
            if(_d < 16 && _d > 0) {
                croupierTurn();
        }
        else {
            rules();
        }
    }
    // SECOND PART END 2.1
    // SECOND PART BEGIN 2.2
    else {
        rules();
    }
    // SECOND PART END 2.2
    // THIRD PART BEGIN 3.1
    if(_c <= 21 && _c > 0 && _a == 0 && _b == 0) {
        if(_d < 16 && _d > 0) {
            croupierTurn();
        }
        else {
            rules();
        }
    }
    // THIRD PART END 3.1
    // THIRD PART BEGIN 3.2
    else {
        rules();
    }
    // THIRD PART END 3.2
}
  
function croupierTurn() {
    let _cards3Croupier = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    let _item3Croupier = _cards3Croupier[Math.floor(Math.random()*_cards3Croupier.length)];
    let _totalCards3Croupier = 0;
    let _typeCards3Croupier = ['Karo', 'Kupa', 'Maca', 'Sinek'];
    let _type3Croupier = _typeCards3Croupier[Math.floor(Math.random()*_typeCards3Croupier.length)];
    
    let _gelenKart3Croupier = (document.querySelector('.gelenKartCroupier').innerHTML + ' - ' + _item3Croupier + ' ' + _type3Croupier);
    document.querySelector('.gelenKart3Croupier').innerHTML = _gelenKart3Croupier;

    switch(_item3Croupier) {
    case 2:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/iki_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/iki_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/iki_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/iki_s.png';
            break;
        }
    break;
    case 3:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/uc_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/uc_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/uc_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/uc_s.png';
            break;
        }
    break;
    case 4:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/dort_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/dort_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/dort_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/dort_s.png';
            break;
        }
    break;
    case 5:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/bes_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/bes_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/bes_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/bes_s.png';
            break;
        }
    break;
    case 6:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/alti_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/alti_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/alti_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/alti_s.png';
            break;
        }
    break;
    case 7:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/yedi_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/yedi_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/yedi_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/yedi_s.png';
            break;
        }
    break;
    case 8:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/sekiz_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/sekiz_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/sekiz_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/sekiz_s.png';
            break;
        }
    break;
    case 9:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/dokuz_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/dokuz_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/dokuz_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/dokuz_s.png';
            break;
        }
    break;
    case 10:
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/on_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/on_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/on_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/on_s.png';
            break;
        }
    break;
    case 'J':
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/vale_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/vale_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/vale_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/vale_s.png';
            break;
        }
    break;
    case 'Q':
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/kiz_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/kiz_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/kiz_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/kiz_s.png';
            break;
        }
    break;
    case 'K':
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/papaz_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/papaz_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/papaz_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/papaz_s.png';
            break;
        }
    break;
    case 'A':
        switch(_type3Croupier) {
            case 'Karo':
            document.querySelector('#img3Croupier').src = 'cards/as_karo.png';
            break;
            case 'Kupa':
            document.querySelector('#img3Croupier').src = 'cards/as_k.png';
            break;
            case 'Maca':
            document.querySelector('#img3Croupier').src = 'cards/as_m.png';
            break;
            case 'Sinek':
            document.querySelector('#img3Croupier').src = 'cards/as_s.png';
            break;
        }
    break;
    }
    if(_item3Croupier == _cards3Croupier[9]) {
        _item3Croupier = 10;
    }
    if(_item3Croupier == _cards3Croupier[10]) {
        _item3Croupier = 10;
    }
    if(_item3Croupier == _cards3Croupier[11]) {
        _item3Croupier = 10;
    }
    if(_item3Croupier == _cards3Croupier[12]) {
        _item3Croupier = 11;
    }
    document.querySelector('.totalCards2').style.visibility = 'hidden';
    _totalCards3Croupier = Number(document.querySelector('.totalCards2').innerHTML) + _item3Croupier;
    document.querySelector('.totalCards3Croupier').innerHTML = _totalCards3Croupier; 
    document.querySelector('.totalCards2').innerHTML = 0;

    rules();
    
}

function rules() {
    let _a = Number(document.querySelector('.totalCards').innerHTML);
    let _b = Number(document.querySelector('.totalCards3').innerHTML);
    let _c = Number(document.querySelector('.totalCards4').innerHTML);
    let _d = Number(document.querySelector('.totalCards2').innerHTML);
    let _e = Number(document.querySelector('.totalCards3Croupier').innerHTML);

    document.querySelector('#message').style.visibility = 'visible';

    if((_a > 21) || (_b > 21) || (_c > 21)) {
        document.getElementById("message").innerHTML = "Player Lost!";
        return document.getElementById("message").innerHTML;
    }

    if((_d > 21) || (_e > 21)) {
        document.getElementById("message").innerHTML = "Player Wins!";
        document.querySelector('.money').innerHTML = _money + 10;
        return document.getElementById("message").innerHTML;        
    }
    
    if(((_a > _d) && (_e == 0)) || ((_a > _e) && (_d == 0)) && (_b == 0) && (_c == 0) && (_a <= 21)) {
        document.getElementById("message").innerHTML = "Player Wins!";
        document.querySelector('.money').innerHTML = _money + 10;
        return document.getElementById("message").innerHTML;
    }

    if(((_b > _d) && (_e == 0)) || ((_b > _e) && (_d == 0)) && (_a == 0) && (_c == 0) && (_b <= 21)) {
        document.getElementById("message").innerHTML = "Player Wins!";
        document.querySelector('.money').innerHTML = _money + 10;
        return document.getElementById("message").innerHTML;
    }

    if(((_c > _d) && (_e == 0)) || ((_c > _e) && (_d == 0)) && (_a == 0) && (_b == 0) && (_c <= 21)) {
        document.getElementById("message").innerHTML = "Player Wins!";
        document.querySelector('.money').innerHTML = _money + 10;
        return document.getElementById("message").innerHTML;     
    }
    
    if(((_a < _d) && (_e == 0)) || ((_a < _e) && (_d == 0)) && ((_b == 0) && (_c == 0)) || (_a > 21))  {
        document.getElementById("message").innerHTML = "Player Lost!";
        return document.getElementById("message").innerHTML;
    }

    if(((_b < _d) && (_e == 0)) || ((_b < _e) && (_d == 0)) && ((_a == 0) && (_c == 0)) || (_b > 21))  {
        document.getElementById("message").innerHTML = "Player Lost!";
        return document.getElementById("message").innerHTML;
    }

    if(((_c < _d) && (_e == 0)) || ((_c < _e) && (_d == 0)) && ((_a == 0) && (_b == 0)) || (_c > 21))  {
        document.getElementById("message").innerHTML = "Player Lost!";
        return document.getElementById("message").innerHTML;
    }

    if((_a == _d) || (_a == _e) || (_b == _d) || (_b == _e) || (_c == _d) || (_c == _e)) {
        document.getElementById("message").innerHTML = "Draw!";
        document.querySelector('.money').innerHTML = _money + 5;
        return document.getElementById("message").innerHTML;
    }
}
