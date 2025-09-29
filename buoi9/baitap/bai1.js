function tai(isFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFail) {
        reject("Tải thất bại!");
      } else {
        resolve("Tải thành công!");
      }
    }, 2000);
  });
}


tai(false)
  .then((msg) => console.log("Kết quả:", msg))
  .catch((err) => console.log("Lỗi:", err));
