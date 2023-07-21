function twoSum(nums, target) {
  // Dış döngü, her bir elemana sırayla iterasyon yapmamıza olanak sağlar
  for (let i = 0; i < nums.length; i++) {
    // Hedefe ulaşmak için her elemandan bulmamız gereken değeri hesaplıyoruz
    const numToFind = target - nums[i];

    // İç döngü, i. elemandan sonraki elemanlara iterasyon yapmamıza olanak sağlar
    for (let j = i + 1; j < nums.length; j++) {
      // Eğer j. eleman, numToFind değerine eşitse, çifti bulduk demektir
      if (nums[j] === numToFind) {
        // Bulunan çiftin indislerini bir dizi olarak döndürüyoruz
        return [i, j];
      }
    }
  }

  // Eğer hiçbir çift bulunamazsa, boş bir dizi döndürüyoruz
  return [];
}

// Örnek kullanım:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Çıktı: [0, 1] (çünkü nums[0] + nums[1] = 2 + 7 = 9)
