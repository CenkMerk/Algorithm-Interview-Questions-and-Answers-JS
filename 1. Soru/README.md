## Bir Dizideki İki Sayının Toplamının Hedefe Eşit Olduğu İndisleri Bulma

:question: **Soru** : Verilen bir tamsayılar dizisi (nums) ve bir tamsayı hedef (target) verildiğinde, bu dizideki iki sayının toplamının hedefe eşit olduğu indisleri döndürün.

:arrow_forward:**Örnek 1**:

Girdi: nums = [2, 7, 11, 15], target = 9

Çıktı: [0, 1]

Açıklama: nums[0] + nums[1] == 9 olduğu için [0, 1] döndürülür.


:arrow_forward:**Örnek 2**:

Girdi: nums = [3, 2, 4], target = 6

Çıktı: [1, 2]


:arrow_forward:**Örnek 3**:

Girdi: nums = [3, 3], target = 6

Çıktı: [0, 1]

---

:bulb:**Algoritma Adımları**

1. İki döngü kullanarak tüm olası eleman çiftlerini deneyin:
   1. Dış döngü, diziyi tek tek dolaşarak her elemanı ele alır (i. eleman).
   2.  İç döngü, dış döngüdeki elemandan sonraki tüm elemanları dolaşarak olası ikinci elemanları bulur (j. eleman). 
2. Dış döngüdeki elemandan (nums[i]) hedef değeri çıkararak numToFind adında bir değişkene atayın. Bu, ikinci elemanın değerini bulmamıza yardımcı olacak.
3. İç döngüdeki elemanların değerlerini numToFind ile karşılaştırın. Eğer eşit olursa, bu durumda iki elemanın toplamı hedefe eşit demektir.
4. Eğer eşleşen ikili bulunursa, i ve j indislerini içeren bir dizi olarak sonucu döndürün.
5. Eğer eşleşen ikili bulunamazsa, boş bir dizi döndürün, bu durumda herhangi iki elemanın toplamı hedefe eşit değildir.



