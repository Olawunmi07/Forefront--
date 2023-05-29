const images = [
    'Propietor.jpg',
    'coordinator.JPG',
    'FB_IMG_1659433217082.jpg',
    'DSC_7907-1.JPG',
    'DSC_7847.JPG',
    'DSC_7850-2.JPG',
    'DSC_7850.JPG',
    'DSC_7890.JPG',
    'DSC_7893.JPG',
    'DSC_7896.JPG',
    'DSC_7907-1.JPG',
    'DSC_7909.JPG',
    'DSC_7940.JPG',
    'DSC_7943.JPG',
    'DSC_7946.JPG',
    'DSC_7949.JPG',
    'ex.jpg',
    'exa.jp',
    'exam.jpg',
    'exams.jpg',
    'examss.jpg',
    'examsss.jpg',
    'FB_IMG_1659431951561.jpg',
    'FB_IMG_1659432360655.jpg',
    'FB_IMG_1659433212648.jpg',
    'FB_IMG_1659433217082.jpg',
    'IMG_20210927_123839_722.jpg',
    '295833075_125670746846373_67509670516178283_n.jpg',
    '295839365_125668783513236_6808575628012061199_n.jpg',
    '295854340_125674676845980_7437267010320364693_n.jpg',
    '295861064_125669896846458_5891140570455904937_n.jpg',
    '295868156_125669820179799_4720337225750725037_n.jpg',
    '295886937_125669903513124_1777299022738237884_n.jpg',
    '295911607_125674693512645_8524467793308833678_n.jpg',
    '295913883_125669843513130_4190350786636393272_n.jpg',
    '295925805_125669796846468_5800460873603681520_n.jpg',
    '296023595_125669770179804_658566381624290680_n.jpg',
    '296056477_125669730179808_5183396234442561055_n.jpg',
    '296057893_125669883513126_1975652998231187157_n.jpg',
    '296063812_125674556845992_825079585416715542_n.jpg',
    '296108496_125674466846001_8907422577268740628_n.jpg',
    '296124828_124904483589666_4811342916918526496_n.jpg',
    '296125830_125674616845986_4916695853715914557_n.jpg',
    '296142675_125674646845983_1655271946177817476_n.jpg',
    '296484327_125668743513240_7943298037805771899_n.jpg',
    '296474502_125669476846500_2480308028958616672_n.jpg',
    '297170195_125669646846483_3206105465748880585_n.jpg',
    '296642235_125669853513129_6888674676120836921_n.jpg',
    
    // ... add your remaining image here mutha fuka
  ];
  
  let currentIndex = 0;
  const slide = document.getElementById('slide');
  
  function showSlide() {
    slide.src = images[currentIndex];
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide();
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide();
  }
  
  document.getElementById('nextBtn').addEventListener('click', () => {
    nextSlide();
  });
  
  document.getElementById('prevBtn').addEventListener('click', () => {
    prevSlide();
  });
  
  let timer;
  
  function startTimer() {
    timer = setTimeout(() => {
      nextSlide();
      startTimer();
    }, 5000);
  }
  
  function resetTimer() {
    clearTimeout(timer);
    startTimer();
  }
  
  showSlide();
  startTimer();
  
  document.addEventListener('click', resetTimer);
  