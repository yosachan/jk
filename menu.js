<!-- Begin


var showimage1		= "yes"		//  
var showimage2		= "no"		//  
var linkstop 		= "no" 		//  


document.write('<DIV id="menulocation">');
document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="154"><tr><td class="menutrans">');
   if (linkstop == "no") {
document.write('<img src="menu-top.gif" width="154" height="5"><br>');
}



// 追加変更方法

// この下からの各2行を追加、削除変更



document.write('</td></tr><tr><td nowrap>');
document.write('<a href="index.html" class="menu">トップ</a>');


document.write('</td></tr><tr><td nowrap>');
document.write('<a href="servise.html" class="menu">サービスの流れ</a>');


document.write('</td></tr><tr><td nowrap>');
document.write('<a href="price.html" class="menu">料金の目安</a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="zisseki.html" class="menu">翻訳実績 </a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="ryakureki.html" class="menu">翻訳者略歴 </a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="mitumori.html" class="menu">御見積り(無料)</a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="auto.html" class="menu">自動御見積り</a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="regist.html" class="menu">翻訳者登録</a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="agency.html" class="menu">提携翻訳会社</a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="links.html" class="menu">リンク</a>');


document.write('</td></tr><tr><td nowrap>');
document.write('<a href="contact.html" class="menu">お問い合わせ</a>');

document.write('</td></tr><tr><td nowrap>');
document.write('<a href="aferi.html" class="menu">アフェリエイト</a>');


// COPY AND PASTE THE NEXT TWO LINES TOO ADD A NEW LINK


//document.write('</td></tr><tr><td nowrap>');
//document.write('<a href="index.html" class="menu">予備</a>');



// END menu //



document.write('</td></tr><tr><td>');
document.write('<img src="menu-bottom.gif" width="154" height="1"><br>');

document.write('</td></tr><tr><td align="center">');


//  MENU IMAGESメニュー下の画像


   if (showimage1 == "yes") {
document.write('<br><br><img src="picts/rightimg1.jpg" width="115" height="115" border="0"></a><br><br>');
}
   if (showimage2 == "yes") {
document.write('<img src="xxxxxx.jpg" width="75" height="75" border="0"></a><br><br>');
}
document.write('</td></tr></table></DIV>');

//  End -->
