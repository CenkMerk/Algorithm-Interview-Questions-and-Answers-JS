function isPalindrome(number) {
    // Sayıyı tersine çevirme
    // Burda kullanılan js metotlarının açıklaması aşağıda var.
    const reversedNum = parseInt(number.toString().split('').reverse().join(''));
    // Tersine çevrilmiş sayı ile orijinal sayıyı karşılaştırma
    return number === reversedNum;
  }
  
  // Örnek bir sayı belirleyelim
  const exampleNumber = 12321;
  
  // Palindrom kontrolü yapın ve sonucu bildirin
  if (isPalindrome(exampleNumber)) {
    console.log(`${exampleNumber} bir palindrom sayıdır.`);
  } else {
    console.log(`${exampleNumber} bir palindrom sayı değildir.`);
  }